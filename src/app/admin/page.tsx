"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const checkSessionAndRedirect = async () => {
      const session = await getSession();
      
      if (session) {
        // User is logged in, redirect to dashboard
        router.push("/admin/dashboard");
      } else {
        // User is not logged in, redirect to login
        router.push("/admin/login");
      }
    };

    checkSessionAndRedirect();
  }, [router]);

  // Show loading state while checking session
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to admin panel...</p>
      </div>
    </div>
  );
}
