import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email settings
const adminEmail = "business@nexomark.agency";
const adminPassword = "GGH1 AA8f camw"; // SMTP password

export async function POST(req: Request) {
    try {
        const { name, email, message, phone, company, subject, budget, service } =
            await req.json();

        if (!name || !email || !message || !service) {
            return NextResponse.json({
                success: false,
                message: "Name, email , service and message are required",
            });
        }

        // Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 465,
            secure: true,
            auth: {
                user: adminEmail,
                pass: adminPassword,
            },
        });

        // Compose the email content with all fields
        const adminEmailContent = `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Service: ${service || "N/A"}
Subject: ${subject || "N/A"}
Budget: ${budget || "N/A"}
Message: ${message}
    `;

        // Send email to admin
        await transporter.sendMail({
            from: `"Nexomark" <business@nexomark.agency>`, // Must match your Zoho email
            to: adminEmail,
            subject: "New Contact Form Submission",
            text: adminEmailContent,
        });

        // Send thank you email to user
        await transporter.sendMail({
            from: `"Nexomark" <business@nexomark.agency>`, // Must match your Zoho email
            to: email,
            subject: "Thank You for Contacting Nexomark",
            html: `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 10px; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #333; text-align: center;">Thank You for Contacting Nexomark!</h2>
        <p style="color: #555; font-size: 16px;">
          Dear <strong>${name}</strong>,<br><br>
          We appreciate you reaching out! Your message has been received, and our team is reviewing it. We aim to respond within <strong>24-48 hours</strong>.
        </p>
        <p style="color: #555; font-size: 16px;">
          If your matter is urgent, you can directly contact us at:
        </p>
        <p style="text-align: center; font-size: 16px;">
          📧 <a href="mailto:business@nexomark.agency" style="color: #007BFF; text-decoration: none;">business@nexomark.agency</a>
        </p>
        <div style="text-align: center; margin-top: 20px;">
          <a href="https://nexomark.agency" style="display: inline-block; padding: 12px 20px; font-size: 16px; font-weight: bold; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
            Visit Our Website
          </a>
        </div>
        <p style="color: #555; font-size: 14px; text-align: center; margin-top: 20px;">
          Best regards, <br>
          <strong>The Nexomark Team</strong>
        </p>
      </div>
    </div>
  `,
        });

        return NextResponse.json({
            success: true,
            message: "Form submitted successfully!",
        });
    } catch (error: unknown) {
        console.error("Email Error:", error);
        return NextResponse.json({
            success: false,
            message: "Error sending email",
            error: error instanceof Error ? error.message : String(error),
        });
    }
}