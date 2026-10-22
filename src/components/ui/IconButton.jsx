const tones = {
  primary: "text-[var(--color-primary)]",
  info: "text-[var(--color-info)]",
  success: "text-[var(--color-success)]",
  danger: "text-[var(--color-danger)]",
  neutral: "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
};

/**
 * `tone` renders an always-visible icon button with a quiet neutral fill and a
 * coloured icon: used for datatable row actions (never hidden behind hover,
 * always identifiable at a glance). Omit `tone` for the plain ghost icon button
 * used in cards/toolbars.
 */
export default function IconButton({
  icon: Icon,
  label,
  active = false,
  tone,
  className = "",
  size = 16,
  ...props
}) {
  const toneClass = tone
    ? `bg-[var(--color-surface-2)] hover:bg-[var(--color-border)] ${tones[tone] || tones.neutral}`
    : active
      ? "bg-[var(--color-surface-2)] text-[var(--color-ink)]"
      : "text-[var(--color-ink-soft)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]";

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center p-2.5 rounded-[var(--radius-control)] transition-colors duration-150 ${toneClass} ${className}`}
      {...props}
    >
      <Icon size={size} />
    </button>
  );
}
