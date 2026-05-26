import Link from 'next/link'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'

export function ContactCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary-light p-12 md:p-16 text-center">
            <div className="absolute inset-0 hex-pattern" />
            {/* Glow orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative">
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs font-semibold tracking-widest uppercase mb-6">
                Ready to Start?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Let&apos;s Build Something<br />
                <span className="text-secondary">Extraordinary</span> Together
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
                Whether you need a product sample, a custom formulation, or a long-term supply partner — our team is ready to help. Get in touch today.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-secondary/30"
                >
                  Request a Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Browse Products
                </Link>
              </div>

              {/* Contact info chips */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10">
                {[
                  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '+91 22 4567 8900' },
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'info@novachemindustries.com' },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Mon–Sat: 9 AM – 6 PM IST' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
