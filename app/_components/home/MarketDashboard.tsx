'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// ─── Data ──────────────────────────────────────────────────────────────────────
const SEGMENTS = [
  { label: 'Agriculture',         pct: 32, color: '#48A111' },
  { label: 'Water Treatment',     pct: 24, color: '#0369a1' },
  { label: 'Industrial',          pct: 22, color: '#1e6b3e' },
  { label: 'Specialty Chemicals', pct: 14, color: '#7c3aed' },
  { label: 'Other',               pct:  8, color: '#c07d12' },
]

const GROWTH_BARS = [
  { label: 'Agriculture',         pct: 28, color: '#48A111' },
  { label: 'Water Treatment',     pct: 21, color: '#0369a1' },
  { label: 'Specialty Chemicals', pct: 19, color: '#7c3aed' },
  { label: 'Industrial',          pct: 18, color: '#1e6b3e' },
]

const METRICS = [
  { value: 150,  suffix: '+',  label: 'Products',   color: '#48A111' },
  { value: 28,   suffix: 'yr', label: 'Experience', color: '#F2B50B' },
  { value: 45,   suffix: '',   label: 'Countries',  color: '#0369a1' },
  { value: 2500, suffix: '+',  label: 'Clients',    color: '#F2B50B' },
]

// ─── Donut geometry ────────────────────────────────────────────────────────────
const R = 70
const CIRCUMFERENCE = 2 * Math.PI * R

function buildSegments() {
  let offset = -90  // start from top
  return SEGMENTS.map((s) => {
    const dash = (s.pct / 100) * CIRCUMFERENCE
    const gap  = CIRCUMFERENCE - dash
    const startAngle = offset
    offset += (s.pct / 100) * 360
    return { ...s, dash, gap, startAngle }
  })
}
const DONUT_SEGMENTS = buildSegments()

// ─── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [active, target, duration])
  return value
}

// ─── Metric box ────────────────────────────────────────────────────────────────
function MetricBox({ value, suffix, label, color, active }: {
  value: number; suffix: string; label: string; color: string; active: boolean
}) {
  const count = useCountUp(value, 1400, active)
  return (
    <div
      className="rounded-xl p-3 flex flex-col items-center justify-center"
      style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
    >
      <span className="text-xl font-black leading-none" style={{ color }}>
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-[10px] text-white/50 mt-1 font-medium">{label}</span>
    </div>
  )
}

// ─── Growth bar ────────────────────────────────────────────────────────────────
function GrowthBar({ label, pct, color, delay, active }: {
  label: string; pct: number; color: string; delay: number; active: boolean
}) {
  const count = useCountUp(pct, 1200, active)
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] text-white/65 font-medium">{label}</span>
        <span className="text-[11px] font-bold" style={{ color }}>+{count}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${color}25` }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color, transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          animate={active ? { scaleX: pct / 100 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay }}
        />
      </div>
    </div>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────
export function MarketDashboard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Center count-up for ₹850
  const revenueCount = useCountUp(850, 1600, inView)

  return (
    <div
      ref={ref}
      className="relative rounded-3xl overflow-hidden shadow-2xl select-none"
      style={{ background: 'linear-gradient(135deg, #0a1a0a 0%, #0f2210 100%)' }}
    >
      {/* Grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative p-5">
        {/* Header */}
        <div className="mb-4">
          <p className="text-white/80 font-bold text-sm">Market Distribution</p>
          <p className="text-white/35 text-[10px]">Revenue breakdown by industry segment · FY 2025</p>
        </div>

        <div className="flex gap-4 items-start">
          {/* ── Left: Donut chart ── */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <svg width="180" height="180" viewBox="0 0 180 180">
              {/* Track */}
              <circle cx="90" cy="90" r={R} fill="none" stroke="#1e3d1a" strokeWidth="28" />

              {/* Animated segments */}
              {DONUT_SEGMENTS.map((seg, i) => (
                <motion.circle
                  key={seg.label}
                  cx="90" cy="90" r={R}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="28"
                  strokeDasharray={`${seg.dash} ${seg.gap}`}
                  strokeLinecap="butt"
                  transform={`rotate(${seg.startAngle} 90 90)`}
                  initial={{ strokeDashoffset: seg.dash }}
                  animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: seg.dash }}
                  transition={{ duration: 1.0, ease: 'easeOut', delay: 0.3 + i * 0.15 }}
                />
              ))}

              {/* Center hole */}
              <circle cx="90" cy="90" r="42" fill="#0f2210" />

              {/* Center text */}
              <text x="90" y="82" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="system-ui">
                ₹{revenueCount}
              </text>
              <text x="90" y="96" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="system-ui">
                Crore Total
              </text>
              <text x="90" y="109" textAnchor="middle" fill="#48A111" fontSize="9" fontFamily="system-ui" fontWeight="700">
                ↑ 18% YoY
              </text>
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center mt-1 max-w-[180px]">
              {SEGMENTS.slice(1).map((s) => (
                <div key={s.label} className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: s.color }} />
                  <span className="text-[9px] text-white/55">{s.label.split(' ')[0]} {s.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Growth bars + metrics ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Growth bars */}
            <div>
              <p className="text-[9px] font-black tracking-widest text-white/40 uppercase mb-3">Top Segments by Growth</p>
              {GROWTH_BARS.map((bar, i) => (
                <GrowthBar key={bar.label} {...bar} delay={0.5 + i * 0.12} active={inView} />
              ))}
            </div>

            {/* Metric grid */}
            <div>
              <p className="text-[9px] font-black tracking-widest text-white/40 uppercase mb-2">Key Performance Metrics</p>
              <div className="grid grid-cols-2 gap-2">
                {METRICS.map((m) => (
                  <MetricBox key={m.label} {...m} active={inView} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
