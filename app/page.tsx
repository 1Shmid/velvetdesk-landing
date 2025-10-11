import HeroSection from '@/components/HeroSection'
import SocialProofSection from '@/components/SocialProofSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowToGetStartedSection from '@/components/HowToGetStartedSection'
import HearItInActionSection from '@/components/HearItInActionSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'
import Footer from '@/components/Footer'
import { translations } from '@/lib/translations'

export default function Home() {
  const t = translations.en

  return (
    <main className="min-h-screen bg-white">
      <HeroSection t={t} />
      <SocialProofSection t={t} />
      <FeaturesSection t={t} />
      <HowToGetStartedSection t={t} />
      <HearItInActionSection t={t} />
      <PricingSection t={t} />
      <FAQSection t={t} />
      <FinalCTASection t={t} />
      <Footer t={t} />
    </main>
  )
}