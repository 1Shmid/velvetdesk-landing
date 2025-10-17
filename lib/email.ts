// lib/email.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Email админу о новой заявке
export async function sendAdminNotification(data: {
  business_name: string
  contact_name: string
  email: string
  phone: string
  business_type: string
  created_at: string
}) {
  try {
    await resend.emails.send({
      from: 'VelvetDesk Waitlist <onboarding@velvetdesk.ai>',
      to: 'support@velvetdesk.ai', // ТВОЙ EMAIL СЮДА
      subject: `🎉 New Waitlist Signup: ${data.business_name}`,
      html: `
        <h2>New Waitlist Application</h2>
        <p><strong>Business:</strong> ${data.business_name}</p>
        <p><strong>Contact:</strong> ${data.contact_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Type:</strong> ${data.business_type}</p>
        <p><strong>Time:</strong> ${new Date(data.created_at).toLocaleString()}</p>
        <br>
        <a href="https://supabase.com/dashboard/project/YOUR_PROJECT_ID/editor/waitlist" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">View in Supabase</a>
      `
    })
    return { success: true }
  } catch (error) {
    console.error('Error sending admin email:', error)
    return { success: false, error }
  }
}

// Email клиенту с подтверждением
export async function sendVerificationEmail(data: {
  email: string
  contact_name: string
  business_name: string
  verification_token: string
}) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/verify?token=${data.verification_token}`
  
  try {
    await resend.emails.send({
      from: 'VelvetDesk <hello@velvetdesk.ai>',
      to: data.email,
      subject: '✅ Verify your VelvetDesk Waitlist Application',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">Welcome to VelvetDesk Waitlist!</h1>
          
          <p>Hi ${data.contact_name},</p>
          
          <p>Thank you for joining the VelvetDesk waitlist for <strong>${data.business_name}</strong>!</p>
          
          <p>Please verify your email address by clicking the button below:</p>
          
          <a href="${verificationUrl}" style="display: inline-block; background: #6366f1; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; margin: 20px 0; font-weight: 600;">Verify Email Address</a>
          
          <p>Or copy this link: <a href="${verificationUrl}">${verificationUrl}</a></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <h3>What happens next?</h3>
          <ul>
            <li>✅ Verify your email (click button above)</li>
            <li>⏰ We'll contact you within 2-3 weeks</li>
            <li>🚀 Setup in 48 hours once onboarded</li>
            <li>🎁 First month completely FREE</li>
          </ul>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Current wait time: 2-3 weeks<br>
            Questions? Reply to this email or contact support@velvetdesk.ai
          </p>
        </div>
      `
    })
    return { success: true }
  } catch (error) {
    console.error('Error sending verification email:', error)
    return { success: false, error }
  }
}