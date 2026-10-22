import { Loader2 } from 'lucide-react'

const variants = {
  primary: 'bg-[var(--color-primary)] text-[var(--color-primary-ink)] hover:bg-[var(--color-primary-strong)]',
  secondary: 'bg-[var(--color-surface-2)] text-[var(--color-ink)] hover:bg-[var(--color-border)]',
  ghost: 'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]',
  danger: 'bg-[var(--color-danger-solid)] text-white hover:bg-red-700',
  dangerSoft: 'bg-[var(--color-danger-soft)] text-[var(--color-danger)] hover:bg-[var(--color-surface-2)]',
  outline: 'bg-transparent border border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-surface-2)]',
}

const sizes = {
  sm: 'text-xs px-2.5 py-1.5 rounded-[var(--radius-control)] gap-1.5',
  md: 'text-sm px-4 py-2 rounded-[var(--radius-control)] gap-2',
  lg: 'text-base px-5 py-2.5 rounded-[var(--radius-control)] gap-2',
}

export default function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight = false,
  loading = false,
  className = '',
  children,
  disabled,
  ...props
}) {
  const iconSize = size === 'sm' ? 14 : 16
  return (
    <As
      className={`inline-flex items-center justify-center font-medium transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <Loader2 size={iconSize} className="shrink-0 animate-spin" />
      ) : (
        Icon && !iconRight && <Icon size={iconSize} className="shrink-0" />
      )}
      {children}
      {!loading && Icon && iconRight && <Icon size={iconSize} className="shrink-0" />}
    </As>
  )
}
