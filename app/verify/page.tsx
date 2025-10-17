// app/verify/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function VerifyPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token')
      
      if (!token) {
        setStatus('error')
        setMessage('Invalid verification link')
        return
      }
      
      try {
        // Вызываем API для верификации
        const response = await fetch('/api/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        })
        
        const data = await response.json()
        
        if (response.ok && data.success) {
          setStatus('success')
          setMessage('Email verified successfully!')
          
          // Через 3 секунды редирект на главную
          setTimeout(() => {
            router.push('/')
          }, 3000)
        } else {
          setStatus('error')
          setMessage(data.error || 'Verification failed')
        }
        
      } catch (error) {
        console.error('Verification error:', error)
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    }
    
    verifyEmail()
  }, [searchParams, router])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full text-center">
        {status === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Verifying...</h1>
            <p className="text-gray-600">Please wait while we verify your email.</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Email Verified!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for verifying your email address. You're now on the VelvetDesk waitlist!
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold">✓ Status: Verified</p>
              <p className="text-green-700 text-sm mt-2">We'll contact you within 2-3 weeks</p>
            </div>
            <p className="text-sm text-gray-500">
              Redirecting to homepage in 3 seconds...
            </p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <div className="text-6xl mb-6">❌</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Verification Failed</h1>
            <p className="text-gray-600 mb-6">
              {message}
            </p>
            <button
              onClick={() => router.push('/')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Go to Homepage
            </button>
          </>
        )}
      </div>
    </div>
  )
}