import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/homepage-highlights - Get all homepage highlights
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const highlights = await prisma.homepageHighlight.findMany({
      orderBy: [
        { order: "asc" },
        { createdAt: "desc" }
      ]
    });

    return NextResponse.json(highlights);
  } catch (error) {
    console.error("Error fetching homepage highlights:", error);
    return NextResponse.json(
      { error: "Failed to fetch homepage highlights" },
      { status: 500 }
    );
  }
}

// POST /api/admin/homepage-highlights - Create new homepage highlight
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, image, link, order, active } = body;

    // Validate required fields
    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    // Get the highest order number if not specified
    let highlightOrder = order;
    if (highlightOrder === undefined) {
      const maxOrder = await prisma.homepageHighlight.aggregate({
        _max: { order: true }
      });
      highlightOrder = (maxOrder._max.order || 0) + 1;
    }

    const highlight = await prisma.homepageHighlight.create({
      data: {
        title,
        description,
        image,
        link,
        order: highlightOrder,
        active: active !== undefined ? active : true
      }
    });

    return NextResponse.json(highlight, { status: 201 });
  } catch (error) {
    console.error("Error creating homepage highlight:", error);
    return NextResponse.json(
      { error: "Failed to create homepage highlight" },
      { status: 500 }
    );
  }
}
