// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VapiProvider } from "@/lib/VapiContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Primary SEO
  title: 'VelvetDesk AI Receptionist | 24/7 Automated Phone Assistant for Small Business',
  description: 'AI-powered virtual receptionist for beauty salons, dental clinics, and restaurants. Answer calls 24/7, book appointments automatically, speak 10+ languages. From €350/month. Never miss a customer again.',
  
  // Keywords
  keywords: [
    'AI receptionist',
    'virtual receptionist',
    'AI phone assistant',
    '24/7 call answering service',
    'automated receptionist',
    'AI receptionist for beauty salons',
    'virtual receptionist for dental clinics',
    'AI phone assistant for restaurants',
    'appointment booking AI',
    'multilingual AI receptionist',
    'small business phone assistant',
    'never miss a call',
    'after-hours answering service',
    'AI receptionist Spain',
    'virtual receptionist Europe',
    'automated appointment booking',
    'AI answering service small business'
  ],

  // Open Graph (для соцсетей)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: 'https://www.velvetdesk.ai',
    siteName: 'VelvetDesk',
    title: 'VelvetDesk AI Receptionist | 24/7 Phone Assistant for Small Business',
    description: 'AI-powered virtual receptionist that answers calls, books appointments, and speaks 10+ languages. Perfect for beauty salons, dental clinics, and restaurants. From €350/month.',
    images: [
      {
        url: 'https://www.velvetdesk.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VelvetDesk AI Receptionist - Never Miss Another Customer',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@velvetdesk',
    creator: '@velvetdesk',
    title: 'VelvetDesk AI Receptionist | 24/7 Automated Phone Assistant',
    description: 'AI receptionist for beauty salons, dental clinics & restaurants. Answer every call 24/7, book appointments automatically. From €350/month.',
    images: ['https://www.velvetdesk.ai/twitter-image.jpg'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: 'https://www.velvetdesk.ai',
    languages: {
      'en': 'https://www.velvetdesk.ai',
      'es': 'https://www.velvetdesk.ai/es',
    },
  },

  // Verification (добавишь коды потом)
  verification: {
    // google: 'ВАШ_КОД_ОТ_GOOGLE_SEARCH_CONSOLE',
  },

  // Other
  category: 'Business Software',
  applicationName: 'VelvetDesk',
  authors: [{ name: 'VelvetDesk Team' }],
  creator: 'VelvetDesk',
  publisher: 'VelvetDesk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'VelvetDesk AI Receptionist',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '350',
                priceCurrency: 'EUR',
                priceValidUntil: '2025-12-31',
                availability: 'https://schema.org/InStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '500',
                bestRating: '5',
                worstRating: '1',
              },
              description: 'AI-powered virtual receptionist for small businesses. Answer calls 24/7, book appointments automatically, speak 10+ languages. Perfect for beauty salons, dental clinics, and restaurants.',
            }),
          }}
        />
        
        {/* Schema.org - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VelvetDesk',
              url: 'https://www.velvetdesk.ai',
              logo: 'https://www.velvetdesk.ai/logo.png',
              description: 'AI-powered virtual receptionist service for small businesses across Europe.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'ES',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'support@velvetdesk.ai',
                contactType: 'Customer Support',
                availableLanguage: ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese'],
              },
            }),
          }}
        />

        {/* Schema.org - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is an AI receptionist?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'An AI receptionist is a virtual phone assistant that answers calls 24/7, books appointments, and handles customer inquiries automatically using artificial intelligence and natural language processing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does VelvetDesk AI receptionist cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'VelvetDesk costs €350 per month with a one-time €50 setup fee. The first month is completely free with no commitment required.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What languages does VelvetDesk speak?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'VelvetDesk speaks 10+ languages fluently including Spanish, English, French, German, Italian, Portuguese, Russian, Chinese, and Arabic. The AI automatically detects the caller\'s language.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can AI receptionist integrate with my booking system?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! VelvetDesk integrates with Google Calendar, Outlook, Calendly, Acuity Scheduling, Booksy, Treatwell, and most other booking systems used by beauty salons, dental clinics, and restaurants.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VapiProvider>
          {children}
        </VapiProvider>
      </body>
    </html>
  );
}