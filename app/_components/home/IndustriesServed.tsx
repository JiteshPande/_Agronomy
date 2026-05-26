import Link from 'next/link'
import { SectionHeader } from '../ui/SectionHeader'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'
import { INDUSTRIES } from '@/app/_lib/data'

const ICONS: Record<string, string> = {
  leaf: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  droplet: 'M12 22a7 7 0 007-7c0-4.97-7-13-7-13S5 10.03 5 15a7 7 0 007 7z',
  factory: 'M3 21h18M9 3H3v18h6V3zm6 5h-6v13h6V8zm6-5h-6v18h6V3z',
  pill: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
  building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  scissors: 'M6 21L21 6M3 3l3 3m0 0l3-3M6 6l3.5 3.5M21 21l-3-3m0 0l-3 3m3-3l-3.5-3.5',
}

export function IndustriesServed() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Serving Diverse Industries"
          description="Our broad chemical portfolio enables us to serve customers across every major industrial sector with tailored solutions."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {INDUSTRIES.map((industry, i) => (
            <AnimateOnScroll key={industry.slug} delay={i * 0.08}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group flex flex-col bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: industry.color }}
                />
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${industry.color}15` }}
                >
                  <svg className="w-6 h-6" style={{ color: industry.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICONS[industry.icon] ?? ICONS.leaf} />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{industry.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{industry.description}</p>
                {/* Products */}
                <div className="flex flex-wrap gap-1.5">
                  {industry.products.map((product) => (
                    <span
                      key={product}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: `${industry.color}10`, color: industry.color }}
                    >
                      {product}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm font-semibold transition-all" style={{ color: industry.color }}>
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
