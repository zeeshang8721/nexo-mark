import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Verify environment variables exist
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      throw new Error('Email credentials not configured');
    }

    const { name, email, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    // Verify connection configuration
    await transporter.verify().catch(err => {
      console.error('SMTP connection error:', err);
      throw new Error('Failed to connect to SMTP server');
    });

    // Send mail
    const info = await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<div>Name: ${name}<br>Email: ${email}<br>Message: ${message}</div>`,
    });

    console.log('Message sent:', info.messageId);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Full error details:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}