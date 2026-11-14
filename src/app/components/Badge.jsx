const Badge = ({ text, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-paper-muted dark:bg-obsidian-muted text-ink dark:text-ink-dark border border-paper-border dark:border-obsidian-border whitespace-nowrap ${className}`}
    >
      {text}
    </span>
  )
}

export default Badge
