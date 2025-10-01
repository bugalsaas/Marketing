import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, subject, message, newsletter } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailContent = `
New message from Bugal website contact form:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Subject: ${subject}
Newsletter signup: ${newsletter ? 'Yes' : 'No'}

Message:
${message}

---
This message was sent from the Bugal website contact form.
    `.trim();

    // Send email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'info@bugal.com.au',
      subject: 'Bugal Website Message',
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New message from Bugal website contact form</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Newsletter signup:</strong> ${newsletter ? 'Yes' : 'No'}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Bugal website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
