'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PRODUCTS } from '../../_lib/data'
import { AnimateOnScroll } from '../../_components/ui/AnimateOnScroll'
import { Button } from '../../_components/ui/Button'

const CATEGORY_COLORS: Record<string, string> = {
  'Industrial Chemicals': '#0f2848',
  'Soil Conditioners': '#2d6a4f',
  'Agro Chemicals': '#5c8a6e',
  'Water Treatment': '#0369a1',
  'Specialty Chemicals': '#6b3a2d',
}

export default function ProductDetailPage({ params }: PageProps<'/products/[slug]'>) {
  const { slug } = use(params)
  const product = PRODUCTS.find((p) => p.slug === slug)
  if (!product) notFound()

  const color = CATEGORY_COLORS[product.category] ?? '#0f2848'
  const related = PRODUCTS.filter((p) => product.relatedSlugs.includes(p.slug))

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">Products</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Visual */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: color }}>
                <div className="relative p-16 flex items-center justify-center hex-pattern">
                  <div className="absolute inset-0 hex-pattern" />
                  <div className="relative text-center">
                    <svg className="w-32 h-32 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    {product.casNumber && (
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white">
                        <div className="text-xs opacity-70 mb-0.5">CAS Number</div>
                        <div className="font-mono font-bold">{product.casNumber}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Quick actions below image */}
              <div className="flex gap-3 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 rounded-xl text-sm text-slate-700 font-semibold hover:bg-slate-100 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download SDS
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 rounded-xl text-sm text-slate-700 font-semibold hover:bg-slate-100 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Download TDS
                </button>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: `${color}15`, color }}>
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">{product.name}</h1>
              <p className="text-slate-600 leading-relaxed mb-6">{product.fullDescription}</p>

              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 shadow-lg"
                  style={{ backgroundColor: color }}
                >
                  Request Quote / Sample
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details tabs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Specifications */}
            <AnimateOnScroll className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 h-full">
                <h2 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-secondary block" />
                  Technical Specifications
                </h2>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-start py-2 border-b border-slate-50 gap-4">
                      <span className="text-slate-500 text-sm">{key}</span>
                      <span className="text-slate-900 text-sm font-semibold text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Applications */}
            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 h-full">
                <h2 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-accent block" />
                  Applications
                </h2>
                <ul className="space-y-2">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-center gap-3 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {app}
                    </li>
                  ))}
                </ul>

                <h2 className="font-bold text-slate-900 text-lg mt-6 mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full block" style={{ backgroundColor: color }} />
                  Packaging Options
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((pkg) => (
                    <span key={pkg} className="px-3 py-1.5 bg-slate-50 rounded-lg text-sm text-slate-700 font-medium">{pkg}</span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Safety & Order */}
            <AnimateOnScroll delay={0.2}>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                  <h2 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Safety Information
                  </h2>
                  <p className="text-amber-800 text-sm leading-relaxed">{product.safetyInfo}</p>
                </div>

                <div className="bg-white border border-slate-100 rounded-2xl p-6">
                  <h2 className="font-bold text-slate-900 text-sm mb-4">Request a Quote</h2>
                  <p className="text-slate-500 text-sm mb-4">Interested in this product? Our sales team will respond within 2 business hours.</p>
                  <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="block w-full text-center py-3 rounded-xl font-bold text-white text-sm" style={{ backgroundColor: color }}>
                    Send Inquiry →
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((rp) => {
                const rColor = CATEGORY_COLORS[rp.category] ?? '#0f2848'
                return (
                  <Link
                    key={rp.slug}
                    href={`/products/${rp.slug}`}
                    className="group flex gap-4 bg-slate-50 rounded-2xl p-4 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100"
                  >
                    <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: rColor }}>
                      <svg className="w-7 h-7 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold" style={{ color: rColor }}>{rp.category}</span>
                      <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-primary transition-colors">{rp.name}</h3>
                      <p className="text-slate-500 text-xs mt-0.5 line-clamp-2">{rp.shortDescription}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
