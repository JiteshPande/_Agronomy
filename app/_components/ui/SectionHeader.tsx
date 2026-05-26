import { AnimateOnScroll } from './AnimateOnScroll'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, description, centered = false, light = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <AnimateOnScroll>
          <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full ${light ? 'bg-white/20 text-white' : 'bg-secondary/10 text-secondary'}`}>
            {eyebrow}
          </span>
        </AnimateOnScroll>
      )}
      <AnimateOnScroll delay={eyebrow ? 0.1 : 0}>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
      </AnimateOnScroll>
      {description && (
        <AnimateOnScroll delay={0.2}>
          <p className={`mt-4 text-lg leading-relaxed max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-slate-600'}`}>
            {description}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  )
}

interface BadgeProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export function Badge({ children, color = '#0f2848', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${className}`}
      style={{ backgroundColor: `${color}15`, color: color }}
    >
      {children}
    </span>
  )
}
