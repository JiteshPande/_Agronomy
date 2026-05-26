import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS } from '../../_lib/data'
import { AnimateOnScroll } from '../../_components/ui/AnimateOnScroll'

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

const CATEGORY_COLORS: Record<string, string> = {
  Sustainability: '#2d6a4f',
  Agriculture: '#5c8a6e',
  'Water Treatment': '#0369a1',
  Safety: '#b45309',
  'Industry Trends': '#7c3aed',
}

export default async function BlogPostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
  const color = CATEGORY_COLORS[post.category] ?? '#0f2848'

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-16 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${color}e0, ${color}90)` }}>
        <div className="absolute inset-0 hex-pattern" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold">{post.category}</span>
            <span className="text-white/50 text-xs">{post.readTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
              {post.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className="text-white font-semibold">{post.author}</div>
              <div className="text-white/60 text-sm">{post.authorRole} · {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">{post.excerpt}</p>
                <div className="prose prose-slate max-w-none">
                  {post.content.split('\n\n').map((paragraph, i) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-4">{paragraph.replace(/\*\*/g, '')}</h2>
                    }
                    if (paragraph.startsWith('**')) {
                      const parts = paragraph.split('**')
                      return (
                        <p key={i} className="text-slate-700 leading-relaxed mb-4">
                          {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                        </p>
                      )
                    }
                    return <p key={i} className="text-slate-700 leading-relaxed mb-4">{paragraph}</p>
                  })}
                </div>

                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-500 mb-3">Tagged:</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-slate-50 rounded-full text-sm text-slate-600 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
                  <p className="font-semibold text-slate-900 mb-3">Share this article</p>
                  <div className="flex gap-3">
                    {['LinkedIn', 'Twitter', 'WhatsApp', 'Email'].map((platform) => (
                      <button key={platform} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-primary hover:text-primary transition-colors">
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author card */}
              <AnimateOnScroll direction="left">
                <div className="bg-slate-50 rounded-2xl p-5">
                  <h3 className="font-bold text-slate-900 text-sm mb-4">About the Author</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: color }}>
                      {post.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{post.author}</div>
                      <div className="text-slate-500 text-xs">{post.authorRole}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">Expert in {post.category.toLowerCase()} with years of experience at NovaChem Industries.</p>
                </div>
              </AnimateOnScroll>

              {/* Newsletter */}
              <AnimateOnScroll direction="left" delay={0.1}>
                <div className="bg-primary rounded-2xl p-5">
                  <h3 className="font-bold text-white text-sm mb-2">Stay Updated</h3>
                  <p className="text-white/60 text-xs mb-4">Get the latest industry insights and product news delivered to your inbox.</p>
                  <input type="email" placeholder="your@email.com" className="w-full px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-3 focus:outline-none focus:border-secondary" />
                  <button className="w-full py-2.5 bg-secondary text-white rounded-xl text-sm font-semibold hover:bg-secondary-dark transition-colors">Subscribe</button>
                </div>
              </AnimateOnScroll>

              {/* Related posts */}
              {related.length > 0 && (
                <AnimateOnScroll direction="left" delay={0.2}>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-4">Related Articles</h3>
                    <div className="space-y-3">
                      {related.map((rp) => (
                        <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                          <div className="w-12 h-12 rounded-lg flex-shrink-0" style={{ background: `linear-gradient(135deg, ${CATEGORY_COLORS[rp.category] ?? '#0f2848'}80, ${CATEGORY_COLORS[rp.category] ?? '#0f2848'}40)` }} />
                          <div className="min-w-0">
                            <p className="text-slate-900 text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors">{rp.title}</p>
                            <p className="text-slate-400 text-[10px] mt-0.5">{rp.readTime} min read</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
