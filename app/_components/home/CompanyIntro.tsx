import { SectionHeader } from '../ui/SectionHeader'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'
import { Button } from '../ui/Button'
import { MarketDashboard } from './MarketDashboard'

const PILLARS = [
  {
    title: 'Precision Manufacturing',
    desc: 'State-of-the-art facilities with automated QC systems ensuring every batch meets exact specifications.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    color: '#48A111',
  },
  {
    title: 'ISO-Certified Quality',
    desc: 'Triple ISO certification across quality, environment, and safety — backed by in-house analytical laboratories.',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    color: '#F2B50B',
  },
  {
    title: 'Global Reach',
    desc: 'Established export network covering Asia, Middle East, Africa, and Europe with seamless logistics.',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#60a5fa',
  },
]

export function CompanyIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <SectionHeader
              eyebrow="About NovaChem"
              title="Chemistry That Drives Industry Forward"
              description="Founded in 1997, NovaChem Industries has grown from a regional chemical supplier to a trusted global partner for industrial, agricultural, and water treatment customers across 45 countries."
            />

            <AnimateOnScroll delay={0.3}>
              <div className="mt-10 space-y-5">
                {PILLARS.map((pillar, i) => (
                  <div key={i} className="group flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: `${pillar.color}15` }}
                    >
                      <svg className="w-5 h-5" style={{ color: pillar.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{pillar.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.4} className="mt-8 flex gap-4">
              <Button href="/about" variant="secondary" size="md">Our Story</Button>
              <Button href="/contact" variant="outline" size="md">Partner With Us</Button>
            </AnimateOnScroll>
          </div>

          {/* Right: Analytics visual */}
          <AnimateOnScroll direction="left">
            <div className="relative">
              {/* Animated dashboard */}
              <div className="relative">
                <MarketDashboard />
              </div>

              {/* Floating revenue badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100">
                <div className="text-2xl font-black text-primary leading-none mb-0.5">₹850 Cr+</div>
                <div className="text-xs text-slate-400 font-medium">Annual Revenue</div>
              </div>

              {/* Floating ISO badge */}
              <div className="absolute -top-5 -right-5 bg-accent rounded-2xl px-5 py-4 shadow-xl shadow-accent/25">
                <div className="text-2xl font-black text-primary-dark leading-none mb-0.5">ISO</div>
                <div className="text-xs text-primary-dark/70 font-medium">Triple Certified</div>
              </div>

              {/* YoY growth pill */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-5 bg-primary rounded-xl px-3 py-2 shadow-lg shadow-primary/25 hidden xl:block">
                <div className="text-xs text-white/50 font-medium mb-0.5">Revenue YoY</div>
                <div className="text-lg font-black text-secondary leading-none">+18%</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
