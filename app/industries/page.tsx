import Link from 'next/link'
import { AnimateOnScroll } from '../_components/ui/AnimateOnScroll'
import { SectionHeader } from '../_components/ui/SectionHeader'
import { INDUSTRIES } from '../_lib/data'

const ICONS: Record<string, string> = {
  leaf: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  droplet: 'M12 22a7 7 0 007-7c0-4.97-7-13-7-13S5 10.03 5 15a7 7 0 007 7z',
  factory: 'M3 21h18M9 3H3v18h6V3zm6 5h-6v13h6V8zm6-5h-6v18h6V3z',
  pill: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
  building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  scissors: 'M6 21L21 6M3 3l3 3m0 0l3-3M6 6l3.5 3.5M21 21l-3-3m0 0l-3 3m3-3l-3.5-3.5',
}

const INDUSTRY_DETAILS: Record<string, { challenges: string[]; solutions: string[]; highlights: string }> = {
  agriculture: {
    challenges: ['Soil micronutrient depletion', 'Water-use efficiency', 'Resistance to chemical inputs', 'Sustainable yield improvement'],
    solutions: ['Humate-based soil amendments', 'Soluble micronutrient fertilizers', 'Biostimulant adjuvants', 'Precision fertigation chemicals'],
    highlights: 'NovaChem serves 800+ agricultural distributors and direct farm accounts, with agronomist-supported application programs that consistently deliver 15–25% yield improvements.',
  },
  'water-treatment': {
    challenges: ['Increasing raw water turbidity', 'Stricter discharge regulations', 'Rising energy and chemical costs', 'Remote and off-grid facilities'],
    solutions: ['High-basicity PAC formulations', 'Activated carbon systems', 'Polymer coagulation aids', 'pH adjustment chemicals'],
    highlights: 'Our water treatment chemicals serve 150+ municipal utilities and 300+ industrial effluent systems, achieving treatment costs 20% below industry average.',
  },
  manufacturing: {
    challenges: ['Process reliability and purity', 'Supply chain continuity', 'Waste stream management', 'Compliance documentation'],
    solutions: ['Technical grade acids and alkalis', 'Process chemicals and intermediates', 'Custom blends and formulations', 'Toll manufacturing services'],
    highlights: 'Industrial manufacturing accounts for 40% of NovaChem revenues, with long-term supply contracts and on-site technical support for major manufacturing clients.',
  },
  pharmaceuticals: {
    challenges: ['Pharmacopoeial purity requirements', 'Batch-to-batch consistency', 'Full traceability documentation', 'Regulatory compliance'],
    solutions: ['USP/EP grade chemicals', 'Desiccants and excipients', 'API intermediates', 'Full CoA and trace documentation'],
    highlights: 'Pharmaceutical customers depend on our documented quality systems, with products meeting USP, EP, and BP standards for both API manufacturing and formulation.',
  },
  construction: {
    challenges: ['Setting time optimization', 'Waterproofing requirements', 'Extreme climate performance', 'Cost-effective solutions'],
    solutions: ['Concrete accelerators', 'Waterproofing chemicals', 'Surface treatment agents', 'Admixtures and additives'],
    highlights: 'Construction chemicals from NovaChem are used in major infrastructure projects across India and the Gulf, with products certified for use in extreme temperature environments.',
  },
  textile: {
    challenges: ['Consistent dye uptake', 'Wastewater compliance', 'Fiber damage prevention', 'Process cost reduction'],
    solutions: ['Bleaching agents and auxiliaries', 'Mordants and fixatives', 'Desizing and scouring chemicals', 'Effluent treatment chemicals'],
    highlights: 'Textile processing chemicals serve 200+ mills in India, Bangladesh, and Sri Lanka, with technical support on optimization of dye fixation and bleaching processes.',
  },
}

export default function IndustriesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Industries</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Industries We Serve</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              NovaChem&apos;s chemistry powers agriculture, water treatment, manufacturing, and more — with tailored solutions for every sector&apos;s unique requirements.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry, i) => (
              <AnimateOnScroll key={industry.slug} delay={i * 0.08}>
                <a
                  href={`#${industry.slug}`}
                  className="group block bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${industry.color}15` }}
                  >
                    <svg className="w-7 h-7" style={{ color: industry.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICONS[industry.icon] ?? ICONS.leaf} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-primary transition-colors">{industry.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{industry.description}</p>
                  <div className="mt-4 flex items-center font-semibold text-sm transition-all" style={{ color: industry.color }}>
                    View Details
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Detail Sections */}
      {INDUSTRIES.map((industry, i) => {
        const details = INDUSTRY_DETAILS[industry.slug]
        if (!details) return null
        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className={`py-24 scroll-mt-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimateOnScroll direction={i % 2 === 0 ? 'right' : 'left'}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${industry.color}15` }}>
                      <svg className="w-7 h-7" style={{ color: industry.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICONS[industry.icon] ?? ICONS.leaf} />
                      </svg>
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: industry.color }}>Industry Focus</span>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">{industry.name}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{industry.description}</p>
                  <p className="text-slate-500 text-sm leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100">{details.highlights}</p>
                  <div className="mt-6">
                    <Link href={`/products?category=${encodeURIComponent(industry.products[0])}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm" style={{ backgroundColor: industry.color }}>
                      View Related Products →
                    </Link>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction={i % 2 === 0 ? 'left' : 'right'} delay={0.15}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100">
                      <h3 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        Key Challenges
                      </h3>
                      <ul className="space-y-2">
                        {details.challenges.map((c) => (
                          <li key={c} className="flex items-center gap-3 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100">
                      <h3 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        Our Solutions
                      </h3>
                      <ul className="space-y-2">
                        {details.solutions.map((s) => (
                          <li key={s} className="flex items-center gap-3 text-sm text-slate-600">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="py-20 bg-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern" />
        <div className="relative max-w-2xl mx-auto px-4">
          <AnimateOnScroll>
            <h2 className="text-4xl font-bold text-white mb-4">Don&apos;t See Your Industry?</h2>
            <p className="text-white/70 mb-8">We work with customers across dozens of industrial sectors. Contact our team to discuss your specific requirements.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-all">
              Talk to Our Experts →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
