// lib/translations.ts

export const translations = {
  en: {
    // Hero Section
    hero: {
      logo: 'VelvetDesk',
      title: 'Your AI Receptionist That Never Sleeps.',
      subtitle: 'Answers calls 24/7. Books appointments. Speaks 10+ languages.',
      pricing: 'From €350/month. Saves you',
      savings: '€1,650/month',
      savingsText: 'vs hiring an admin.',
      ctaButton: 'Try a Demo Call Now',
      endCall: 'End Call',
      callActive: 'Call in progress...',
      ctaSubtext: 'Free • Takes 30 seconds • No signup',
      ctaLink: 'Or start your 30-day free trial →',
      phoneScreen: {
        incomingCall: 'Incoming Call...',
        assistantName: 'VelvetDesk AI Assistant',
        phoneNumber: 'пше ыефегы'
      },
      badges: {
        setup: 'Setup in 48 hours',
        freeTrial: 'First month free',
        cancel: 'Cancel anytime'
      }
    },

    // Social Proof Section
    socialProof: {
      title: 'Trusted by Businesses Across Europe',
      subtitle: 'Real stories from real customers',
      swipeHint: 'Swipe to see more', 
      stat1: {
        number: '500+',
        label: 'Active Businesses'
      },
      stat2: {
        number: '98%',
        label: 'Customer Satisfaction'
      },
      stat3: {
        number: '24/7',
        label: 'Always Available'
      },
      testimonials: [
        {
          text: "VelvetDesk doubled our bookings in the first month. Customers love that they can call anytime and get instant answers — even at 11 PM.",
          author: "Maria González, Owner",
          company: "Bella Beauty Salon, Madrid",
          image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
        },
        {
          text: "We used to miss 30% of calls after hours. Now VelvetDesk handles everything — appointment booking, service questions, even rescheduling. Our patients love it!",
          author: "Dr. Carlos Méndez",
          company: "SmileCenter Dental Clinic, Barcelona",
          image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
        },
        {
          text: "Best decision we made this year. VelvetDesk books tables 24/7 and confirms reservations automatically. It pays for itself in the first week!",
          author: "Paolo Rossi",
          company: "La Terrazza Restaurant, Valencia",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
        }
      ]
    },

    // Features Section
    features: {
      title: 'Everything Your Business Needs',
      subtitle: 'VelvetDesk handles all customer interactions professionally',
      items: [
        {
          icon: '📞',
          title: '24/7 Call Answering',
          description: 'Never miss a customer call again. VelvetDesk answers instantly, day or night, holidays included.'
        },
        {
          icon: '📅',
          title: 'Smart Appointment Booking',
          description: 'Syncs with your calendar in real-time. Automatic confirmations and reminders reduce no-shows.'
        },
        {
          icon: '🌍',
          title: '10+ Languages Supported',
          description: 'Spanish, English, French, German, Italian, Portuguese, Russian, Chinese, and more. Detects language automatically.'
        },
        {
          icon: '💬',
          title: 'Instant Follow-ups',
          description: 'Sends SMS/email confirmations, reminders, and follow-up messages automatically after each call.'
        },
        {
          icon: '📊',
          title: 'Real-Time Dashboard',
          description: 'Monitor all calls, appointments, and messages from one simple dashboard. Export reports anytime.'
        },
        {
          icon: '⚡',
          title: 'Instant Setup',
          description: 'Live in 48 hours. Our team handles everything. No technical knowledge required.'
        }
      ]
    },

    // How To Get Started Section
    howToStart: {
      title: 'How to Get Started',
      subtitle: 'From signup to first call in 48 hours.',
      steps: [
        {
          number: '1',
          title: 'Sign Up',
          description: 'Fill out a 5-min form about your business.',
          time: 'Time: 10 minutes'
        },
        {
          number: '2',
          title: 'Setup & Training',
          description: 'One-time payment: €50\nWhat\'s included:\n• Train AI on your services & pricing\n• Test everything before going live',
          time: 'Time: 48 hours'
        },
        {
          number: '3',
          title: 'Connect',
          description: 'We connect your AI to your phone line & booking system.',
          time: 'Time: 1 hour'
        },
        {
          number: '4',
          title: 'Go Live',
          description: 'Start receiving calls. Monitor from dashboard. 30-day free trial. No risk.',
          time: 'Time: Day 3+'
        }
      ]
    },

    // Hear It In Action Section
    hearItInAction: {
      title: 'Hear It In Action',
      subtitle: 'Call our demo businesses right now. Speak freely in the language you prefer. The system will adapt automatically.',
      trySaying: 'Try saying:',
      callButton: 'Call Now',
      tryDemo: 'Try Demo',
      endCall: 'End Call',
      unavailable: 'Unavailable',
      demos: [
        {
          emoji: '💇',
          type: 'Beauty Salon',
          name: 'Bella Hair Studio',
          image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop',
          phone: '  ',
          title: 'Beauty Salon',
          description: 'Experience booking a hair appointment with Sofia',
          suggestions: [
            '"I\'d like to book a haircut for tomorrow"',
            '"What are your prices for highlights?"',
            '"Do you do manicures?"'
          ]
        },
        {
          emoji: '🦷',
          type: 'Dental Clinic',
          name: 'SmileCenter',
          image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
          phone: '  ',
          title: 'Dental Clinic',
          description: 'Try scheduling a dental checkup with Laura',
          suggestions: [
            '"I need to book a cleaning appointment"',
            '"Do you accept emergency patients?"',
            '"What\'s the cost for teeth whitening?"'
          ]
        },
        {
          emoji: '🍽️',
          type: 'Restaurant',
          name: 'La Terrazza',
          image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
          phone: '  ',
          title: 'Restaurant',
          description: 'Make a dinner reservation with Carlos',
          suggestions: [
            '"I\'d like to reserve a table for 4 people tonight"',
            '"Do you have vegetarian options?"',
            '"What time do you close?"'
          ]
        }
      ]
    },

    // Pricing Section
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'One plan. Everything included.',
      features: [
        'Unlimited incoming calls',
        'Smart appointment booking',
        'Follow-up messages (SMS/Email)',
        '10+ languages supported',
        'Calendar integration',
        'Real-time dashboard'
      ],
      price: '€350',
      period: 'per month',
      setupFee: '+ €50 one-time setup',
      firstMonthFree: 'First Month FREE',
      ctaButton: 'Get Started Now',
      process: 'Fill form (5 min) → Pay €50 → We train AI → Go live in 48h',
      badges: {
        setup: 'Setup in 48 hours',
        freeTrial: 'First month free',
        cancel: 'Cancel anytime'
      },
      guarantee: {
        title: '30-Day Money-Back Guarantee',
        description: 'Not satisfied? Full refund, no questions asked.'
      }
    },

    waitlist: {
      // Тексты ошибок валидации
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Please enter a valid phone number (e.g., +34 600 000 000)',
      phoneMinLength: 'Phone number is too short',
      realEmailRequired: 'Please use a valid business email address',
      emailAlreadyRegistered: 'This email is already registered',
      
      // Success messages
      successTitle: 'Welcome to the Waitlist! 🎉',
      successMessage: 'We\'ve received your application. Check your email to verify your address.',
      
      // Error messages
      errorTitle: 'Submission Failed',
      errorMessage: 'Something went wrong. Please try again.',
      errorNetwork: 'Network error. Please check your connection.',
    },

    // FAQ Section
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How long does setup take?',
          answer: 'Most businesses go live within 48 hours. We handle the technical setup — you just fill out a 5-minute form about your services and pricing.'
        },
        {
          question: 'What languages does VelvetDesk speak?',
          answer: 'VelvetDesk speaks 10+ languages fluently: Spanish, English, French, German, Italian, Portuguese, Russian, Chinese, Arabic, and more. The AI automatically detects the caller\'s language.'
        },
        {
          question: 'How does the 30-day free trial work?',
          answer: 'You pay nothing for the first 30 days. We set everything up, train the AI, and you start receiving calls. If you\'re not satisfied, cancel anytime with no charge.'
        },
        {
          question: 'Does it integrate with my booking system?',
          answer: 'Yes! VelvetDesk integrates with Google Calendar, Outlook, Calendly, Acuity Scheduling, Booksy, Treatwell, and most other booking systems.'
        },
        {
          question: 'Will the AI replace my receptionist?',
          answer: 'VelvetDesk handles routine tasks (booking, rescheduling, FAQs) so your team can focus on high-value work. Complex calls are transferred to you automatically.'
        },
        {
          question: 'What if the AI can\'t answer a question?',
          answer: 'If the AI encounters a question it can\'t handle, it will politely transfer the call to you or take a detailed message with callback information.'
        },
        {
          question: 'Can I customize the voice and responses?',
          answer: 'Yes! During setup, we train the AI on your specific services, pricing, and business hours. You can also customize the voice tone and personality.'
        },
        {
          question: 'What\'s your refund policy?',
          answer: '30-day money-back guarantee. If you\'re not satisfied within the first month, we\'ll refund every cent — no questions asked.'
        }
      ]
    },

    // Final CTA Section
    finalCTA: {
      title: 'Ready to Never Miss Another Customer?',
      subtitle: 'Join 500+ businesses using VelvetDesk to grow their revenue.',
      ctaButton: 'Start Free Trial',
      badges: {
        setup: 'Setup in 48 hours',
        freeTrial: 'First month free',
        cancel: 'Cancel anytime'
      }
    },

    // Footer
    footer: {
      logo: 'VelvetDesk',
      tagline: 'Your AI receptionist.\nNever miss a customer again.',
      legal: {
        title: 'Legal',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service'
      },
      contact: {
        title: 'Contact',
        email: 'support@velvetdesk.ai',
        phone: '  '
      },
      copyright: '© 2025 VelvetDesk. All rights reserved.'
    },   

    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: October 19, 2025',
      sections: {
        dataCollection: {
          title: '1. Data We Collect',
          content: 'We collect business information (name, email, phone, address), call recordings, transcripts, payment data, IP addresses, cookies, and usage analytics. By using our service, you consent to this collection.'
        },
        dataUsage: {
          title: '2. How We Use Your Data',
          content: 'We use collected data to provide services, improve AI models, process payments, send notifications, analyze usage patterns, and comply with legal obligations. We may use your data for marketing and product development without additional consent.'
        },
        dataStorage: {
          title: '3. Data Storage & Third Parties',
          content: 'Data is stored on Supabase (EU servers), processed via VAPI.ai for calls, Resend for emails, and payment processors. We are not responsible for third-party data breaches. Data retention: indefinite unless you request deletion.'
        },
        userRights: {
          title: '4. Your Rights (GDPR Minimum)',
          content: 'You may request data access or deletion by emailing support@velvetdesk.ai. Response time: up to 30 days. We reserve the right to retain data required for legal or operational purposes. No compensation for data-related issues.'
        }
      }
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: October 19, 2025',
      sections: {
        service: {
          title: '1. Service Description & Disclaimers',
          content: 'VelvetDesk provides AI-powered call answering. We make NO GUARANTEES regarding uptime, accuracy, or results. Service provided "AS IS" without warranties of any kind. We are not liable for missed calls, incorrect bookings, or lost revenue.'
        },
        pricing: {
          title: '2. Pricing & Payments',
          content: '€50 setup fee (non-refundable) + €350/month subscription. Payments processed via third-party providers. Prices may change with 7 days notice. Failure to pay results in immediate service suspension. No prorated refunds.'
        },
        refunds: {
          title: '3. Refunds & Cancellations',
          content: 'Setup fee is NON-REFUNDABLE under all circumstances. Monthly subscription: 30-day money-back guarantee (first month only). After trial, NO REFUNDS for any reason. Cancellation requires 30 days notice. We may terminate service immediately without refund if terms violated.'
        },
        termination: {
          title: '4. Limitation of Liability & Disputes',
          content: 'Our liability is limited to amount paid in last 3 months (maximum €1,050). We are NOT LIABLE for indirect, consequential, or punitive damages. Customer indemnifies VelvetDesk against claims. Disputes resolved via binding arbitration in Spain under Spanish law. No class actions permitted.'
        }
      }
    }


  },

  // ===========================================================================

  // Испанский блок 

    es: {
    // Hero Section
      hero: {
        logo: 'VelvetDesk',
        title: 'Tu Recepcionista IA Que Nunca Duerme.',
        subtitle: 'Atiende llamadas 24/7. Reserva citas. Habla más de 10 idiomas.',
        pricing: 'Desde €350/mes. Te ahorra',
        savings: '€1.650/mes',
        savingsText: 'vs contratar un administrativo.',
        ctaButton: 'Prueba una Llamada Demo',
        endCall: 'Finalizar Llamada',
        callActive: 'Llamada en curso...',
        ctaSubtext: 'Gratis • 30 segundos • Sin registro',
        ctaLink: 'O inicia tu prueba gratuita de 30 días →',
        phoneScreen: {
          incomingCall: 'Llamada Entrante...',
          assistantName: 'Asistente IA VelvetDesk',
          phoneNumber: '  '
        },
        badges: {
          setup: 'Instalación en 48 horas',
          freeTrial: 'Primer mes gratis',
          cancel: 'Cancela cuando quieras'
        }
      },

      // Social Proof Section
      socialProof: {
        title: 'Confiado por Negocios en Toda Europa',
        subtitle: 'Historias reales de clientes reales',
        swipeHint: 'Desliza para ver más',
        stat1: {
          number: '500+',
          label: 'Negocios Activos'
        },
        stat2: {
          number: '98%',
          label: 'Satisfacción del Cliente'
        },
        stat3: {
          number: '24/7',
          label: 'Siempre Disponible'
        },
        testimonials: [
          {
            text: "VelvetDesk duplicó nuestras reservas en el primer mes. A los clientes les encanta poder llamar en cualquier momento y obtener respuestas instantáneas, incluso a las 11 PM.",
            author: "María González, Propietaria",
            company: "Bella Beauty Salon, Madrid",
            image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
          },
          {
            text: "Solíamos perder el 30% de las llamadas fuera de horario. Ahora VelvetDesk lo maneja todo: reservas, preguntas sobre servicios, incluso reprogramaciones. ¡A nuestros pacientes les encanta!",
            author: "Dr. Carlos Méndez",
            company: "SmileCenter Clínica Dental, Barcelona",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
          },
          {
            text: "La mejor decisión que tomamos este año. VelvetDesk reserva mesas 24/7 y confirma reservas automáticamente. ¡Se paga solo en la primera semana!",
            author: "Paolo Rossi",
            company: "La Terrazza Restaurant, Valencia",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&h=200"
          }
        ]
      },

      // Features Section
      features: {
        title: 'Todo lo Que Tu Negocio Necesita',
        subtitle: 'VelvetDesk gestiona todas las interacciones con clientes profesionalmente',
        items: [
          {
            icon: '📞',
            title: 'Atención 24/7',
            description: 'Nunca más pierdas una llamada. VelvetDesk responde instantáneamente, día y noche, incluidos festivos.'
          },
          {
            icon: '📅',
            title: 'Reserva Inteligente de Citas',
            description: 'Se sincroniza con tu calendario en tiempo real. Confirmaciones y recordatorios automáticos reducen ausencias.'
          },
          {
            icon: '🌍',
            title: 'Más de 10 Idiomas',
            description: 'Español, inglés, francés, alemán, italiano, portugués, ruso, chino y más. Detecta el idioma automáticamente.'
          },
          {
            icon: '💬',
            title: 'Seguimientos Instantáneos',
            description: 'Envía confirmaciones por SMS/email, recordatorios y mensajes de seguimiento automáticamente después de cada llamada.'
          },
          {
            icon: '📊',
            title: 'Panel en Tiempo Real',
            description: 'Monitoriza todas las llamadas, citas y mensajes desde un panel simple. Exporta informes cuando quieras.'
          },
          {
            icon: '⚡',
            title: 'Configuración Instantánea',
            description: 'En funcionamiento en 48 horas. Nuestro equipo se encarga de todo. No se requieren conocimientos técnicos.'
          }
        ]
      },

      // How To Get Started Section
      howToStart: {
        title: 'Cómo Empezar',
        subtitle: 'Desde el registro hasta la primera llamada en 48 horas.',
        steps: [
          {
            number: '1',
            title: 'Regístrate',
            description: 'Completa un formulario de 5 minutos sobre tu negocio.',
            time: 'Tiempo: 10 minutos'
          },
          {
            number: '2',
            title: 'Configuración y Formación',
            description: 'Pago único: €50\nQué incluye:\n• Entrenar IA sobre tus servicios y precios\n• Probar todo antes de lanzar',
            time: 'Tiempo: 48 horas'
          },
          {
            number: '3',
            title: 'Conectar',
            description: 'Conectamos tu IA a tu línea telefónica y sistema de reservas.',
            time: 'Tiempo: 1 hora'
          },
          {
            number: '4',
            title: 'En Marcha',
            description: 'Comienza a recibir llamadas. Monitoriza desde el panel. Prueba gratuita de 30 días. Sin riesgo.',
            time: 'Tiempo: Día 3+'
          }
        ]
      },

      // Hear It In Action Section
      hearItInAction: {
        title: 'Escúchalo en Acción',
        subtitle: 'Llama a nuestros negocios demo ahora mismo. Habla libremente en el idioma que prefieras. El sistema se adaptará automáticamente.',
        trySaying: 'Prueba decir:',
        callButton: 'Llamar Ahora',
        tryDemo: 'Probar Demo',
        endCall: 'Finalizar Llamada',
        unavailable: 'No Disponible',
        demos: [
          {
            emoji: '💇',
            type: 'Salón de Belleza',
            name: 'Bella Hair Studio',
            image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop',
            phone: '  ',
            title: 'Salón de Belleza',
            description: 'Prueba reservar una cita de peluquería con Sofia',
            suggestions: [
              '"Me gustaría reservar un corte de pelo para mañana"',
              '"¿Cuáles son sus precios para mechas?"',
              '"¿Hacen manicuras?"'
            ]
          },
          {
            emoji: '🦷',
            type: 'Clínica Dental',
            name: 'SmileCenter',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
            phone: '  ',
            title: 'Clínica Dental',
            description: 'Intenta programar un chequeo dental con Laura',
            suggestions: [
              '"Necesito reservar una cita de limpieza"',
              '"¿Atienden pacientes de emergencia?"',
              '"¿Cuál es el costo del blanqueamiento dental?"'
            ]
          },
          {
            emoji: '🍽️',
            type: 'Restaurante',
            name: 'La Terrazza',
            image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
            phone: '  ',
            title: 'Restaurante',
            description: 'Haz una reserva para cenar con Carlos',
            suggestions: [
              '"Me gustaría reservar una mesa para 4 personas esta noche"',
              '"¿Tienen opciones vegetarianas?"',
              '"¿A qué hora cierran?"'
            ]
          }
        ]
      },

      // Pricing Section
      pricing: {
        title: 'Precios Simples y Transparentes',
        subtitle: 'Un plan. Todo incluido.',
        features: [
          'Llamadas entrantes ilimitadas',
          'Reserva inteligente de citas',
          'Mensajes de seguimiento (SMS/Email)',
          'Más de 10 idiomas',
          'Integración de calendario',
          'Panel en tiempo real'
        ],
        price: '€350',
        period: 'por mes',
        setupFee: '+ €50 configuración única',
        firstMonthFree: 'Primer Mes GRATIS',
        ctaButton: 'Comenzar Ahora',
        process: 'Formulario (5 min) → Pagar €50 → Entrenar IA → En marcha en 48h',
        badges: {
          setup: 'Instalación en 48 horas',
          freeTrial: 'Primer mes gratis',
          cancel: 'Cancela cuando quieras'
        },
        guarantee: {
          title: 'Garantía de Devolución de 30 Días',
          description: '¿No satisfecho? Reembolso completo, sin preguntas.'
        }
      },

      waitlist: {
      // Textos de errores de validación
      required: 'Este campo es obligatorio',
      invalidEmail: 'Por favor ingresa un email válido',
      invalidPhone: 'Por favor ingresa un número válido (ej: +34 600 000 000)',
      phoneMinLength: 'El número es demasiado corto',
      realEmailRequired: 'Por favor usa un email de negocio válido',
      emailAlreadyRegistered: 'Este email ya está registrado',
      
      // Mensajes de éxito
      successTitle: '¡Bienvenido a la Lista de Espera! 🎉',
      successMessage: 'Hemos recibido tu solicitud. Revisa tu email para verificar tu dirección.',
      
      // Mensajes de error
      errorTitle: 'Error al Enviar',
      errorMessage: 'Algo salió mal. Por favor intenta de nuevo.',
      errorNetwork: 'Error de conexión. Por favor verifica tu internet.',
    },

      // FAQ Section
      faq: {
        title: 'Preguntas Frecuentes',
        items: [
          {
            question: '¿Cuánto tiempo lleva la configuración?',
            answer: 'La mayoría de los negocios están en marcha en 48 horas. Nosotros nos encargamos de la configuración técnica — tú solo completas un formulario de 5 minutos sobre tus servicios y precios.'
          },
          {
            question: '¿Qué idiomas habla VelvetDesk?',
            answer: 'VelvetDesk habla más de 10 idiomas con fluidez: español, inglés, francés, alemán, italiano, portugués, ruso, chino, árabe y más. La IA detecta automáticamente el idioma del llamante.'
          },
          {
            question: '¿Cómo funciona la prueba gratuita de 30 días?',
            answer: 'No pagas nada durante los primeros 30 días. Configuramos todo, entrenamos la IA y comienzas a recibir llamadas. Si no estás satisfecho, cancela en cualquier momento sin cargo.'
          },
          {
            question: '¿Se integra con mi sistema de reservas?',
            answer: '¡Sí! VelvetDesk se integra con Google Calendar, Outlook, Calendly, Acuity Scheduling, Booksy, Treatwell y la mayoría de los sistemas de reservas.'
          },
          {
            question: '¿Reemplazará la IA a mi recepcionista?',
            answer: 'VelvetDesk maneja tareas rutinarias (reservas, reprogramaciones, preguntas frecuentes) para que tu equipo pueda centrarse en trabajo de alto valor. Las llamadas complejas se transfieren automáticamente a ti.'
          },
          {
            question: '¿Qué pasa si la IA no puede responder una pregunta?',
            answer: 'Si la IA encuentra una pregunta que no puede manejar, transferirá educadamente la llamada a ti o tomará un mensaje detallado con información de devolución de llamada.'
          },
          {
            question: '¿Puedo personalizar la voz y las respuestas?',
            answer: '¡Sí! Durante la configuración, entrenamos la IA sobre tus servicios específicos, precios y horarios comerciales. También puedes personalizar el tono de voz y la personalidad.'
          },
          {
            question: '¿Cuál es su política de reembolso?',
            answer: 'Garantía de devolución de dinero de 30 días. Si no estás satisfecho durante el primer mes, reembolsaremos cada centavo, sin preguntas.'
          }
        ]
      },

      // Final CTA Section
      finalCTA: {
        title: '¿Listo Para No Perder Otro Cliente?',
        subtitle: 'Únete a más de 500 negocios usando VelvetDesk para aumentar sus ingresos.',
        ctaButton: 'Iniciar Prueba Gratuita',
        badges: {
          setup: 'Instalación en 48 horas',
          freeTrial: 'Primer mes gratis',
          cancel: 'Cancela cuando quieras'
        }
      },

      // Footer
      footer: {
        logo: 'VelvetDesk',
        tagline: 'Tu recepcionista IA.\nNunca más pierdas un cliente.',
        legal: {
          title: 'Legal',
          privacyPolicy: 'Política de Privacidad',
          termsOfService: 'Términos de Servicio'
        },
        contact: {
          title: 'Contacto',
          email: 'support@velvetdesk.ai',
          phone: '  '
        },
        copyright: '© 2025 VelvetDesk. Todos los derechos reservados.'
    },

    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 19 de octubre de 2025',
      sections: {
        dataCollection: {
          title: '1. Datos que Recopilamos',
          content: 'Recopilamos información empresarial (nombre, email, teléfono, dirección), grabaciones de llamadas, transcripciones, datos de pago, direcciones IP, cookies y analíticas. Al usar el servicio, consientes esta recopilación.'
        },
        dataUsage: {
          title: '2. Cómo Usamos Sus Datos',
          content: 'Usamos los datos para proveer servicios, mejorar modelos de IA, procesar pagos, enviar notificaciones, analizar uso y cumplir obligaciones legales. Podemos usar sus datos para marketing y desarrollo de productos sin consentimiento adicional.'
        },
        dataStorage: {
          title: '3. Almacenamiento y Terceros',
          content: 'Los datos se almacenan en Supabase (servidores UE), procesados via VAPI.ai para llamadas, Resend para emails y procesadores de pago. No somos responsables por brechas de terceros. Retención: indefinida salvo solicitud de eliminación.'
        },
        userRights: {
          title: '4. Sus Derechos (Mínimo GDPR)',
          content: 'Puede solicitar acceso o eliminación de datos escribiendo a support@velvetdesk.ai. Tiempo de respuesta: hasta 30 días. Nos reservamos el derecho de retener datos requeridos legalmente u operacionalmente. Sin compensación por problemas de datos.'
        }
      }
    },
    terms: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 19 de octubre de 2025',
      sections: {
        service: {
          title: '1. Descripción del Servicio y Exenciones',
          content: 'VelvetDesk provee contestación de llamadas con IA. NO GARANTIZAMOS tiempo de actividad, precisión o resultados. Servicio provisto "TAL CUAL" sin garantías de ningún tipo. No somos responsables por llamadas perdidas, reservas incorrectas o pérdida de ingresos.'
        },
        pricing: {
          title: '2. Precios y Pagos',
          content: 'Tarifa de configuración €50 (no reembolsable) + suscripción €350/mes. Pagos procesados por terceros. Los precios pueden cambiar con 7 días de aviso. El impago resulta en suspensión inmediata. Sin reembolsos prorrateados.'
        },
        refunds: {
          title: '3. Reembolsos y Cancelaciones',
          content: 'La tarifa de configuración NO ES REEMBOLSABLE bajo ninguna circunstancia. Suscripción mensual: garantía de 30 días (solo primer mes). Después del período de prueba, SIN REEMBOLSOS por ningún motivo. Cancelación requiere 30 días de aviso. Podemos terminar el servicio inmediatamente sin reembolso si se violan los términos.'
        },
        termination: {
          title: '4. Limitación de Responsabilidad y Disputas',
          content: 'Nuestra responsabilidad se limita al monto pagado en los últimos 3 meses (máximo €1.050). NO SOMOS RESPONSABLES por daños indirectos, consecuentes o punitivos. El cliente indemniza a VelvetDesk contra reclamos. Disputas resueltas via arbitraje vinculante en España bajo ley española. No se permiten acciones colectivas.'
        }
      }
    }
  }
}

export type TranslationKey = keyof typeof translations
export type Translation = typeof translations.en