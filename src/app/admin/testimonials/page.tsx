import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Star, 
  User, 
  MessageSquare,
  Filter,
  MoreHorizontal,
  MapPin,
  Building
} from "lucide-react";

export default function AdminTestimonialsPage() {
  // Mock data - replace with actual data from database
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Independent Support Worker",
      company: "Sarah's Support Services",
      location: "Sydney, NSW",
      rating: 5,
      category: "Independent",
      content: "Bugal has completely transformed how I manage my NDIS practice. The time tracking and invoicing features save me hours every week, and the compliance tools give me peace of mind. I can't imagine running my practice without it!",
      photo: "/api/placeholder/80/80",
      featured: true,
      verified: true,
      status: "published",
      createdAt: "2025-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Practice Manager",
      company: "Care Connect NDIS",
      location: "Melbourne, VIC",
      rating: 5,
      category: "Agency",
      content: "As a practice manager overseeing multiple support workers, Bugal's centralized system has been a game-changer. The reporting features give us real-time insights into our operations.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true,
      status: "published",
      createdAt: "2025-01-12"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Support Coordinator",
      company: "Pathway Support Services",
      location: "Brisbane, QLD",
      rating: 4,
      category: "Coordination",
      content: "The client management features are excellent. I can easily track support plans, goals, and progress. The mobile app makes it convenient to update information on the go.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true,
      status: "published",
      createdAt: "2025-01-10"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Independent Support Worker",
      company: "Wilson Care Services",
      location: "Perth, WA",
      rating: 5,
      category: "Independent",
      content: "Finally, a system that understands NDIS requirements! The compliance features are intuitive and the support team is incredibly helpful. Highly recommended for any NDIS provider.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: false,
      status: "pending",
      createdAt: "2025-01-08"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "archived": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "published": return "Published";
      case "pending": return "Pending Review";
      case "archived": return "Archived";
      default: return status;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Independent": return "bg-blue-100 text-blue-800";
      case "Agency": return "bg-green-100 text-green-800";
      case "Coordination": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Testimonials Management</h1>
            <p className="text-[#1f2937]">Manage customer testimonials and success stories</p>
          </div>
          <Button className="bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
            <Link href="/admin/testimonials/new">
              <Plus className="w-4 h-4 mr-2" />
              New Testimonial
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Total Testimonials</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">{testimonials.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#2563eb]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Published</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {testimonials.filter(t => t.status === "published").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Featured</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {testimonials.filter(t => t.featured).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Average Rating</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {(testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
                  <Input
                    placeholder="Search testimonials..."
                    className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Categories
                </Button>
                <Button variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Statuses
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Table */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1e3a8a]">Testimonials</CardTitle>
            <CardDescription>Manage and organize customer feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Company</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Rating</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb]">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-[#2563eb]" />
                          </div>
                          <div>
                            <div className="font-medium text-[#1f2937]">{testimonial.name}</div>
                            <div className="text-sm text-[#6b7280]">{testimonial.role}</div>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="w-3 h-3 text-[#6b7280]" />
                              <span className="text-xs text-[#6b7280]">{testimonial.location}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-[#6b7280]" />
                          <span className="text-[#1f2937]">{testimonial.company}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getCategoryColor(testimonial.category)}>
                          {testimonial.category}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-[#1f2937]">({testimonial.rating})</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(testimonial.status)}>
                            {getStatusLabel(testimonial.status)}
                          </Badge>
                          {testimonial.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>
                          )}
                          {testimonial.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
