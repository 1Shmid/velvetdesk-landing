// app/api/verify/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Token required' },
        { status: 400 }
      )
    }
    
    // Находим запись по токену
    const { data: waitlistEntry, error: findError } = await supabase
      .from('waitlist')
      .select('*')
      .eq('verification_token', token)
      .single()
    
    if (findError || !waitlistEntry) {
      console.error('Entry not found:', findError)
      return NextResponse.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 404 }
      )
    }
    
    // Проверяем, не верифицирован ли уже
    if (waitlistEntry.email_verified) {
      return NextResponse.json(
        { success: true, message: 'Email already verified' }
      )
    }
    
    // Обновляем статус
    const { error: updateError } = await supabase
      .from('waitlist')
      .update({
        email_verified: true,
        email_verified_at: new Date().toISOString(),
        status: 'email_verified',
        admin_notified: true
      })
      .eq('verification_token', token)
    
    if (updateError) {
      console.error('Update error:', updateError)
      return NextResponse.json(
        { success: false, error: 'Failed to verify email' },
        { status: 500 }
      )
    }
    
    // ✅ ОТПРАВЛЯЕМ EMAIL АДМИНУ ПОСЛЕ ВЕРИФИКАЦИИ
    try {
      await resend.emails.send({
        from: 'VelvetDesk Waitlist <onboarding@velvetdesk.ai>',
        to: 'support@velvetdesk.ai', // ТВОЙ EMAIL
        subject: `✅ New Waitlist Signup VERIFIED: ${waitlistEntry.business_name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">✅ Email Verified - New Waitlist Application</h2>
            
            <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #047857;">Business Details:</h3>
              <p><strong>Business Name:</strong> ${waitlistEntry.business_name}</p>
              <p><strong>Contact Person:</strong> ${waitlistEntry.contact_name}</p>
              <p><strong>Email:</strong> <a href="mailto:${waitlistEntry.email}">${waitlistEntry.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${waitlistEntry.phone}">${waitlistEntry.phone}</a></p>
              <p><strong>Business Type:</strong> ${waitlistEntry.business_type}</p>
              ${waitlistEntry.website ? `<p><strong>Website:</strong> <a href="${waitlistEntry.website}" target="_blank">${waitlistEntry.website}</a></p>` : ''}
              ${waitlistEntry.message ? `<p><strong>Message:</strong><br>${waitlistEntry.message}</p>` : ''}
            </div>
            
            <div style="background: #f3f4f6; border-radius: 8px; padding: 15px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date(waitlistEntry.created_at).toLocaleString('en-GB', { 
                day: '2-digit', 
                month: 'short', 
                year: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZone: 'Europe/Madrid'
              })}</p>
              <p style="margin: 5px 0;"><strong>Verified:</strong> ${new Date(waitlistEntry.email_verified_at || Date.now()).toLocaleString('en-GB', { 
                day: '2-digit', 
                month: 'short', 
                year: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZone: 'Europe/Madrid'
              })}</p>
              <p style="margin: 5px 0;"><strong>Country:</strong> ${waitlistEntry.country}</p>
              <p style="margin: 5px 0;"><strong>Language:</strong> ${waitlistEntry.language.toUpperCase()}</p>
            </div>
            
            <a href="https://supabase.com/dashboard" 
               style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: 600;">
              View in Supabase Dashboard
            </a>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px;">
              <strong>Next Steps:</strong><br>
              1. Review application details<br>
              2. Contact within 2-3 weeks<br>
              3. Schedule onboarding call<br>
              4. Setup in 48 hours
            </p>
          </div>
        `
      })
      
      console.log('✅ Admin notification sent successfully')
      
    } catch (emailError) {
      console.error('❌ Failed to send admin email:', emailError)
      // Не падаем если email не отправился
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email verified successfully' 
    })
    
  } catch (error) {
    console.error('Verification API error:', error)
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    )
  }
}