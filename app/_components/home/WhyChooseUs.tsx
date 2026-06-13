'use client'

import { SectionHeader } from '../ui/SectionHeader'
import { StaggerContainer, staggerItem } from '../ui/AnimateOnScroll'
import { motion } from 'framer-motion'

const REASONS = [
  {
    number: '01',
    title: 'Consistent Quality',
    description: 'Every product batch is rigorously tested in our ISO-accredited in-house laboratory. COA documentation provided with every shipment — zero compromises.',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    color: '#48A111',
  },
  {
    number: '02',
    title: 'Technical Expertise',
    description: 'Our team of 50+ chemists and engineers provide application support, formulation advice, and regulatory assistance to maximize product performance.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: '#25671E',
  },
  {
    number: '03',
    title: 'Reliable Supply Chain',
    description: 'Strategic warehousing across India with 45-day stock buffer. Guaranteed lead times and emergency supply protocols for critical customers.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    color: '#F2B50B',
  },
  {
    number: '04',
    title: 'Competitive Pricing',
    description: 'Direct manufacturer pricing eliminates intermediary margins. Volume discounts and long-term contract pricing available for regular customers.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#48A111',
  },
  {
    number: '05',
    title: 'Sustainable Practices',
    description: 'ISO 14001 certified environmental management. 40% reduction in carbon footprint since 2019. REACH compliant product portfolio for global export.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#25671E',
  },
  {
    number: '06',
    title: 'After-Sales Support',
    description: 'Dedicated customer success managers, 24/7 technical helpdesk, and on-site support for large volume customers and complex applications.',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    color: '#F2B50B',
  },
]

function ReasonCard({ reason }: { reason: typeof REASONS[0] }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
      whileHover={{
        boxShadow: `0 12px 40px ${reason.color}14, 0 2px 8px rgba(0,0,0,0.06)`,
        borderColor: `${reason.color}25`,
      }}
    >
      {/* Left accent strip */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: reason.color }}
      />

      {/* Shimmer sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shimmer-card" />

      {/* Ghost number */}
      <div
        className="absolute top-4 right-5 text-7xl font-black leading-none select-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300"
        style={{ color: reason.color }}
      >
        {reason.number}
      </div>

      <div className="relative p-6">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${reason.color}12` }}
        >
          <svg className="w-5 h-5" style={{ color: reason.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
          </svg>
        </div>

        {/* Number badge */}
        <span
          className="inline-block text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-full mb-2"
          style={{ backgroundColor: `${reason.color}10`, color: reason.color }}
        >
          {reason.number}
        </span>

        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-200">
          {reason.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
      </div>
    </motion.div>
  )
}

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why NovaChem"
          title="The NovaChem Advantage"
          description="We don't just supply chemicals — we deliver solutions backed by expertise, reliability, and a genuine commitment to your success."
          centered
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
          staggerDelay={0.07}
        >
          {REASONS.map((reason) => (
            <ReasonCard key={reason.number} reason={reason} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
