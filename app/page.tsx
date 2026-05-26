import type { Metadata } from 'next'
import { Hero } from './_components/home/Hero'
import { Stats } from './_components/home/Stats'
import { CompanyIntro } from './_components/home/CompanyIntro'
import { ProductHighlights } from './_components/home/ProductHighlights'
import { WhyChooseUs } from './_components/home/WhyChooseUs'
import { IndustriesServed } from './_components/home/IndustriesServed'
import { Certifications } from './_components/home/Certifications'
import { Testimonials } from './_components/home/Testimonials'
import { BlogPreview } from './_components/home/BlogPreview'
import { ContactCTA } from './_components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'NovaChem Industries — Pioneering Chemical Solutions',
  description: 'NovaChem Industries — ISO certified manufacturer of industrial chemicals, soil conditioners, agro chemicals, and water treatment solutions. 28+ years, 45+ countries, 2500+ clients.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CompanyIntro />
      <ProductHighlights />
      <WhyChooseUs />
      <IndustriesServed />
      <Certifications />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  )
}
