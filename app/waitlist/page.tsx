// app/waitlist/page.tsx
'use client'


import { translations } from '@/lib/translations'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast, Toaster } from 'sonner'
import { supabase, type WaitlistSubmission } from '@/lib/supabase'
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { waitlistSchema } from '@/lib/validations/waitlist'


type FormData = z.infer<typeof waitlistSchema>

export default function WaitlistPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showCustomOperator, setShowCustomOperator] = useState(false)
  
  // Определяем язык из localStorage или browser
  const getLanguage = (): 'en' | 'es' => {
    if (typeof window === 'undefined') return 'en'
    const saved = localStorage.getItem('language')
    if (saved === 'es') return 'es'
    return navigator.language.startsWith('es') ? 'es' : 'en'
  }
  
  const lang = getLanguage()
  
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(waitlistSchema)
  })

  const content = {
    en: {
      title: 'Join the Waitlist',
      subtitle: 'We\'re experiencing high demand! 🎉',
      description: 'VelvetDesk is currently helping 500+ businesses across Europe. Due to our commitment to providing exceptional setup and support, we\'re carefully onboarding new clients.',
      waitTime: 'Current wait time: 2-3 weeks',
      benefit1: '✓ Priority setup within 48 hours once onboarded',
      benefit2: '✓ Free first month (€350 value)',
      benefit3: '✓ Dedicated support during setup',
      question: 'Want to join the waitlist?',
      yesButton: 'Yes, Add Me to Waitlist',
      noButton: 'No, Maybe Later',
      formTitle: 'Waitlist Application',
      formSubtitle: 'Tell us about your business',
      businessName: 'Business Name',
      businessNamePlaceholder: 'Bella Beauty Salon',
      contactName: 'Your Name',
      contactNamePlaceholder: 'Maria González',
      email: 'Email',
      emailPlaceholder: 'maria@bellasalon.com',
      phone: 'Phone Number',
      phonePlaceholder: '+34 600 000 000',
      businessType: 'Business Type',
      businessTypes: {
        beauty_salon: 'Beauty Salon / Barbershop',
        dental_clinic: 'Dental Clinic / Medical',
        restaurant: 'Restaurant / Café',
        other: 'Other'
      },
      website: 'Website (optional)',
      websitePlaceholder: 'www.bellasalon.com',
      message: 'Tell us about your business (optional)',
      messagePlaceholder: 'We receive 50+ calls daily and need help managing appointments...',
      submitButton: 'Submit Application',
      submitting: 'Submitting...',
      successTitle: 'Welcome to the Waitlist! 🎉',
      successMessage: 'We\'ve received your application. You\'ll receive a confirmation email shortly and we\'ll contact you within 2-3 weeks.',
      backButton: '← Back to Home',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Please enter a valid phone number (e.g., +34 600 000 000)',
      phoneMinLength: 'Phone number is too short',
      realEmailRequired: 'Please use a valid business email address',
    },
    es: {
      title: 'Únete a la Lista de Espera',
      subtitle: '¡Tenemos alta demanda! 🎉',
      description: 'VelvetDesk está ayudando actualmente a más de 500 negocios en Europa. Debido a nuestro compromiso de proporcionar una configuración y soporte excepcionales, estamos incorporando nuevos clientes cuidadosamente.',
      waitTime: 'Tiempo de espera actual: 2-3 semanas',
      benefit1: '✓ Configuración prioritaria en 48 horas una vez incorporado',
      benefit2: '✓ Primer mes gratis (valor €350)',
      benefit3: '✓ Soporte dedicado durante la configuración',
      question: '¿Quieres unirte a la lista de espera?',
      yesButton: 'Sí, Añádeme a la Lista',
      noButton: 'No, Quizás Después',
      formTitle: 'Solicitud de Lista de Espera',
      formSubtitle: 'Cuéntanos sobre tu negocio',
      businessName: 'Nombre del Negocio',
      businessNamePlaceholder: 'Bella Beauty Salon',
      contactName: 'Tu Nombre',
      contactNamePlaceholder: 'María González',
      email: 'Email',
      emailPlaceholder: 'maria@bellasalon.com',
      phone: 'Número de Teléfono',
      phonePlaceholder: '+34 600 000 000',
      businessType: 'Tipo de Negocio',
      businessTypes: {
        beauty_salon: 'Salón de Belleza / Barbería',
        dental_clinic: 'Clínica Dental / Médico',
        restaurant: 'Restaurante / Café',
        other: 'Otro'
      },
      website: 'Sitio Web (opcional)',
      websitePlaceholder: 'www.bellasalon.com',
      message: 'Cuéntanos sobre tu negocio (opcional)',
      messagePlaceholder: 'Recibimos más de 50 llamadas diarias y necesitamos ayuda gestionando citas...',
      submitButton: 'Enviar Solicitud',
      submitting: 'Enviando...',
      successTitle: '¡Bienvenido a la Lista de Espera! 🎉',
      successMessage: 'Hemos recibido tu solicitud. Recibirás un email de confirmación pronto y te contactaremos en 2-3 semanas.',
      backButton: '← Volver al Inicio',
      required: 'Este campo es obligatorio',
      invalidEmail: 'Por favor ingresa un email válido',
      invalidPhone: 'Por favor ingresa un número válido (ej: +34 600 000 000)',
      phoneMinLength: 'El número es demasiado corto',
      realEmailRequired: 'Por favor usa un email de negocio válido',
    }
  }

  const t = content[lang]

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const submission = {
        ...data,
        country: 'ES',
        language: lang,
        user_agent: navigator.userAgent,
        referrer: document.referrer || undefined,
      }

      console.log('📤 Submitting data:', submission)

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission)
      })

      console.log('📥 Response status:', response.status)

      const responseData = await response.json()
      console.log('📥 Response data:', responseData)

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit')
      }

      toast.success(t.successTitle, {
        description: t.successMessage,
        duration: 5000,
      })

      // Send GA4 event
      console.log('🔔 Sending GA4 event: waitlist_submit')

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'waitlist_submit', {
          business_name: data.business_name,
          business_type: data.business_type,
          email: data.email
        })
        console.log('✅ GA4 event sent via gtag')
      }

      setTimeout(() => {
        router.push('/')
      }, 2500)

    } catch (error: any) {
      console.error('❌ Full error:', error)
      
      toast.error('Error', {
        description: error.message || 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Toaster position="top-center" richColors />
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <button
          onClick={() => router.push('/')}
          className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 mb-8"
        >
          {t.backButton}
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-purple-600 font-semibold mb-6">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {!showForm ? (
          // Initial Screen
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t.description}
            </p>

            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <p className="text-purple-900 font-semibold mb-4">
                {t.waitTime}
              </p>
              <div className="space-y-2 text-gray-700">
                <p>{t.benefit1}</p>
                <p>{t.benefit2}</p>
                <p>{t.benefit3}</p>
              </div>
            </div>

            <p className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {t.question}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
              >
                {t.yesButton}
              </button>
              <button
                onClick={() => router.push('/')}
                className="flex-1 bg-gray-100 text-gray-700 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all"
              >
                {t.noButton}
              </button>
            </div>
          </div>
        ) : (
          // Form
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {t.formTitle}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.formSubtitle}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.businessName} *
                </label>
                <input
                  {...register('business_name', { required: t.required })}
                  type="text"
                  placeholder={t.businessNamePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {errors.business_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.business_name.message}</p>
                )}
              </div>

              {/* Contact Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.contactName} *
                </label>
                <input
                  {...register('contact_name', { required: t.required })}
                  type="text"
                  placeholder={t.contactNamePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {errors.contact_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact_name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.email} *
                </label>
                <input
                  {...register('email', { 
                    required: t.required,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t.invalidEmail
                    },
                    validate: {
                      validDomain: (value) => {
                        const domain = value.split('@')[1]?.toLowerCase() || ''
                        
                        const disposableDomains = [
                          'tempmail.com', 'guerrillamail.com', '10minutemail.com', 
                          'throwaway.email', 'mailinator.com', 'trashmail.com',
                          'temp-mail.org', 'fakeinbox.com', 'maildrop.cc'
                        ]
                        
                        const suspiciousTLDs = ['er', 'tk', 'ga', 'cf', 'ml', 'gq']
                        const tld = domain.split('.').pop() || ''
                        
                        if (disposableDomains.includes(domain)) {
                          return t.realEmailRequired
                        }
                        
                        if (suspiciousTLDs.includes(tld)) {
                          return t.invalidEmail
                        }
                        
                        const domainParts = domain.split('.')
                        if (domainParts.length >= 2 && domainParts[domainParts.length - 2].length < 2) {
                          return t.invalidEmail
                        }
                        
                        return true
                      }
                    }
                  })}
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Phone Number <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="contact_phone"
                  control={control}
                  rules={{ required: 'Your phone number is required' }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value}
                      onChange={onChange}
                      international
                      defaultCountry="ES"
                      placeholder="+34 600 000 000"
                      numberInputProps={{
                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      }}
                      className="phone-input-container"
                    />
                  )}
                />
                {errors.contact_phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact_phone.message}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Your personal contact number
                </p>
              </div>

              {/* Business Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Phone Number <span className="text-red-500">*</span>
                </label>
                <Controller
                  name="business_phone"
                  control={control}
                  rules={{ required: 'Business phone number is required' }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value}
                      onChange={onChange}
                      international
                      defaultCountry="ES"
                      placeholder="+34 600 000 000"
                      numberInputProps={{
                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      }}
                      className="phone-input-container"
                    />
                  )}
                />
                {errors.business_phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.business_phone.message}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Phone number where AI will answer calls
                </p>
              </div>

              {/* Telecom Operator */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telecom Operator <span className="text-red-500">*</span>
                </label>
                
                {!showCustomOperator ? (
                  <select
                    {...register('telecom_operator', { required: 'Telecom operator is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    defaultValue=""
                    onChange={(e) => {
                      if (e.target.value === 'Other') {
                        setValue('telecom_operator', '')  // Очищаем значение
                        setShowCustomOperator(true)
                      }
                    }}
                  >
                    <option value="" disabled>Select your provider</option>
                    <option value="Movistar">Movistar</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="Orange">Orange</option>
                    <option value="Yoigo">Yoigo</option>
                    <option value="MásMóvil">MásMóvil</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <div className="space-y-2">
                    <input
                      {...register('telecom_operator', { required: 'Please enter your operator name' })}
                      type="text"
                      placeholder="Enter your operator name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setValue('telecom_operator', '')
                        setShowCustomOperator(false)
                      }}
                      className="text-sm text-purple-600 hover:text-purple-700"
                    >
                      ← Back to list
                    </button>
                  </div>
                )}
                
                {errors.telecom_operator && (
                  <p className="text-red-500 text-sm mt-1">{errors.telecom_operator.message}</p>
                )}
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.businessType} *
                </label>
                <select
                  {...register('business_type', { required: t.required })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>Select...</option>
                  <option value="beauty_salon">Beauty Salon / Barbershop</option>
                  <option value="dental_clinic">Dental Clinic / Medical</option>
                  <option value="restaurant">Restaurant / Café</option>
                  <option value="fitness_gym">Fitness Center / Gym</option>
                  <option value="auto_repair">Auto Repair Shop</option>
                  <option value="legal_consulting">Legal / Consulting Services</option>
                </select>
                {errors.business_type && (
                  <p className="text-red-500 text-sm mt-1">{errors.business_type.message}</p>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.website}
                </label>
                <input
                  {...register('website')}
                  type="text"
                  placeholder={t.websitePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? t.submitting : t.submitButton}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}