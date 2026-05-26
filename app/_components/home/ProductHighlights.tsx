'use client'

import Link from 'next/link'
import { SectionHeader } from '../ui/SectionHeader'
import { StaggerContainer, staggerItem, AnimateOnScroll } from '../ui/AnimateOnScroll'
import { PRODUCTS } from '@/app/_lib/data'
import { motion } from 'framer-motion'

const FEATURED = PRODUCTS.filter((p) => p.featured).slice(0, 6)

const CATEGORY_COLORS: Record<string, string> = {
  'Industrial Chemicals': '#0f2848',
  'Soil Conditioners': '#2d6a4f',
  'Agro Chemicals': '#5c8a6e',
  'Water Treatment': '#0369a1',
  'Specialty Chemicals': '#6b3a2d',
}

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const color = CATEGORY_COLORS[product.category] ?? '#0f2848'
  return (
    <motion.div variants={staggerItem}>
      <Link
        href={`/products/${product.slug}`}
        className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        {/* Color header */}
        <div className="h-36 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: color }}>
          <div className="absolute inset-0 hex-pattern opacity-30" />
          <svg className="w-16 h-16 text-white/30 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-3">
            <span
              className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: `${color}15`, color }}
            >
              {product.category}
            </span>
            {product.casNumber && (
              <span className="text-xs text-slate-400 font-mono">CAS {product.casNumber}</span>
            )}
          </div>
          <h3 className="font-bold text-slate-900 text-sm leading-tight mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 flex-1">
            {product.shortDescription}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {product.applications.slice(0, 2).map((app) => (
                <span key={app} className="text-[10px] px-2 py-0.5 bg-slate-50 rounded-full text-slate-500">{app}</span>
              ))}
            </div>
            <span className="text-secondary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              View
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function ProductHighlights() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Portfolio"
            title="Featured Products"
            description="A curated selection from our 150+ product portfolio across key industrial segments."
          />
          <AnimateOnScroll direction="left" className="flex-shrink-0">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all text-sm"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {FEATURED.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
