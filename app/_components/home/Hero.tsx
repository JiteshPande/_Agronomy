'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 hex-pattern" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Molecular structure decoration */}
      <div className="absolute top-20 right-20 hidden xl:block opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="12" fill="white" />
          <circle cx="220" cy="90" r="8" fill="white" />
          <circle cx="80" cy="90" r="8" fill="white" />
          <circle cx="220" cy="210" r="8" fill="white" />
          <circle cx="80" cy="210" r="8" fill="white" />
          <circle cx="270" cy="150" r="6" fill="white" />
          <circle cx="30" cy="150" r="6" fill="white" />
          <line x1="150" y1="150" x2="220" y2="90" stroke="white" strokeWidth="1.5" />
          <line x1="150" y1="150" x2="80" y2="90" stroke="white" strokeWidth="1.5" />
          <line x1="150" y1="150" x2="220" y2="210" stroke="white" strokeWidth="1.5" />
          <line x1="150" y1="150" x2="80" y2="210" stroke="white" strokeWidth="1.5" />
          <line x1="220" y1="90" x2="270" y2="150" stroke="white" strokeWidth="1" />
          <line x1="80" y1="90" x2="30" y2="150" stroke="white" strokeWidth="1" />
          <line x1="220" y1="210" x2="270" y2="150" stroke="white" strokeWidth="1" />
          <line x1="80" y1="210" x2="30" y2="150" stroke="white" strokeWidth="1" />
          <line x1="220" y1="90" x2="80" y2="90" stroke="white" strokeWidth="1" />
          <line x1="220" y1="210" x2="80" y2="210" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating chemical icons */}
      <div className="absolute left-16 top-32 animate-float hidden lg:block">
        <div className="glass-card p-3 rounded-xl">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
      </div>
      <div className="absolute right-48 top-40 animate-float-delayed hidden lg:block">
        <div className="glass-card p-3 rounded-xl">
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              28+ Years of Chemical Excellence
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pioneering{' '}
            <span className="gradient-text">Chemical</span>
            <br />
            Solutions for a{' '}
            <span className="text-secondary">Better</span>
            <br />
            Tomorrow
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            From industrial-grade chemicals to soil conditioners and water treatment solutions — NovaChem Industries delivers ISO-certified products trusted by 2,500+ clients across 45 countries.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-secondary/30 text-sm"
            >
              Explore Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm"
            >
              Request a Sample
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { label: 'ISO 9001:2015', icon: '✓' },
              { label: 'ISO 14001:2015', icon: '✓' },
              { label: '45+ Countries', icon: '🌍' },
              { label: '150+ Products', icon: '⚗' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-white/60 text-sm">
                <span className="text-secondary">{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
