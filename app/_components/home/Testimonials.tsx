'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { TESTIMONIALS } from '@/app/_lib/data'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = TESTIMONIALS[active]

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="Trusted by Industry Leaders"
          description="Join thousands of businesses that rely on NovaChem for consistent quality and expert support."
          centered
          light
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-8 items-start">
          {/* Main testimonial */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-3xl p-8 md:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < t.rating ? 'text-secondary' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${i === active ? 'w-8 h-2 bg-secondary' : 'w-2 h-2 bg-white/25 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          {/* Side testimonials */}
          <div className="flex flex-col gap-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left glass-card rounded-2xl p-4 transition-all duration-200 hover:bg-white/15 ${i === active ? 'ring-1 ring-secondary bg-white/15' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm font-medium truncate">{testimonial.name}</div>
                    <div className="text-white/50 text-xs truncate">{testimonial.company}</div>
                  </div>
                </div>
                {i === active && (
                  <p className="text-white/60 text-xs mt-2 line-clamp-2">{testimonial.quote}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
