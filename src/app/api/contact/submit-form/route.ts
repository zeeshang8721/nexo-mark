import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  // CORS headers for preflight requests
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://www.nexomark.agency",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    // Parse the incoming form data
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ["name", "email", "message"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { 
            status: 400,
            headers: corsHeaders
          }
        );
      }
    }

    // Configure Zoho Mail transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASSWORD,
      },
      // Optional debugging
      logger: process.env.NODE_ENV === 'development',
      debug: process.env.NODE_ENV === 'development',
    });

    /* ======================================
       EMAIL TEMPLATE FOR AGENCY NOTIFICATION
       (Sent to your admin email)
    ====================================== */
    const agencyEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #2563eb;">New ${formData.subject} from ${formData.name}</h2>
      
      <!-- Sender Information -->
      <div style="margin-bottom: 20px;">
        <p><strong>From:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        ${formData.website ? `<p><strong>Website:</strong> <a href="${formData.website}" target="_blank">${formData.website}</a></p>` : ''}
      </div>
      
      <!-- Service Details -->
      <div style="margin-bottom: 20px;">
        <p><strong>Service:</strong> ${formData.service}</p>
        ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
      </div>
      
      <!-- Message Content -->
      <div style="background: #f8f8f8; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
        <h3 style="color: #2563eb; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-line; margin: 0;">${formData.message}</p>
      </div>
      
      <!-- Footer -->
      <p style="font-size: 12px; color: #666; text-align: center;">
        This message was sent from your website contact form at ${new Date().toLocaleString()}
      </p>
    </div>
    `;

    /* ======================================
       EMAIL TEMPLATE FOR CLIENT CONFIRMATION
       (Sent to the form submitter)
    ====================================== */
    const clientEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #2563eb; margin-bottom: 5px;">Thank you for contacting us, ${formData.name}!</h2>
        <p style="color: #555;">We've received your ${formData.subject.toLowerCase()} and will respond shortly.</p>
      </div>
      
      <!-- Submission Summary -->
      <div style="margin-bottom: 20px;">
        <h3 style="color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px;">Your Submission</h3>
        <p><strong>Service:</strong> ${formData.service}</p>
        ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
      </div>
      
      <!-- Next Steps -->
      <div style="background: #f0f7ff; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
        <h3 style="color: #2563eb; margin-top: 0;">What Happens Next?</h3>
        <ul style="margin: 10px 0 0 20px; padding: 0;">
          <li style="margin-bottom: 8px;">Our team will review your request within 24 hours</li>
          <li style="margin-bottom: 8px;">A specialist will contact you to discuss details</li>
          <li>You'll receive a customized proposal tailored to your needs</li>
        </ul>
      </div>
      
      <!-- Contact Info -->
      <div style="margin-bottom: 20px;">
        <p>For immediate assistance, you can reach us at:</p>
        <p style="margin-left: 20px;">
          <strong>Email:</strong> ${process.env.ADMIN_EMAIL}<br>
          <strong>Phone:</strong> [Your Contact Number]
        </p>
      </div>
      
      <!-- Footer -->
      <p style="font-size: 12px; color: #666; text-align: center;">
        This is an automated message. Please do not reply directly to this email.<br>
        Sent on ${new Date().toLocaleString()}
      </p>
    </div>
    `;

    // Email to agency (your team)
    const agencyMailOptions = {
      from: `"NexoMark Agency" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: formData.email, // Allows direct reply to client
      subject: `New ${formData.subject}: ${formData.name}`,
      html: agencyEmailHtml,
      // Optional text version for non-HTML clients
      text: `New ${formData.subject} from ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    };

    // Email to client (confirmation)
    const clientMailOptions = {
      from: `"NexoMark Agency" <${process.env.ADMIN_EMAIL}>`,
      to: formData.email,
      subject: `Thank you for your ${formData.subject}`,
      html: clientEmailHtml,
      text: `Thank you for contacting NexoMark Agency!\n\nWe've received your ${formData.subject.toLowerCase()} and will respond within 24 hours.`
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(agencyMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    // Successful response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully' 
      },
      { 
        status: 200,
        headers: corsHeaders
      }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    
    // Error response
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error processing your submission. Please try again later.' 
      },
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
}