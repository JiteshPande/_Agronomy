'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../_lib/data'
import type { Product, AppUseCase, CropStage, ProductFeature } from '../_lib/types'

const CATEGORY_CONFIG: Record<string, { color: string; bg: string }> = {
  'Soil Conditioners':    { color: '#3d5a2a', bg: '#1a0f05' },
  'Agro Chemicals':       { color: '#48A111', bg: '#0d2b0a' },
  'Industrial Chemicals': { color: '#25671E', bg: '#0c2340' },
  'Water Treatment':      { color: '#0369a1', bg: '#071e3a' },
  'Specialty Chemicals':  { color: '#7c3aed', bg: '#1a0a20' },
}
const FALLBACK = { color: '#25671E', bg: '#0f1a0a' }

const hoverWrapVariants = {
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

// ─── Crop stage timeline ─────────────────────────────────────────────────────

const STAGES: { key: CropStage; label: string }[] = [
  { key: 'soil-prep', label: 'Soil Prep' },
  { key: 'planting',  label: 'Planting'  },
  { key: 'growing',   label: 'Growing'   },
  { key: 'harvest',   label: 'Harvest'   },
]

const STAGE_COLORS: Record<CropStage, string> = {
  'soil-prep':  '#25671E',
  'planting':   '#48A111',
  'growing':    '#16a34a',
  'harvest':    '#d97706',
  'year-round': '#6366f1',
}

function CropTimeline({ guide }: { guide: AppUseCase[] }) {
  const activeStages = new Set(guide.map((u) => u.stage))

  return (
    <div className="mb-6">
      <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">When to Use</p>
      <div className="relative flex items-center justify-between">
        {/* connecting line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-primary via-secondary to-amber-400 top-3"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        />
        {STAGES.map((s, idx) => {
          const active = activeStages.has(s.key)
          return (
            <motion.div
              key={s.key}
              className="relative flex flex-col items-center gap-1.5 z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.4 + idx * 0.12, duration: 0.4 }}
            >
              <motion.div
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: active ? STAGE_COLORS[s.key] : '#e2e8f0',
                  backgroundColor: active ? STAGE_COLORS[s.key] : '#f8fafc',
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.5 + idx * 0.12, type: 'spring', stiffness: 300 }}
              >
                {active && <span className="w-2 h-2 rounded-full bg-white block" />}
              </motion.div>
              <span
                className="text-[9px] font-semibold whitespace-nowrap"
                style={{ color: active ? STAGE_COLORS[s.key] : '#94a3b8' }}
              >
                {s.label}
              </span>
            </motion.div>
          )
        })}
      </div>
      {/* year-round indicator */}
      {activeStages.has('year-round') && (
        <motion.p
          className="mt-2 text-[9px] text-indigo-500 font-semibold flex items-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
          Also applicable year-round
        </motion.p>
      )}
    </div>
  )
}

// ─── Application method nodes ─────────────────────────────────────────────────

const nodeVariants = {
  hidden:  { opacity: 0, scale: 0.7, y: 8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { delay: 0.7 + i * 0.1, type: 'spring' as const, stiffness: 260, damping: 18 },
  }),
}

