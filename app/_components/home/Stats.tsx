'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const STATS = [
  {
    label: 'Years of Excellence',
    value: 28,
    suffix: '+',
    desc: 'Founded 1997',
    color: '#48A111',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: 'Product Portfolio',
    value: 150,
    suffix: '+',
    desc: 'Across 5 categories',
    color: '#F2B50B',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    label: 'Countries Served',
    value: 45,
    suffix: '+',
    desc: 'Global distribution',
    color: '#60a5fa',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    label: 'Happy Clients',
    value: 2500,
    suffix: '+',
    desc: 'Industry leaders',
    color: '#a7f3d0',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 2200
    const steps = 70
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export function Stats() {
  return (
    <section className="relative bg-primary-dark py-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark to-primary" />

      {/* Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-white/[0.06] hover:border-white/14 bg-white/[0.025] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden shimmer-card cursor-default"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: stat.color }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <svg className="w-5 h-5" style={{ color: stat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>

              {/* Number */}
              <div
                className="text-4xl sm:text-5xl font-black mb-1.5 tabular-nums leading-none"
                style={{ color: stat.color, filter: `drop-shadow(0 0 20px ${stat.color}50)` }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-white/70 text-sm font-semibold mb-1">{stat.label}</div>

              {/* Sub-desc */}
              <div className="text-white/30 text-xs">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
