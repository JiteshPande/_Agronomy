'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { BLOG_POSTS } from '../_lib/data'

const BLOG_CATEGORIES = ['All', 'Sustainability', 'Agriculture', 'Water Treatment', 'Safety', 'Industry Trends']

const CATEGORY_COLORS: Record<string, string> = {
  Sustainability: '#2d6a4f',
  Agriculture: '#5c8a6e',
  'Water Treatment': '#0369a1',
  Safety: '#b45309',
  'Industry Trends': '#7c3aed',
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory
      const q = search.toLowerCase()
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchSearch
    })
  }, [activeCategory, search])

  const featured = BLOG_POSTS.filter((p) => p.featured)[0]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase rounded-full mb-4">Knowledge Hub</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">NovaChem Blog</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Industry insights, technical deep-dives, and sustainability stories from our team of chemical experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid md:grid-cols-2 gap-8 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all"
              >
                <div
                  className="h-64 md:h-auto flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${CATEGORY_COLORS[featured.category] ?? '#0f2848'}e6, ${CATEGORY_COLORS[featured.category] ?? '#0f2848'}80)` }}
                >
                  <div className="absolute inset-0 hex-pattern" />
                  <div className="relative text-center text-white p-8">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-3">Featured</span>
                    <svg className="w-16 h-16 mx-auto opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: `${CATEGORY_COLORS[featured.category] ?? '#0f2848'}15`, color: CATEGORY_COLORS[featured.category] ?? '#0f2848' }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-slate-400 text-xs">{featured.readTime} min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4 group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                        {featured.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{featured.author}</div>
                        <div className="text-xs text-slate-400">{new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                      </div>
                    </div>
                    <span className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters + Grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
            <div className="relative w-full sm:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={`${activeCategory}-${search}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((post, i) => {
                  const color = CATEGORY_COLORS[post.category] ?? '#0f2848'
                  return (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link href={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-40 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${color}e6, ${color}70)` }}>
                          <div className="absolute inset-0 hex-pattern" />
                          <div className="absolute bottom-3 left-4">
                            <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">{post.category}</span>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                            <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            <span>·</span>
                            <span>{post.readTime} min read</span>
                          </div>
                          <h2 className="font-bold text-slate-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-50 rounded-full text-slate-500">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="text-5xl mb-4">📭</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
                <p className="text-slate-500 mb-4">Try different keywords or categories</p>
                <button onClick={() => { setSearch(''); setActiveCategory('All') }} className="text-primary font-semibold hover:underline text-sm">Clear filters</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
