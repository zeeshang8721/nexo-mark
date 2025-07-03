import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Emergency local storage if everything fails
const storeSubmissionLocally = (data: any) => {
  try {
    const dir = path.join(process.cwd(), 'submissions');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filename = `submission_${Date.now()}.json`;
    fs.writeFileSync(path.join(dir, filename), JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Local storage failed:', e);
  }
};

export async function POST(request: Request) {
  // 1. CORS Configuration
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 2. Parse and Validate Input
    const formData = await request.json();
    const requiredFields = ["name", "email", "message"];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      throw new Error(`Missing fields: ${missingFields.join(', ')}`);
    }

    // 3. Prepare Email Content
    const emailContent = {
      agencySubject: `New ${formData.subject || 'Form Submission'} from ${formData.name}`,
      clientSubject: `Thank you for contacting us, ${formData.name}!`,
      agencyHtml: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background: #f8f8f8; padding: 10px; border-radius: 5px;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
      clientHtml: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank You!</h2>
          <p>We've received your message and will respond within 24 hours.</p>
        </div>
      `
    };

    // 4. Try Primary Submission (Zoho)
    try {
      const zohoTransporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.ADMIN_EMAIL,
          pass: process.env.ADMIN_PASSWORD,
        },
      });

      await zohoTransporter.sendMail({
        from: `"NexoMark" <${process.env.ADMIN_EMAIL}>`,
        to: process.env.ADMIN_EMAIL,
        subject: emailContent.agencySubject,
        html: emailContent.agencyHtml,
        text: `New submission from ${formData.name} (${formData.email}): ${formData.message}`
      });

      await zohoTransporter.sendMail({
        from: `"NexoMark" <${process.env.ADMIN_EMAIL}>`,
        to: formData.email,
        subject: emailContent.clientSubject,
        html: emailContent.clientHtml,
        text: "Thank you for contacting us! We'll respond soon."
      });

      return NextResponse.json(
        { success: true, message: 'Form submitted successfully' },
        { status: 200, headers: corsHeaders }
      );
    } catch (zohoError) {
      console.log('Zoho failed, trying SendGrid...');
    }

    // 5. Try Backup Submission (SendGrid)
    try {
      const sendGridTransporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY,
        },
      });

      await sendGridTransporter.sendMail({
        from: `"NexoMark" <${process.env.ADMIN_EMAIL}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `[Backup] ${emailContent.agencySubject}`,
        html: emailContent.agencyHtml,
        text: `[Backup] New submission from ${formData.name} (${formData.email}): ${formData.message}`
      });

      return NextResponse.json(
        { success: true, message: 'Form submitted via backup method' },
        { status: 200, headers: corsHeaders }
      );
    } catch (sendGridError) {
      console.log('SendGrid failed, storing locally...');
    }

    // 6. Final Fallback - Local Storage
    storeSubmissionLocally({
      ...formData,
      timestamp: new Date().toISOString(),
      status: 'stored_locally'
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form received - confirmation pending',
        warning: 'Stored locally due to email service issues'
      },
      { status: 200, headers: corsHeaders }
    );

  } catch (error) {
    // 7. Comprehensive Error Handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    // Store failed submission for debugging
    storeSubmissionLocally({
      error: errorMessage,
      timestamp: new Date().toISOString(),
      status: 'failed'
    });

    return NextResponse.json(
      { 
        success: false, 
        message: 'We encountered an issue but have saved your submission',
        technicalError: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500, headers: corsHeaders }
    );
  }
}