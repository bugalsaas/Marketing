import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const faqs = await prisma.fAQ.findMany({
      where: {
        visible: true
      },
      orderBy: [
        { order: 'asc' },
        { category: 'asc' },
        { question: 'asc' }
      ]
    });

    return NextResponse.json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch FAQs' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
