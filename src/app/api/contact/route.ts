import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const adminEmail = "business@nexomark.agency";
const adminPassword = "GGH1 AA8f camw"; // SMTP password

interface ContactData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  website?: string;
  subject?: string;
}

export async function POST(req: Request) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  try {
    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Invalid content type" }),
        { status: 400, headers }
      );
    }

    const data: ContactData = await req.json();
    const {
      name,
      email,
      message,
      phone,
      company,
      service,
      budget,
      website,
      subject,
    } = data;
    const isAgency = subject === "Partnership Request";
    const currentDate = new Date().toLocaleString();

    // Validation
    if (!name || !email || !message || !service) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Name, email, service and message are required",
        }),
        { status: 400, headers }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPassword,
      },
    });


    // ADMIN NOTIFICATION EMAIL TEMPLATE
    const adminEmailContent = isAgency
      ? `
      <div style="max-width: 650px; margin: 0 auto; font-family: 'Inter', Arial, sans-serif; background: #0c0c0c; border-radius: 12px; overflow: hidden; border: 1px solid #1f1f1f;">
        <!-- Header with Gradient -->
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); padding: 24px; text-align: center;">
          <img src="https://nexomark.agency/LogoBlueBlack-01.png" alt="Logo" style="height: 40px;">
          <h1 style="color: white; font-size: 22px; font-weight: 600; margin: 16px 0 0;">New Agency Partnership Request</h1>
        </div>

        <!-- Content -->
        <div style="padding: 30px; color: #e5e7eb;">
          <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" stroke="#3b82f6" stroke-width="2"/>
                <path d="M16 7H8V9H16V7Z" fill="#3b82f6"/>
                <path d="M16 11H8V13H16V11Z" fill="#3b82f6"/>
                <path d="M16 15H8V17H16V15Z" fill="#3b82f6"/>
              </svg>
              Agency Details
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f; width: 140px;"><strong style="color: #9ca3af;">Contact:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;"><strong style="color: #9ca3af;">Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;"><strong style="color: #9ca3af;">Phone:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${phone || "Not provided"
      }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong style="color: #9ca3af;">Agency:</strong></td>
                <td style="padding: 8px 0;">${company || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong style="color: #9ca3af;">Website:</strong></td>
                <td style="padding: 8px 0;">
                  ${website
        ? `<a href="${website}" style="color: #3b82f6; text-decoration: none;">${website}</a>`
        : "Not provided"
      }
                </td>
              </tr>
            </table>
          </div>

          <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" stroke-width="2"/>
                <path d="M12 16V12M12 8H12.01" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Partnership Details
            </h2>
            <p style="margin: 0;"><strong style="color: #9ca3af;">Type:</strong> ${service}</p>
          </div>

          <div style="background: #121212; border-radius: 8px; padding: 20px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Proposal Message
            </h2>
            <div style="background: #0c0c0c; padding: 16px; border-radius: 6px; border-left: 3px solid #3b82f6;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #e5e7eb;">${message}</p>
            </div>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin-top: 32px;">
            <a href="mailto:${email}?subject=Re: Partnership Inquiry" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; border: none;">
              Respond to Agency
            </a>
          </div>

          <!-- Footer -->
          <p style="text-align: center; margin-top: 32px; color: #6b7280; font-size: 13px; border-top: 1px solid #1f1f1f; padding-top: 16px;">
            Received on ${currentDate}<br>
            <span style="color: #3b82f6;">Nexomark Partnerships Team</span>
          </p>
        </div>
      </div>
    `
      : `
      <div style="max-width: 650px; margin: 0 auto; font-family: 'Inter', Arial, sans-serif; background: #0c0c0c; border-radius: 12px; overflow: hidden; border: 1px solid #1f1f1f;">
        <!-- Header with Gradient -->
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); padding: 24px; text-align: center;">
          <img src="https://nexomark.agency/LogoBlueBlack-01.png" alt="Nexomark Logo" style="height: 40px;">
          <h1 style="color: white; font-size: 22px; font-weight: 600; margin: 16px 0 0;">New Client Project Inquiry</h1>
        </div>

        <!-- Content -->
        <div style="padding: 30px; color: #e5e7eb;">
          <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 11L19 13L23 9" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Client Details
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f; width: 140px;"><strong style="color: #9ca3af;">Name:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;"><strong style="color: #9ca3af;">Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;"><strong style="color: #9ca3af;">Phone:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${phone || "Not provided"
      }</td>
              </tr>
              ${company
        ? `
              <tr>
                <td style="padding: 8px 0;"><strong style="color: #9ca3af;">Company:</strong></td>
                <td style="padding: 8px 0;">${company}</td>
              </tr>
              `
        : ""
      }
            </table>
          </div>

          <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Project Details
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f; width: 140px;"><strong style="color: #9ca3af;">Service:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong style="color: #9ca3af;">Budget:</strong></td>
                <td style="padding: 8px 0;">${budget || "Not specified"}</td>
              </tr>
            </table>
          </div>

          <div style="background: #121212; border-radius: 8px; padding: 20px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Project Description
            </h2>
            <div style="background: #0c0c0c; padding: 16px; border-radius: 6px; border-left: 3px solid #3b82f6;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #e5e7eb;">${message}</p>
            </div>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin-top: 32px;">
            <a href="mailto:${email}?subject=Re: Project Inquiry" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; border: none;">
              Respond to Client
            </a>
          </div>

          <!-- Footer -->
          <p style="text-align: center; margin-top: 32px; color: #6b7280; font-size: 13px; border-top: 1px solid #1f1f1f; padding-top: 16px;">
            Received on ${currentDate}<br>
            <span style="color: #3b82f6;">Nexomark Client Services</span>
          </p>
        </div>
      </div>
    `;

    // USER CONFIRMATION EMAIL TEMPLATE
    const userEmailContent = isAgency
      ? `
      <div style="max-width: 650px; margin: 0 auto; font-family: 'Inter', Arial, sans-serif; background: #0c0c0c; border-radius: 12px; overflow: hidden; border: 1px solid #1f1f1f;">
        <!-- Header with Gradient -->
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); padding: 24px; text-align: center;">
          <img src="https://nexomark.agency/logo-white.png" alt="Nexomark Logo" style="height: 40px; margin-bottom: 16px;">
          <h1 style="color: white; font-size: 22px; font-weight: 600; margin: 0;">Partnership Request Received</h1>
        </div>

        <!-- Content -->
        <div style="padding: 30px; color: #e5e7eb;">
          <div style="margin-bottom: 24px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              Dear <strong>${name}</strong>,<br><br>
              Thank you for your interest in partnering with Nexomark. We've received your proposal and our partnerships team is currently reviewing it.
            </p>

            <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
              <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
                <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" stroke-width="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Your Submission
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f; width: 140px;"><strong style="color: #9ca3af;">Agency:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${company || "Not provided"
      }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;"><strong style="color: #9ca3af;">Type:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong style="color: #9ca3af;">Website:</strong></td>
                  <td style="padding: 8px 0;">
                    ${website
        ? `<a href="${website}" style="color: #3b82f6; text-decoration: none;">${website}</a>`
        : "Not provided"
      }
                  </td>
                </tr>
              </table>
            </div>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              We aim to respond to all partnership inquiries within <strong>2 business days</strong>. If you need immediate assistance, please contact our partnerships team directly:
            </p>

            <div style="text-align: center; margin-bottom: 32px;">
              <a href="mailto:partners@nexomark.agency" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; border: none;">
                Contact Partnerships Team
              </a>
            </div>
          </div>

          <!-- Additional Resources -->
          <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8V16" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 12H16" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Partnership Resources
            </h2>
            <p style="margin-bottom: 16px; font-size: 15px; color: #9ca3af;">
              Learn more about our partnership program and benefits:
            </p>
            <a href="https://nexomark.agency/partners" style="display: block; padding: 12px; background: #0c0c0c; border-radius: 6px; color: #3b82f6; text-decoration: none; font-weight: 500; margin-bottom: 8px; text-align: center; border: 1px solid #1f1f1f;">
              View Partnership Program →
            </a>
          </div>

          <!-- Footer -->
          <p style="text-align: center; margin-top: 32px; color: #6b7280; font-size: 13px; border-top: 1px solid #1f1f1f; padding-top: 16px;">
            This is an automated message. Please do not reply directly to this email.<br>
            <span style="color: #3b82f6;">Nexomark Partnerships Team</span>
          </p>
        </div>
      </div>
    `
      : `
      <div style="max-width: 650px; margin: 0 auto; font-family: 'Inter', Arial, sans-serif; background: #0c0c0c; border-radius: 12px; overflow: hidden; border: 1px solid #1f1f1f;">
        <!-- Header with Gradient -->
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); padding: 24px; text-align: center;">
          <img src="https://nexomark.agency/logo-white.png" alt="Nexomark Logo" style="height: 40px; margin-bottom: 16px;">
          <h1 style="color: white; font-size: 22px; font-weight: 600; margin: 0;">Thank You for Your Inquiry</h1>
        </div>

        <!-- Content -->
        <div style="padding: 30px; color: #e5e7eb;">
          <div style="margin-bottom: 24px;">
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              Dear <strong>${name}</strong>,<br><br>
              Thank you for reaching out to Nexomark regarding your ${service} project. We've received your details and our team is currently reviewing them.
            </p>

            <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
              <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
                <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Project Summary
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f; width: 140px;"><strong style="color: #9ca3af;">Service:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #1f1f1f;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong style="color: #9ca3af;">Budget:</strong></td>
                  <td style="padding: 8px 0;">${budget || "Flexible"}</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              We aim to respond to all inquiries within <strong>24-48 hours</strong>. If you need immediate assistance, please contact our project team directly:
            </p>

            <div style="text-align: center; margin-bottom: 32px;">
              <a href="mailto:projects@nexomark.agency" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px; border: none;">
                Contact Project Team
              </a>
            </div>
          </div>

          <!-- Additional Resources -->
          <div style="background: #121212; border-radius: 8px; padding: 20px; margin-bottom: 24px; border: 1px solid #1f1f1f;">
            <h2 style="color: #3b82f6; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center;">
              <svg style="margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8V16" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 12H16" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Helpful Resources
            </h2>
            <p style="margin-bottom: 16px; font-size: 15px; color: #9ca3af;">
              While you wait, explore these resources about our services:
            </p>
            <a href="https://nexomark.agency/services" style="display: block; padding: 12px; background: #0c0c0c; border-radius: 6px; color: #3b82f6; text-decoration: none; font-weight: 500; margin-bottom: 8px; text-align: center; border: 1px solid #1f1f1f;">
              View Our Services →
            </a>
            <a href="https://nexomark.agency/portfolio" style="display: block; padding: 12px; background: #0c0c0c; border-radius: 6px; color: #3b82f6; text-decoration: none; font-weight: 500; text-align: center; border: 1px solid #1f1f1f;">
              See Our Portfolio →
            </a>
          </div>

          <!-- Footer -->
          <p style="text-align: center; margin-top: 32px; color: #6b7280; font-size: 13px; border-top: 1px solid #1f1f1f; padding-top: 16px;">
            This is an automated message. Please do not reply directly to this email.<br>
            <span style="color: #3b82f6;">Nexomark Client Services</span>
          </p>
        </div>
      </div>
    `;

    // Send admin notification
   await transporter.sendMail({
      from: `"Nexomark" <${adminEmail}>`,
      to: adminEmail,
      subject: isAgency
        ? "New Agency Partnership Request"
        : "New Client Project Inquiry",
      html: adminEmailContent,
    });

    // Send user confirmation
    await transporter.sendMail({
      from: `"Nexomark" <${adminEmail}>`,
      to: email,
      subject: isAgency
        ? "Thank You for Your Partnership Interest"
        : "Thank You for Your Project Inquiry",
      html: userEmailContent,
    });

    return new NextResponse(
      JSON.stringify({ success: true, message: "Form submitted successfully!" }),
      { status: 200, headers }
    );

  } catch (error) {
    console.error("Error:", error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Internal server error"
      }),
      { status: 500, headers }
    );
  }
}