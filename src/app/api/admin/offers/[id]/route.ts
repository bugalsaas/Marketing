import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// GET /api/admin/offers/[id] - Get specific offer
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const offer = await prisma.offer.findUnique({
      where: { id: params.id }
    });

    if (!offer) {
      return NextResponse.json(
        { error: "Offer not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(offer);
  } catch (error) {
    console.error("Error fetching offer:", error);
    return NextResponse.json(
      { error: "Failed to fetch offer" },
      { status: 500 }
    );
  }
}

// PUT /api/admin/offers/[id] - Update offer
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
    const { title, description, code, discount, validFrom, validUntil, active, featured } = body;

    // Validate required fields
    if (!title || !validFrom || !validUntil) {
      return NextResponse.json(
        { error: "Title, validFrom, and validUntil are required" },
        { status: 400 }
      );
    }

    // Validate dates
    const fromDate = new Date(validFrom);
    const untilDate = new Date(validUntil);
    
    if (isNaN(fromDate.getTime()) || isNaN(untilDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    if (fromDate >= untilDate) {
      return NextResponse.json(
        { error: "ValidFrom must be before ValidUntil" },
        { status: 400 }
      );
    }

    const updatedOffer = await prisma.offer.update({
      where: { id: params.id },
      data: {
        title,
        description,
        code,
        discount,
        validFrom: fromDate,
        validUntil: untilDate,
        active,
        featured,
        updatedAt: new Date()
      }
    });

    return NextResponse.json(updatedOffer);
  } catch (error) {
    console.error("Error updating offer:", error);
    return NextResponse.json(
      { error: "Failed to update offer" },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/offers/[id] - Delete offer
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if offer exists
    const existingOffer = await prisma.offer.findUnique({
      where: { id: params.id }
    });

    if (!existingOffer) {
      return NextResponse.json(
        { error: "Offer not found" },
        { status: 404 }
      );
    }

    await prisma.offer.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ message: "Offer deleted successfully" });
  } catch (error) {
    console.error("Error deleting offer:", error);
    return NextResponse.json(
      { error: "Failed to delete offer" },
      { status: 500 }
    );
  }
}
