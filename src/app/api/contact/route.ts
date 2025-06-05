import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (the owner)
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: "abdulmoizsheikhh@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Someone has contacted you through your portfolio website:
        
        From: ${email}
        Message: ${message}
      `,
    };

    // Email to the visitor (acknowledgment)
    const visitorMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Abdul Moiz Sheikh",
      text: `
        Hi there,

        Thank you for reaching out to me through my portfolio website. I have received your message and will get back to you as soon as possible.

        Best regards,
        Abdul Moiz Sheikh
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(visitorMailOptions)
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
} 