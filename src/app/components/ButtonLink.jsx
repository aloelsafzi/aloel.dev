import Link from 'next/link'

const ButtonLink = ({ to, className = '', children }) => {
  return (
    <Link
      href={to}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white shadow-2xs hover:shadow-xs transition-all ${className}`}
    >
      {children}
    </Link>
  )
}

export default ButtonLink