import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, budget, message, company, website, subject } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // For testing only (remove in production)
      }
    });

    // Email content
    const mailOptions = {
      from: `"NexoMark Contact Form" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New ${subject}: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New ${subject}</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${website ? `<p><strong>Website:</strong> <a href="${website}">${website}</a></p>` : ''}
          <p><strong>Service:</strong> ${service}</p>
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          <h3 style="color: #2563eb; margin-top: 20px;">Message:</h3>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
      text: `
        New ${subject}
        From: ${name} <${email}>
        ${phone ? `Phone: ${phone}` : ''}
        ${company ? `Company: ${company}` : ''}
        ${website ? `Website: ${website}` : ''}
        Service: ${service}
        ${budget ? `Budget: ${budget}` : ''}
        
        Message:
        ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}