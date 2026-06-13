'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SectionHeader } from '../ui/SectionHeader'
import { StaggerContainer, staggerItem, AnimateOnScroll } from '../ui/AnimateOnScroll'
import { PRODUCTS } from '@/app/_lib/data'
import type { ProductFeature } from '@/app/_lib/types'
import { motion } from 'framer-motion'

const FEATURED = PRODUCTS.filter((p) => p.featured).slice(0, 6)

const CATEGORY_CONFIG: Record<string, { color: string; bg: string }> = {
  'Soil Conditioners':    { color: '#3d5a2a', bg: '#1a2e0a' },
  'Agro Chemicals':       { color: '#48A111', bg: '#0d2b0a' },
  'Industrial Chemicals': { color: '#25671E', bg: '#0c2340' },
  'Water Treatment':      { color: '#0369a1', bg: '#071e3a' },
  'Specialty Chemicals':  { color: '#7c3aed', bg: '#1a0a20' },
}
const FALLBACK = { color: '#25671E', bg: '#0f1a0a' }

const IMG = 260  // image panel height in px

// ─── Variants ─────────────────────────────────────────────────────────────────
const hoverCtx = {
  rest:  {},
  hover: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}
const overlayBgV = {
  rest:  { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
}
const featureListV = {
  rest:  {},
  hover: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
}
const featureItemV = {
  rest:  { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' as const } },
}

// ─── FeatureOverlay ────────────────────────────────────────────────────────────
function FeatureOverlay({ features, label }: { features: ProductFeature[]; label?: string }) {
  return (
    <motion.div
      variants={overlayBgV}
      className="absolute inset-0 z-10 flex flex-col justify-end p-4 pointer-events-none"
      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.52) 55%, rgba(0,0,0,0.08) 100%)' }}
    >
      {label && (
        <div className="mb-3 flex justify-center">
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-amber-300 whitespace-nowrap"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', border: '1px solid rgba(242,181,11,0.5)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
          >
            {label}
          </span>
        </div>
      )}
      <motion.ul variants={featureListV} className="flex flex-col gap-1.5">
        {features.slice(0, 5).map((feat) => (
          <motion.li
            key={feat.label}
            variants={featureItemV}
            className="flex items-center gap-2.5"
          >
            <span className="w-7 h-7 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-sm flex-shrink-0 backdrop-blur-sm">
              {feat.icon}
            </span>
            <span className="text-white text-[11px] font-semibold leading-tight drop-shadow">{feat.label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

// ─── ProductCard ───────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const cfg = CATEGORY_CONFIG[product.category] ?? FALLBACK

  return (
    <motion.div variants={staggerItem} style={{ position: 'relative' }}>
      {/* Hover owner — propagates rest/hover to every descendant */}
      <motion.div initial="rest" whileHover="hover" variants={hoverCtx} style={{ position: 'relative', zIndex: 1 }}>

        <Link
          href={`/products/${product.slug}`}
          className="flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-pointer hover:shadow-xl hover:border-primary/20 transition-shadow duration-300"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        >
          {/* ── Image panel — static, fully visible at all times ── */}
          <div
            className="rounded-t-2xl relative flex-shrink-0 overflow-hidden"
            style={{ height: IMG, backgroundColor: '#ffffff' }}
          >
            {product.photo ? (
              <Image
                src={product.photo}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                priority={false}
              />
            ) : null}

            {/* Feature overlay — fades in on hover */}
            {product.features && product.features.length > 0 && (
              <FeatureOverlay features={product.features} label={product.featureLabel} />
            )}

            {/* Category pill */}
            <div className="absolute top-2.5 left-2.5 z-20">
              <span
                className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm"
                style={{ backgroundColor: `${cfg.color}40`, color: '#fff', border: `1px solid ${cfg.color}60` }}
              >
                {product.category}
              </span>
            </div>

            {product.casNumber && (
              <div className="absolute bottom-2.5 right-2.5 z-20">
                <span className="text-[9px] font-mono text-white/60 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                  CAS {product.casNumber}
                </span>
              </div>
            )}
          </div>

          {/* ── Text content ── */}
          <div
            className="rounded-b-2xl bg-white"
            style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <h3 className="font-bold text-slate-900 text-base leading-tight mb-2">
              {product.name}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4" style={{ flex: 1 }}>
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.applications.slice(0, 2).map((app) => (
                <span key={app} className="text-xs px-2.5 py-0.5 bg-slate-50 rounded-full text-slate-500 border border-slate-100">
                  {app}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-xs text-slate-400">ISO Certified</span>
              </div>
              <span className="text-secondary text-sm font-bold flex items-center gap-1">
                View Details
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────
export function ProductHighlights() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 grid-pattern-light pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Featured Products"
            description="A curated selection from our product portfolio across key agricultural segments."
          />
          <AnimateOnScroll direction="left" className="flex-shrink-0">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-200 text-sm cursor-pointer"
            >
              View All Products
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          staggerDelay={0.08}
        >
          {FEATURED.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </StaggerContainer>

        <AnimateOnScroll className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Can&apos;t find what you need? We custom-formulate for specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary transition-colors cursor-pointer"
          >
            Contact our technical team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
