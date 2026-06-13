'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { TESTIMONIALS } from '@/app/_lib/data'

const AVATAR_COLORS = ['#25671E', '#0369a1', '#7c3aed', '#c07d12', '#0f766e']

export function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const t = TESTIMONIALS[active]

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
  }

  const prev = () => go(active === 0 ? TESTIMONIALS.length - 1 : active - 1)
  const next = () => go(active === TESTIMONIALS.length - 1 ? 0 : active + 1)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  })

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-20" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="Trusted by Industry Leaders"
          description="Join thousands of businesses that rely on NovaChem for consistent quality and expert support."
          centered
          light
        />

        <div className="mt-14 max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="glass-card rounded-3xl p-8 md:p-12"
              >
                {/* Large opening quote */}
                <div className="text-accent/40 mb-4" style={{ fontSize: '5rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 -mt-8 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < t.rating ? 'text-accent' : 'text-white/15'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-10">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                    style={{ backgroundColor: AVATAR_COLORS[active % AVATAR_COLORS.length] }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.role}</div>
                    <div className="text-accent text-sm font-semibold">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer hidden md:flex"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer hidden md:flex"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot navigation + avatars */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button onClick={prev} className="md:hidden text-white/50 hover:text-white p-2 cursor-pointer" aria-label="Previous">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`View testimonial from ${testimonial.name}`}
                className="group flex items-center cursor-pointer"
              >
                <div
                  className={`transition-all duration-300 rounded-full overflow-hidden flex items-center justify-center font-bold text-white text-xs ${
                    i === active ? 'w-10 h-10 ring-2 ring-accent ring-offset-2 ring-offset-primary' : 'w-8 h-8 opacity-40 hover:opacity-70'
                  }`}
                  style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                >
                  {testimonial.initials}
                </div>
              </button>
            ))}

            <button onClick={next} className="md:hidden text-white/50 hover:text-white p-2 cursor-pointer" aria-label="Next">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex gap-1 justify-center mt-4">
            {TESTIMONIALS.map((_, i) => (
              <div key={i} className="h-0.5 rounded-full bg-white/15 overflow-hidden" style={{ width: `${Math.floor(100 / TESTIMONIALS.length)}%`, maxWidth: 40 }}>
                {i === active && (
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: 'linear' }}
                    key={active}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
