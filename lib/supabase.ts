// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types для waitlist
export type WaitlistSubmission = {
  business_name: string
  contact_name: string
  email: string
  contact_phone: string
  business_phone: string    
  telecom_operator: string 
  business_type: 'beauty_salon' | 'dental_clinic' | 'restaurant' | 'other'
  website?: string
  country: string
  language: 'en' | 'es'
  message?: string
  ip_address?: string
  user_agent?: string
  referrer?: string
}