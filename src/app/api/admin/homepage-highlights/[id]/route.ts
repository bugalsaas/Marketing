import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/homepage-highlights/[id] - Get specific homepage highlight
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const highlight = await prisma.homepageHighlight.findUnique({
      where: { id: params.id }
    });

    if (!highlight) {
      return NextResponse.json(
        { error: "Homepage highlight not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(highlight);
  } catch (error) {
    console.error("Error fetching homepage highlight:", error);
    return NextResponse.json(
      { error: "Failed to fetch homepage highlight" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/homepage-highlights/[id] - Update homepage highlight
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const updatedHighlight = await prisma.homepageHighlight.update({
      where: { id: params.id },
      data: {
        title,
        description,
        image,
        link,
        order,
        active,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedHighlight);
  } catch (error) {
    console.error("Error updating homepage highlight:", error);
    return NextResponse.json(
      { error: "Failed to update homepage highlight" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/homepage-highlights/[id] - Delete homepage highlight
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if homepage highlight exists
    const existingHighlight = await prisma.homepageHighlight.findUnique({
      where: { id: params.id }
    });

    if (!existingHighlight) {
      return NextResponse.json(
        { error: "Homepage highlight not found" },
        { status: 404 }
      );
    }

    await prisma.homepageHighlight.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ message: "Homepage highlight deleted successfully" });
  } catch (error) {
    console.error("Error deleting homepage highlight:", error);
    return NextResponse.json(
      { error: "Failed to delete homepage highlight" },
      { status: 500 }
    );
  }
}
