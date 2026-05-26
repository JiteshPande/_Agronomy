'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../_lib/data'

const CATEGORY_COLORS: Record<string, string> = {
  'Industrial Chemicals': '#0f2848',
  'Soil Conditioners': '#2d6a4f',
  'Agro Chemicals': '#5c8a6e',
  'Water Treatment': '#0369a1',
  'Specialty Chemicals': '#6b3a2d',
}

export default function ProductsPage() {
  const router = useRouter()
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
      {/* Page Hero */}
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
      <section className="sticky top-16 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
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
            {/* Category filters */}
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

      {/* Products Grid */}
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filtered.map((product, i) => {
                  const color = CATEGORY_COLORS[product.category] ?? '#0f2848'
                  return (
                    <motion.div
                      key={product.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={`/products/${product.slug}`}
                        className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Color header */}
                        <div className="h-28 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: color }}>
                          <div className="absolute inset-0 hex-pattern opacity-30" />
                          <svg className="w-12 h-12 text-white/30 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                          {product.featured && (
                            <span className="absolute top-2 right-2 px-2 py-0.5 bg-secondary text-white text-[10px] font-bold rounded-full">Featured</span>
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 self-start" style={{ backgroundColor: `${color}15`, color }}>
                            {product.category}
                          </span>
                          <h3 className="font-bold text-slate-900 text-sm leading-snug mb-1.5 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 flex-1">{product.shortDescription}</p>
                          {product.casNumber && (
                            <p className="text-slate-400 text-[10px] font-mono mt-2">CAS {product.casNumber}</p>
                          )}
                          <div className="mt-3 flex gap-2">
                            <span className="flex-1 text-center py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                              View Details
                            </span>
                            <button
                              onClick={(e) => { e.preventDefault(); router.push('/contact') }}
                              className="flex-1 text-center py-1.5 bg-secondary/5 text-secondary text-xs font-semibold rounded-lg hover:bg-secondary/10 transition-colors"
                            >
                              Inquiry
                            </button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
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
                <button onClick={() => { setSearch(''); setActiveCategory('All Products') }} className="mt-4 text-primary font-semibold hover:underline text-sm">
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
