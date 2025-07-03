import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create Zoho Mail transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
    });

    // Email to agency (you)
    const agencyMailOptions = {
      from: `"Your Company Name" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: formData.email, // So you can reply directly to the client
      subject: `New ${formData.subject} from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb;">New ${formData.subject}</h2>
          <p><strong>From:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          ${formData.website ? `<p><strong>Website:</strong> <a href="${formData.website}">${formData.website}</a></p>` : ''}
          <p><strong>Service:</strong> ${formData.service}</p>
          ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
          <h3 style="margin-top: 20px; color: #2563eb;">Message:</h3>
          <p style="white-space: pre-line; background: #f8f8f8; padding: 10px; border-radius: 4px;">${formData.message}</p>
          <p style="margin-top: 30px; font-size: 12px; color: #666;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
    };

    // Email to client (confirmation)
    const clientMailOptions = {
      from: `"Your Company Name" <${process.env.ADMIN_EMAIL}>`,
      to: formData.email,
      subject: `Thank you for your ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #2563eb;">Thank you for contacting us, ${formData.name}!</h2>
          <p>We've received your ${formData.subject.toLowerCase()} and our team will review it shortly.</p>
          
          <h3 style="margin-top: 20px; color: #2563eb;">Here's what you submitted:</h3>
          <p><strong>Service:</strong> ${formData.service}</p>
          ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f7ff; border-radius: 6px;">
            <p><strong>Our next steps:</strong></p>
            <ul style="margin-top: 5px; padding-left: 20px;">
              <li>We'll review your request within 24 hours</li>
              <li>Our specialist will contact you to discuss details</li>
              <li>You'll receive a customized proposal</li>
            </ul>
          </div>
          
          <p style="margin-top: 20px;">If you have any urgent questions, feel free to reply to this email.</p>
          
          <p style="margin-top: 30px; font-size: 12px; color: #666;">
            This is an automated message. Please do not reply directly to this email.
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(agencyMailOptions);
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting form. Please try again later.' },
      { status: 500 }
    );
  }
}