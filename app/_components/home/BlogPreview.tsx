import Link from 'next/link'
import { SectionHeader } from '../ui/SectionHeader'
import { AnimateOnScroll } from '../ui/AnimateOnScroll'
import { BLOG_POSTS } from '@/app/_lib/data'

const FEATURED_POSTS = BLOG_POSTS.filter((p) => p.featured)
  .concat(BLOG_POSTS.filter((p) => !p.featured))
  .slice(0, 3)

const CATEGORY_COLORS: Record<string, { text: string; bg: string; border: string }> = {
  Sustainability: { text: '#25671E', bg: '#25671E15', border: '#25671E30' },
  Agriculture:    { text: '#48A111', bg: '#48A11115', border: '#48A11130' },
  'Water Treatment': { text: '#0369a1', bg: '#0369a115', border: '#0369a130' },
  Safety:         { text: '#c07d12', bg: '#c07d1215', border: '#c07d1230' },
  'Industry Trends': { text: '#7c3aed', bg: '#7c3aed15', border: '#7c3aed30' },
}

const FALLBACK_COLORS = { text: '#0f2848', bg: '#0f284815', border: '#0f284830' }

export function BlogPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader
            eyebrow="Knowledge Hub"
            title="Latest from Our Experts"
            description="Industry insights, technical guides, and sustainability stories from the NovaChem team."
          />
          <AnimateOnScroll direction="left" className="flex-shrink-0">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-200 text-sm cursor-pointer"
            >
              All Articles
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_POSTS.map((post, i) => {
            const colors = CATEGORY_COLORS[post.category] ?? FALLBACK_COLORS
            const gradientColor = colors.text
            return (
              <AnimateOnScroll key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer premium-card"
                >
                  {/* Header image area */}
                  <div
                    className="relative h-48 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${gradientColor}dd 0%, ${gradientColor}55 100%)`,
                    }}
                  >
                    {/* Grid overlay */}
                    <div className="absolute inset-0 hex-pattern opacity-20" />

                    {/* Decorative molecule */}
                    <div className="absolute -right-8 -bottom-8 opacity-15">
                      <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
                        <circle cx="70" cy="70" r="65" stroke="white" strokeWidth="1.5"/>
                        <circle cx="70" cy="70" r="45" stroke="white" strokeWidth="1" strokeOpacity="0.7"/>
                        <circle cx="70" cy="70" r="25" fill="white" opacity="0.1"/>
                        <circle cx="70" cy="5" r="5" fill="white" opacity="0.6"/>
                        <circle cx="135" cy="70" r="5" fill="white" opacity="0.5"/>
                        <circle cx="70" cy="135" r="5" fill="white" opacity="0.5"/>
                        <circle cx="5" cy="70" r="5" fill="white" opacity="0.6"/>
                      </svg>
                    </div>

                    {/* Read time badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 bg-black/25 backdrop-blur-sm rounded-full text-white text-[10px] font-semibold">
                        {post.readTime} min read
                      </span>
                    </div>

                    {/* Category tag */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-slate-400 text-xs">
                        {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2 text-sm">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{ backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-slate-50">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: gradientColor }}
                      >
                        {post.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-xs">{post.author}</div>
                        <div className="text-slate-400 text-[10px]">{post.authorRole}</div>
                      </div>
                      <div className="ml-auto">
                        <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
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
