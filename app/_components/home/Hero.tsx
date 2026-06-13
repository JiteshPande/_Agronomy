'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const TRUST_BADGES = [
  {
    label: 'ISO 9001:2015',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: 'ISO 14001:2015',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: '45+ Countries',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: '150+ Products',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
]

const CHART_BARS = [38, 55, 72, 48, 88, 62, 95, 80, 92, 68, 85, 100]

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow behind card */}
      <div className="absolute inset-0 scale-95 translate-y-4 bg-secondary/20 rounded-3xl blur-3xl" />

      {/* Main dashboard card */}
      <div className="relative bg-slate-950/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-white/5 bg-white/[0.03]">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 flex-1 text-center text-[10px] text-white/30 font-medium">
            NovaChem Quality Intelligence™
          </span>
          <span className="flex items-center gap-1 text-[10px] text-secondary font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            LIVE
          </span>
        </div>

        <div className="p-5 grid-pattern" style={{ backgroundSize: '40px 40px' }}>
          {/* Gauge + product info */}
          <div className="flex items-center gap-5 mb-5">
            {/* SVG Gauge */}
            <div className="relative flex-shrink-0">
              <svg width="90" height="90" viewBox="0 0 90 90">
                <circle cx="45" cy="45" r="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                <circle
                  cx="45" cy="45" r="36"
                  fill="none"
                  stroke="url(#gauge-grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="208 18"
                  transform="rotate(-220 45 45)"
                />
                <defs>
                  <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#48A111" />
                    <stop offset="100%" stopColor="#F2B50B" />
                  </linearGradient>
                </defs>
                <text x="45" y="41" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">99.8</text>
                <text x="45" y="53" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="system-ui">PURITY %</text>
              </svg>
            </div>

            {/* Product info */}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider mb-1">Active Product</p>
              <p className="text-white font-bold text-sm leading-tight mb-2">H₂SO₄ — Industrial Grade</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary/20 text-secondary border border-secondary/30">
                  ISO 9001
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/15 text-accent border border-accent/30">
                  REACH ✓
                </span>
              </div>
            </div>
          </div>

          {/* Metric chips */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              { label: 'Batches', value: '1,240', color: 'text-secondary' },
              { label: 'Pass Rate', value: '100%', color: 'text-accent' },
              { label: 'Countries', value: '45+', color: 'text-blue-400' },
            ].map((m) => (
              <div key={m.label} className="text-center py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className={`text-sm font-extrabold ${m.color}`}>{m.value}</div>
                <div className="text-[9px] text-white/35 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Mini bar chart */}
          <div className="mb-2">
            <p className="text-[9px] text-white/30 font-medium uppercase tracking-wider mb-2">
              Monthly Volume — 2025
            </p>
            <div className="flex items-end gap-1 h-14">
              {CHART_BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    background: i % 3 === 0
                      ? 'linear-gradient(to top,#25671E,#48A111)'
                      : i % 3 === 1
                        ? 'linear-gradient(to top,#d99f09,#F2B50B)'
                        : 'linear-gradient(to top,#1e6b3e,#3d8c0e)',
                    opacity: 0.6 + (i * 0.032),
                  }}
                />
              ))}
            </div>
          </div>
          <p className="text-[9px] text-white/20 text-center">Annual quality metrics · Updated daily</p>
        </div>
      </div>

      {/* Floating ISO badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -right-5 bg-accent rounded-2xl px-4 py-2.5 shadow-xl shadow-accent/25"
      >
        <div className="text-[10px] font-bold text-primary-dark uppercase tracking-wider">Certified</div>
        <div className="text-lg font-black text-primary-dark leading-none">ISO</div>
        <div className="text-[10px] font-bold text-primary-dark/70">9001:2015</div>
      </motion.div>

      {/* Floating clients badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-2.5 shadow-xl"
      >
        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Trusted by</div>
        <div className="text-xl font-black text-primary leading-tight">2,500+</div>
        <div className="text-[10px] text-slate-400">Global Clients</div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Layered background */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary to-primary-light/30" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1.8s' }}
      />
      <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-primary-light/20 blur-2xl animate-float-alt" />

      {/* Decorative plant cell */}
      <div className="absolute top-12 right-12 hidden xl:block opacity-15 animate-spin-slow" style={{ transformOrigin: 'center' }}>
        <svg width="280" height="280" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="46" fill="none" stroke="white" strokeWidth="1.2" />
          <circle cx="150" cy="64" r="32" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="224" cy="107" r="32" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="224" cy="193" r="32" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="150" cy="236" r="32" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="76" cy="193" r="32" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="76" cy="107" r="32" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="150" cy="150" r="16" fill="white" opacity="0.18" />
          <circle cx="150" cy="150" r="6" fill="white" opacity="0.35" />
          <circle cx="150" cy="64" r="5" fill="white" opacity="0.4" />
          <circle cx="224" cy="107" r="5" fill="white" opacity="0.4" />
          <circle cx="224" cy="193" r="5" fill="white" opacity="0.4" />
          <circle cx="150" cy="236" r="5" fill="white" opacity="0.4" />
          <circle cx="76" cy="193" r="5" fill="white" opacity="0.4" />
          <circle cx="76" cy="107" r="5" fill="white" opacity="0.4" />
        </svg>
      </div>

      {/* Floating glass pills (small) */}
      <div className="absolute left-14 top-1/3 hidden lg:block animate-float">
        <div className="glass-card p-2.5 rounded-xl">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19V5m0 0C10 5 7 7 7 12m5-7c2 0 5 2 5 7" />
          </svg>
        </div>
      </div>
      <div className="absolute left-28 bottom-1/3 hidden lg:block animate-float-delayed">
        <div className="glass-card p-2.5 rounded-xl">
          <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22a7 7 0 007-7c0-4.97-7-13-7-13S5 10.03 5 15a7 7 0 007 7z" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Text Content ── */}
          <div>
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/15 border border-accent/30 rounded-full text-white/90 text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                28+ Years of Chemical Excellence
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-extrabold text-white leading-[1.04] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Pioneering{' '}
              <span className="gradient-text">Chemical</span>
              <br />
              Solutions for a{' '}
              <br className="hidden sm:block" />
              <span className="text-accent">Better</span> Tomorrow
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              From industrial-grade chemicals to soil conditioners and water treatment solutions — NovaChem delivers ISO-certified products trusted by{' '}
              <span className="text-white/90 font-semibold">2,500+ clients</span> across{' '}
              <span className="text-white/90 font-semibold">45 countries</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-secondary text-white font-bold rounded-2xl hover:bg-secondary-dark transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40 text-sm cursor-pointer"
              >
                Explore Products
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/18 hover:border-white/35 transition-all duration-200 text-sm backdrop-blur-sm cursor-pointer"
              >
                Request a Sample
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center gap-5 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {TRUST_BADGES.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-white/55 text-xs font-medium">
                  <span className="text-accent">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Dashboard Mockup ── */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative px-8">
              {/* Use SVG asset or inline mockup */}
              <div className="relative">
                <Image
                  src="/assets/hero/hero-product.svg"
                  alt="NovaChem Quality Dashboard — product purity metrics, ISO certifications, and production analytics"
                  width={600}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2 text-white/35">
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
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
