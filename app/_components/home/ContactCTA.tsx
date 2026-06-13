import Link from 'next/link'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function ContactCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden bg-primary">
            {/* Background layers */}
            <div className="absolute inset-0 hex-pattern" />
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/70 via-primary to-primary-light/40" />

            {/* Orbs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

            {/* Decorative molecular ring */}
            <div className="absolute top-8 left-8 opacity-8 hidden lg:block">
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <circle cx="80" cy="80" r="75" stroke="white" strokeWidth="1" strokeDasharray="6 6"/>
                <circle cx="80" cy="80" r="55" stroke="white" strokeWidth="0.8" strokeOpacity="0.6"/>
                <circle cx="80" cy="5" r="5" fill="white" opacity="0.4"/>
                <circle cx="155" cy="80" r="5" fill="white" opacity="0.35"/>
                <circle cx="80" cy="155" r="5" fill="white" opacity="0.3"/>
                <circle cx="5" cy="80" r="5" fill="white" opacity="0.35"/>
              </svg>
            </div>

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/18 border border-accent/30 rounded-full text-white/90 text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Ready to Start?
              </span>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
                Let&apos;s Build Something
                <br />
                <span className="gradient-text">Extraordinary</span> Together
              </h2>

              <p className="text-white/65 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Whether you need a product sample, a custom formulation, or a long-term supply partner — our team is ready to help. Get in touch today.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-secondary-dark transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 text-sm cursor-pointer"
                >
                  Request a Quote
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/22 text-white font-semibold rounded-2xl hover:bg-white/18 hover:border-white/35 transition-all duration-200 backdrop-blur-sm text-sm cursor-pointer"
                >
                  Browse Products
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 pt-10">
                {/* Contact chips */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                  {[
                    {
                      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                      label: 'Phone',
                      value: '+91 22 4567 8900',
                    },
                    {
                      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                      label: 'Email',
                      value: 'info@novachemindustries.com',
                    },
                    {
                      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                      label: 'Hours',
                      value: 'Mon–Sat: 9 AM – 6 PM IST',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white/40 text-[10px] font-medium uppercase tracking-wider">{item.label}</div>
                        <div className="text-white/75 text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
