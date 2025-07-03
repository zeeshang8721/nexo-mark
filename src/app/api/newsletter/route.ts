import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const adminEmail = "business@nexomark.agency";
  const adminPassword = "GGH1 AA8f camw"; // Use environment variables in production

  try {
    const data = await req.json();
    const { email } = data;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPassword,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Nexomark Newsletter" <${adminEmail}>`,
      to: adminEmail,
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Newsletter Subscriber</h2>
          <p>A new user has subscribed to your newsletter:</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 30px; color: #666;">
            This email was automatically generated from your website's newsletter form.
          </p>
        </div>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Nexomark" <${adminEmail}>`,
      to: email,
      subject: "Thanks for subscribing!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Welcome to Nexomark Newsletter</h2>
          <p>Thank you for subscribing to our newsletter. You'll now receive:</p>
          <ul>
            <li>Latest industry insights</li>
            <li>Exclusive offers</li>
            <li>Company updates</li>
          </ul>
          <p style="margin-top: 30px; color: #666;">
            If this was a mistake, you can unsubscribe anytime.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Subscription successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter Error:", error);
    return NextResponse.json(
      { success: false, message: "Error processing subscription" },
      { status: 500 }
    );
  }
}