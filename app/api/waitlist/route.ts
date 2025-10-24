// app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendVerificationEmail } from '@/lib/email'
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import crypto from 'crypto'
import { waitlistSchema } from '@/lib/validations/waitlist'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log('📥 Received data:', data)
    
    // ✅ ВАЛИДАЦИЯ через Zod
    try {
      const validated = waitlistSchema.parse(data)
      
      // Если выбран "Other" и есть custom_operator, заменяем значение
      if (validated.custom_operator && validated.custom_operator.trim() !== '') {
        validated.telecom_operator = validated.custom_operator.trim()
      }
      
      // Форматируем телефоны в E.164
      const contactPhoneNumber = parsePhoneNumber(validated.contact_phone)
      const businessPhoneNumber = parsePhoneNumber(validated.business_phone)
      
      validated.contact_phone = contactPhoneNumber!.format('E.164')
      validated.business_phone = businessPhoneNumber!.format('E.164')
      
      // Обновляем data
      Object.assign(data, validated)
      
      console.log('✅ All validations passed via Zod')
      
    } catch (error: any) {
      console.log('❌ Validation error:', error.errors)
      return NextResponse.json(
        { success: false, error: error.errors[0]?.message || 'Validation failed' },
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


    // ✅ DEBUG: Проверяем что отправляем в БД
      console.log('📤 Data before insert:', {
        contact_phone: data.contact_phone,
        business_phone: data.business_phone,
        telecom_operator: data.telecom_operator
      });

    const { data: waitlistEntry, error: dbError } = await supabase
      .from('waitlist')
      .insert([{
        business_name: data.business_name,
        contact_name: data.contact_name,
        email: data.email,
        contact_phone: data.contact_phone,
        business_phone: data.business_phone,        // NEW
        telecom_operator: data.telecom_operator,    // NEW
        business_type: data.business_type,
        website: data.website,
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