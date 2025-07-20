// actions/send-email.js
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, subject, message }) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev", // or your verified domain if set up
      to: "palshetkardivyang@gmail.com", // admin/support email
      subject: `📩 New Support Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; background: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
          <h2 style="color: #333; margin-bottom: 24px;">📬 You've received a new support message</h2>

          <table style="width: 100%; font-size: 16px;">
            <tr>
              <td style="padding: 8px 0;"><strong>👤 Name:</strong></td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>📧 Email:</strong></td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>🏷️ Subject:</strong></td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>

          <hr style="margin: 24px 0;">

          <div style="font-size: 16px; line-height: 1.6;">
            <strong>📝 Message:</strong><br />
            <div style="white-space: pre-wrap; background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #ccc; margin-top: 8px;">
              ${message.replace(/\n/g, "<br />")}
            </div>
          </div>

          <hr style="margin: 32px 0;">

          <footer style="font-size: 13px; color: #666; text-align: center;">
            Sent from your website contact form · ${new Date().toLocaleString()}
          </footer>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: error.message };
  }
}
