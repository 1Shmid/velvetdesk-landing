// app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendVerificationEmail } from '@/lib/email'
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log('📥 Received data:', data)
    
    // ✅ ВАЛИДАЦИЯ EMAIL
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(data.email)) {
      console.log('❌ Email validation failed:', data.email)
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Проверка на одноразовые домены
    const domain = data.email.split('@')[1]?.toLowerCase() || ''
    const disposableDomains = [
      'tempmail.com', 'guerrillamail.com', '10minutemail.com', 
      'throwaway.email', 'mailinator.com', 'trashmail.com'
    ]
    
    if (disposableDomains.includes(domain)) {
      console.log('❌ Disposable email blocked:', domain)
      return NextResponse.json(
        { success: false, error: 'Please use a valid business email' },
        { status: 400 }
      )
    }
    
    // ✅ ВАЛИДАЦИЯ PHONE (с libphonenumber-js)
    try {
      const cleanedPhone = data.phone.replace(/[\s\-\(\)]/g, '')
      
      if (!cleanedPhone.startsWith('+')) {
        console.log('❌ Phone validation failed - no +:', data.phone)
        return NextResponse.json(
          { success: false, error: 'Phone must start with + (e.g., +34600000000)' },
          { status: 400 }
        )
      }
      
      if (!isValidPhoneNumber(cleanedPhone)) {
        console.log('❌ Phone validation failed - invalid format:', cleanedPhone)
        return NextResponse.json(
          { success: false, error: 'Please enter a valid international phone number' },
          { status: 400 }
        )
      }
      
      const phoneNumber = parsePhoneNumber(cleanedPhone)
      
      if (!phoneNumber || !phoneNumber.isValid()) {
        console.log('❌ Phone validation failed - not valid:', cleanedPhone)
        return NextResponse.json(
          { success: false, error: 'Invalid phone number format' },
          { status: 400 }
        )
      }
      
      // Форматируем в международный формат E.164
      data.phone = phoneNumber.format('E.164')
      
    } catch (phoneError) {
      console.log('❌ Phone validation error:', phoneError)
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      )
    }
    
    // ✅ ПРОВЕРЯЕМ ЧТО business_type НЕ ПУСТОЙ
    if (!data.business_type) {
      console.log('❌ business_type is missing')
      return NextResponse.json(
        { success: false, error: 'Business type is required' },
        { status: 400 }
      )
    }
    
    console.log('✅ All validations passed, checking for duplicates...')
    
    // ✅ ПРОВЕРКА НА ДУБЛИКАТЫ
    const { data: existingEntry } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', data.email)
      .single()
    
    if (existingEntry) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 409 }
      )
    }
    
    console.log('✅ No duplicates found, inserting to DB...')
    
    // Генерируем токен для верификации email
    const verification_token = crypto.randomBytes(32).toString('hex')
    
    // Сохраняем в БД
    const { data: waitlistEntry, error: dbError } = await supabase
      .from('waitlist')
      .insert([{
        business_name: data.business_name,
        contact_name: data.contact_name,
        email: data.email,
        phone: data.phone,
        business_type: data.business_type,
        website: data.website || null,
        message: data.message || null,
        country: data.country || 'ES',
        language: data.language || 'en',
        user_agent: data.user_agent || null,
        referrer: data.referrer || null,
        verification_token,
        status: 'pending',
        email_verified: false,
      }])
      .select()
      .single()
    
    if (dbError) {
      console.error('❌ DB Error:', dbError)
      throw dbError
    }
    
    console.log('✅ Entry created:', waitlistEntry.id)
    
    // Отправляем email клиенту
    await sendVerificationEmail({
      email: data.email,
      contact_name: data.contact_name,
      business_name: data.business_name,
      verification_token
    })
    
    console.log('✅ Verification email sent')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Waitlist entry created. Please check your email.' 
    })
    
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process waitlist submission' },
      { status: 500 }
    )
  }
}