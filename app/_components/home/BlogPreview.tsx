import Link from 'next/link'
import { SectionHeader } from '../ui/SectionHeader'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'
import { BLOG_POSTS } from '@/app/_lib/data'

const FEATURED_POSTS = BLOG_POSTS.filter((p) => p.featured).concat(BLOG_POSTS.filter((p) => !p.featured)).slice(0, 3)

const CATEGORY_COLORS: Record<string, string> = {
  Sustainability: '#2d6a4f',
  Agriculture: '#5c8a6e',
  'Water Treatment': '#0369a1',
  Safety: '#b45309',
  'Industry Trends': '#7c3aed',
}

export function BlogPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Knowledge Hub"
            title="Latest from Our Experts"
            description="Industry insights, technical guides, and sustainability stories from the NovaChem team."
          />
          <AnimateOnScroll direction="left" className="flex-shrink-0">
            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all text-sm">
              All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_POSTS.map((post, i) => {
            const color = CATEGORY_COLORS[post.category] ?? '#0f2848'
            return (
              <AnimateOnScroll key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="h-40 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${color}e6, ${color}80)` }}>
                    <div className="absolute inset-0 hex-pattern" />
                    <div className="absolute bottom-3 left-4">
                      <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">{post.category}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>·</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: color }}
                      >
                        {post.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold text-slate-700">{post.author}</div>
                        <div className="text-slate-400">{post.authorRole}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
