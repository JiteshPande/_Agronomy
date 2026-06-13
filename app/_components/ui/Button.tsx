import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

export function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'

  const variants: Record<string, string> = {
    primary:
      'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-primary text-white hover:bg-primary-light focus-visible:ring-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary',
    ghost:
      'text-primary hover:bg-primary/8 focus-visible:ring-primary',
    white:
      'bg-white text-primary hover:bg-slate-50 focus-visible:ring-white shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    accent:
      'bg-accent text-primary-dark hover:bg-accent-dark focus-visible:ring-accent shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5',
  }

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-sm gap-2.5',
  }

  const classes = `${base} ${variants[variant] ?? variants.primary} ${sizes[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