function MethodNodes({ guide }: { guide: AppUseCase[] }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">How to Use</p>
      <div className="grid grid-cols-1 gap-2">
        {guide.map((u, i) => (
          <motion.div
            key={u.label}
            custom={i}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex items-start gap-2.5 p-2.5 rounded-xl border"
            style={{
              borderColor: `${STAGE_COLORS[u.stage]}30`,
              backgroundColor: `${STAGE_COLORS[u.stage]}08`,
            }}
          >
            <span className="text-base leading-none mt-0.5">{u.icon}</span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-800 leading-snug">{u.label}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{u.method}</p>
            </div>
            <span
              className="ml-auto flex-shrink-0 text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide"
              style={{
                backgroundColor: `${STAGE_COLORS[u.stage]}20`,
                color: STAGE_COLORS[u.stage],
              }}
            >
              {u.stage === 'year-round' ? 'All Year' : u.stage.replace('-', ' ')}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Application map fallback (no guide) ─────────────────────────────────────

function ApplicationTagList({ applications }: { applications: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">Applications</p>
      <div className="flex flex-wrap gap-2">
        {applications.map((app, i) => (
          <motion.span
            key={app}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.08 }}
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
          >
            {app}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductScrollCard({ product, flip }: { product: Product; flip: boolean }) {
  const router = useRouter()
  const cfg = CATEGORY_CONFIG[product.category] ?? FALLBACK

  const card = (
    <motion.div
      initial={{ opacity: 0, x: flip ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="lg:w-5/12"
    >
      {/* Hover wrapper — propagates "rest"/"hover" to FeatureOverlay children */}
      <motion.div initial="rest" whileHover="hover" variants={hoverWrapVariants}>
        <Link
          href={`/products/${product.slug}`}
          className="flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
        >
          {/* Full-bleed product photo */}
          <div
            className="h-60 relative flex-shrink-0 overflow-hidden"
            style={{
              backgroundImage: product.photo ? `url('${product.photo}')` : undefined,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Feature overlay — fades in on hover */}
            {product.features && product.features.length > 0 && (
              <FeatureOverlay features={product.features} label={product.featureLabel} />
            )}

            {/* Category pill */}
            <div className="absolute top-3 left-3 z-40">
              <span
                className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm"
                style={{ backgroundColor: `${cfg.color}40`, color: '#ffffff', border: `1px solid ${cfg.color}60` }}
              >
                {product.category}
              </span>
            </div>
            {product.featured && (
              <span className="absolute top-3 right-3 z-40 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded-full">Featured</span>
            )}
            {product.casNumber && (
              <div className="absolute bottom-3 right-3 z-40">
                <span className="text-[9px] font-mono text-white/60 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                  CAS {product.casNumber}
                </span>
              </div>
            )}
          </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="font-bold text-slate-900 text-base leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{product.shortDescription}</p>
          {/* packaging */}
          <div className="flex flex-wrap gap-1.5">
            {product.packaging.map((p) => (
              <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500">{p}</span>
            ))}
          </div>
          {/* actions */}
          <div className="flex gap-2 pt-1">
            <span className="flex-1 text-center py-2 bg-primary/5 text-primary text-xs font-semibold rounded-xl hover:bg-primary/10 transition-colors">
              View Details
            </span>
            <button
              onClick={(e) => { e.preventDefault(); router.push('/contact') }}
              className="flex-1 text-center py-2 bg-secondary/5 text-secondary text-xs font-semibold rounded-xl hover:bg-secondary/10 transition-colors"
            >
              Inquiry
            </button>
          </div>
        </div>
      </Link>
      </motion.div>
    </motion.div>
  )

  const map = (
    <motion.div
      initial={{ opacity: 0, x: flip ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
      className="lg:w-7/12 flex flex-col justify-center bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
    >
      <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-5 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        Application Guide
      </p>
      {product.applicationGuide ? (
        <>
          <CropTimeline guide={product.applicationGuide} />
          <MethodNodes guide={product.applicationGuide} />
        </>
      ) : (
        <ApplicationTagList applications={product.applications} />
      )}
    </motion.div>
  )

  return (
    <div className={`flex flex-col lg:flex-row gap-6 items-stretch ${flip ? 'lg:flex-row-reverse' : ''}`}>
      {card}
      {map}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All Products')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = activeCategory === 'All Products' || p.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      return matchCategory && matchSearch
    })
  }, [activeCategory, search])

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Product Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              150+ premium chemicals across industrial, agricultural, and specialty segments. ISO certified. Export ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative flex-shrink-0 w-full sm:w-72">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="text-slate-400 text-sm ml-auto flex-shrink-0">{filtered.length} products</span>
          </div>
        </div>
      </section>

      {/* Products scroll list */}
      <section className="py-16 bg-slate-50 min-h-screen isolate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-12"
              >
                {filtered.map((product, i) => (
                  <ProductScrollCard key={product.slug} product={product} flip={i % 2 !== 0} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-500">Try adjusting your search or filters</p>
                <button
                  onClick={() => { setSearch(''); setActiveCategory('All Products') }}
                  className="mt-4 text-primary font-semibold hover:underline text-sm"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
