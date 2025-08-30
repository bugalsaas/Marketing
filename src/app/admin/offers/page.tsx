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
  Gift, 
  Calendar,
  Filter,
  MoreHorizontal,
  Clock,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

export default function AdminOffersPage() {
  // Mock data - replace with actual data from database
  const offers = [
    {
      id: 1,
      title: "New Year Special - 2 Months Free",
      description: "Start 2025 with Bugal and get 2 months free on annual subscriptions. Perfect for new NDIS practices.",
      type: "discount",
      discount: "2 months free",
      code: "NEWYEAR2025",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      status: "active",
      featured: true,
      usage: 45,
      maxUsage: 100,
      createdAt: "2025-01-01"
    },
    {
      id: 2,
      title: "Referral Program - 20% Off",
      description: "Refer another NDIS provider and both get 20% off your next month's subscription.",
      type: "referral",
      discount: "20% off",
      code: "REFER20",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      status: "active",
      featured: false,
      usage: 12,
      maxUsage: 50,
      createdAt: "2025-01-01"
    },
    {
      id: 3,
      title: "Student Discount",
      description: "Special pricing for students studying NDIS-related courses. Valid student ID required.",
      type: "student",
      discount: "30% off",
      code: "STUDENT30",
      startDate: "2025-01-01",
      endDate: "2025-06-30",
      status: "active",
      featured: false,
      usage: 8,
      maxUsage: 25,
      createdAt: "2025-01-01"
    },
    {
      id: 4,
      title: "Black Friday Sale",
      description: "Our biggest sale of the year! Up to 50% off all plans for new customers.",
      type: "seasonal",
      discount: "50% off",
      code: "BLACKFRIDAY",
      startDate: "2024-11-29",
      endDate: "2024-12-02",
      status: "expired",
      featured: false,
      usage: 67,
      maxUsage: 100,
      createdAt: "2024-11-01"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      case "expired": return "bg-red-100 text-red-800";
      case "draft": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Active";
      case "inactive": return "Inactive";
      case "expired": return "Expired";
      case "draft": return "Draft";
      default: return status;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "discount": return "bg-blue-100 text-blue-800";
      case "referral": return "bg-green-100 text-green-800";
      case "student": return "bg-purple-100 text-purple-800";
      case "seasonal": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "discount": return "Discount";
      case "referral": return "Referral";
      case "student": return "Student";
      case "seasonal": return "Seasonal";
      default: return type;
    }
  };

  const isExpired = (endDate: string) => {
    return new Date(endDate) < new Date();
  };

  const isActive = (startDate: string, endDate: string, status: string) => {
    if (status !== "active") return false;
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return now >= start && now <= end;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Offers & Promotions</h1>
            <p className="text-[#1f2937]">Manage promotional offers, discounts, and referral programs</p>
          </div>
          <Button className="bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
            <Link href="/admin/offers/new">
              <Plus className="w-4 h-4 mr-2" />
              New Offer
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Total Offers</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">{offers.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-[#2563eb]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Active</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {offers.filter(o => isActive(o.startDate, o.endDate, o.status)).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-green-600" />
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
                    {offers.filter(o => o.featured).length}
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
                  <p className="text-sm font-medium text-[#6b7280]">Total Usage</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {offers.reduce((sum, o) => sum + o.usage, 0)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
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
                    placeholder="Search offers..."
                    className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Types
                </Button>
                <Button variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Statuses
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offers Table */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1e3a8a]">Offers & Promotions</CardTitle>
            <CardDescription>Manage and track promotional campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Offer Details</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Validity</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Usage</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {offers.map((offer) => (
                    <tr key={offer.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb]">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-[#1f2937] mb-1">{offer.title}</div>
                          <div className="text-sm text-[#6b7280] line-clamp-2 mb-2">{offer.description}</div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-100 text-green-800 font-medium">
                              {offer.discount}
                            </Badge>
                            {offer.code && (
                              <Badge variant="secondary" className="font-mono">
                                {offer.code}
                              </Badge>
                            )}
                            {offer.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getTypeColor(offer.type)}>
                          {getTypeLabel(offer.type)}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#6b7280]" />
                            <span className="text-sm text-[#1f2937]">
                              {new Date(offer.startDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#6b7280]" />
                            <span className="text-sm text-[#1f2937]">
                              {new Date(offer.endDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#6b7280]" />
                          <div>
                            <div className="text-sm font-medium text-[#1f2937]">
                              {offer.usage}/{offer.maxUsage}
                            </div>
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-[#2563eb] h-2 rounded-full" 
                                style={{ width: `${(offer.usage / offer.maxUsage) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(offer.status)}>
                            {getStatusLabel(offer.status)}
                          </Badge>
                          {isExpired(offer.endDate) && (
                            <Badge className="bg-red-100 text-red-800 text-xs">Expired</Badge>
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

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1e3a8a]">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create Seasonal Offer
              </Button>
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <Star className="w-4 h-4 mr-2" />
                Manage Featured Offers
              </Button>
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <Gift className="w-4 h-4 mr-2" />
                Preview Offers Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
