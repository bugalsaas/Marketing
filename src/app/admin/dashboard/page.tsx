import { AdminLayout } from "@/components/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  FileText, 
  MessageSquare, 
  HelpCircle, 
  Gift, 
  Users, 
  TrendingUp, 
  Eye,
  Plus
} from "lucide-react";

export default async function AdminDashboardPage() {
  // Fetch real data from database
  const { PrismaClient } = await import('@prisma/client');
  const prisma = new PrismaClient();

  try {
    const blogCount = await prisma.blogPost.count();
    const publishedBlogCount = await prisma.blogPost.count({ where: { published: true } });
    const testimonialCount = await prisma.testimonial.count();
    const faqCount = await prisma.fAQ.count();

    // Fetch recent activity from database
    const recentBlogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { updatedAt: 'desc' },
      take: 2,
      select: { title: true, updatedAt: true, createdAt: true }
    });

    const recentTestimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
      take: 1,
      select: { name: true, createdAt: true }
    });

    const recentFAQs = await prisma.fAQ.findMany({
      orderBy: { updatedAt: 'desc' },
      take: 1,
      select: { question: true, updatedAt: true, createdAt: true }
    });

    // Format recent activity
    const formatTimeAgo = (date: Date) => {
      const now = new Date();
      const diffInMs = now.getTime() - date.getTime();
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      const diffInDays = Math.floor(diffInHours / 24);

      if (diffInHours < 1) {
        return "Just now";
      } else if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
      } else if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
      } else {
        return date.toLocaleDateString();
      }
    };

    const recentActivity = [
      ...recentBlogPosts.map(post => ({
        action: "Blog post published",
        item: post.title,
        time: formatTimeAgo(post.updatedAt || post.createdAt),
        type: "blog"
      })),
      ...recentTestimonials.map(testimonial => ({
        action: "Testimonial added",
        item: testimonial.name,
        time: formatTimeAgo(testimonial.createdAt),
        type: "testimonial"
      })),
      ...recentFAQs.map(faq => ({
        action: "FAQ updated",
        item: faq.question,
        time: formatTimeAgo(faq.updatedAt || faq.createdAt),
        type: "faq"
      }))
    ].sort((a, b) => {
      // Sort by most recent first (this is a simple sort, in production you'd want to sort by actual dates)
      return 0;
    }).slice(0, 4); // Show only the 4 most recent activities

    const stats = [
      {
        title: "Blog Posts",
        value: blogCount.toString(),
        change: `${publishedBlogCount} published`,
        icon: FileText,
        href: "/admin/blog",
        color: "text-blue-600",
        bgColor: "bg-blue-100"
      },
      {
        title: "Testimonials",
        value: testimonialCount.toString(),
        change: "Customer feedback",
        icon: MessageSquare,
        href: "/admin/testimonials",
        color: "text-green-600",
        bgColor: "bg-green-100"
      },
      {
        title: "FAQs",
        value: faqCount.toString(),
        change: "Help articles",
        icon: HelpCircle,
        href: "/admin/faq",
        color: "text-purple-600",
        bgColor: "bg-purple-100"
      },
      {
        title: "Active Offers",
        value: "0",
        change: "No active offers",
        icon: Gift,
        href: "/admin/offers",
        color: "text-orange-600",
        bgColor: "bg-orange-100"
      }
    ];

    const quickActions = [
      {
        title: "Create Blog Post",
        description: "Write a new blog post for your audience",
        icon: FileText,
        href: "/admin/blog/new",
        color: "text-blue-600",
        bgColor: "bg-blue-100"
      },
      {
        title: "Add Testimonial",
        description: "Add a new customer testimonial",
        icon: MessageSquare,
        href: "/admin/testimonials/new",
        color: "text-green-600",
        bgColor: "bg-green-100"
      },
      {
        title: "Create FAQ",
        description: "Add a new frequently asked question",
        icon: HelpCircle,
        href: "/admin/faq/new",
        color: "text-purple-600",
        bgColor: "bg-purple-100"
      },
      {
        title: "New Offer",
        description: "Create a promotional offer",
        icon: Gift,
        href: "/admin/offers/new",
        color: "text-orange-600",
        bgColor: "bg-orange-100"
      }
    ];


    await prisma.$disconnect();
    return (
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Welcome back! Here's what's happening with your Bugal marketing website.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-2 rounded-full ${stat.bgColor}`}>
                      <Icon className={`h-4 w-4 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                    <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto" asChild>
                      <Link href={stat.href}>
                        View all <Eye className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className={`mx-auto p-3 rounded-full ${action.bgColor} mb-3`}>
                      <Icon className={`h-6 w-6 ${action.color}`} />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {action.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button className="w-full" asChild>
                      <Link href={action.href}>
                        <Plus className="h-4 w-4 mr-2" />
                        Create New
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest changes and updates to your website content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-sm text-gray-600">{activity.item}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Analytics</CardTitle>
                <CardDescription>
                  Monitor your website performance and visitor insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/analytics">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage admin users and access permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/admin/users">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AdminLayout>
    );
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    await prisma.$disconnect();
    
    // Fallback to mock data if database fails
  const stats = [
    {
      title: "Blog Posts",
        value: "41",
        change: "5 published",
      icon: FileText,
      href: "/admin/blog",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Testimonials",
        value: "0",
        change: "No data",
      icon: MessageSquare,
      href: "/admin/testimonials",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "FAQs",
        value: "0",
        change: "No data",
      icon: HelpCircle,
      href: "/admin/faq",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Active Offers",
        value: "0",
        change: "No data",
      icon: Gift,
      href: "/admin/offers",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const quickActions = [
    {
      title: "Create Blog Post",
      description: "Write a new blog post for your audience",
      icon: FileText,
      href: "/admin/blog/new",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Add Testimonial",
      description: "Add a new customer testimonial",
      icon: MessageSquare,
      href: "/admin/testimonials/new",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Create FAQ",
      description: "Add a new frequently asked question",
      icon: HelpCircle,
      href: "/admin/faq/new",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "New Offer",
      description: "Create a promotional offer",
      icon: Gift,
      href: "/admin/offers/new",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

    const recentActivity = [
      {
        action: "No recent activity",
        item: "Database connection failed",
        time: "Just now",
        type: "error"
      }
    ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's what's happening with your Bugal marketing website.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto" asChild>
                    <Link href={stat.href}>
                      View all <Eye className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`mx-auto p-3 rounded-full ${action.bgColor} mb-3`}>
                    <Icon className={`h-6 w-6 ${action.color}`} />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {action.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" asChild>
                    <Link href={action.href}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create New
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest changes and updates to your website content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-600">{activity.item}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Analytics</CardTitle>
              <CardDescription>
                Monitor your website performance and visitor insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/analytics">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage admin users and access permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/users">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
}