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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="Serving Diverse Industries"
          description="Our broad chemical portfolio enables us to serve customers across every major industrial sector with tailored solutions."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {INDUSTRIES.map((industry, i) => (
            <AnimateOnScroll key={industry.slug} delay={i * 0.07}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group relative flex flex-col bg-white rounded-2xl p-6 border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                {/* Hover background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${industry.color}06 0%, ${industry.color}02 100%)` }}
                />

                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ backgroundColor: industry.color }}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 8px 32px ${industry.color}18, 0 2px 8px ${industry.color}10` }}
                />

                {/* Large ghost icon background */}
                <div
                  className="absolute -right-4 -bottom-4 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300 transform scale-150"
                  style={{ color: industry.color }}
                >
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d={ICONS[industry.icon] ?? ICONS.leaf} />
                  </svg>
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${industry.color}12` }}
                  >
                    <svg className="w-6 h-6" style={{ color: industry.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICONS[industry.icon] ?? ICONS.leaf} />
                    </svg>
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2 text-base group-hover:text-primary transition-colors duration-200">
                    {industry.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{industry.description}</p>

                  {/* Product tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
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

                  {/* CTA */}
                  <div className="flex items-center text-xs font-bold transition-all duration-200" style={{ color: industry.color }}>
                    Explore Solutions
                    <svg className="w-3.5 h-3.5 ml-1.5 group-hover:ml-2.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
