import { Phone } from 'lucide-react'

interface FooterProps {
  t: any
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Колонка 1: Лого + Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">VelvetDesk</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your AI receptionist.
              <br />
              Never miss a customer again.
            </p>
          </div>
          
          {/* Колонка 2: Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <div className="space-y-3">
              <a 
                href="#privacy"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Колонка 3: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:support@velvetdesk.ai"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                support@velvetdesk.ai
              </a>
              <a 
                href="tel:+34xxxxxxxxx"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                +34 xxx xxx xxx
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2025 VelvetDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}