import { AnimateOnScroll } from './AnimateOnScroll'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <AnimateOnScroll>
          <span
            className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase mb-4 px-3.5 py-1.5 rounded-full ${
              light
                ? 'bg-white/15 text-white border border-white/20'
                : 'bg-accent/18 text-primary border border-accent/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-accent' : 'bg-secondary'}`}
            />
            {eyebrow}
          </span>
        </AnimateOnScroll>
      )}

      <AnimateOnScroll delay={eyebrow ? 0.08 : 0}>
        <h2
          className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight ${
            light ? 'text-white' : 'text-slate-900'
          }`}
        >
          {title}
        </h2>
      </AnimateOnScroll>

      {description && (
        <AnimateOnScroll delay={0.18}>
          <p
            className={`mt-4 text-lg leading-relaxed max-w-3xl ${centered ? 'mx-auto' : ''} ${
              light ? 'text-white/70' : 'text-slate-500'
            }`}
          >
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
      style={{ backgroundColor: `${color}15`, color }}
    >
      {children}
    </span>
  )
}
