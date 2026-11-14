'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/app/components'

const NAV_ITEMS = [
  { href: '/posts', label: 'Tulisan', match: (path) => path.startsWith('/posts') },
  { href: '/tasbih', label: 'Tasbih', match: (path) => path.startsWith('/tasbih') },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-paper dark:bg-obsidian border-b border-paper-border dark:border-obsidian-border transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <nav aria-label="Navigasi utama" className="flex items-center justify-between min-h-[64px] gap-4">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className="inline-flex items-center min-h-[44px] pr-2 font-mono text-base sm:text-lg tracking-tight text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-dark transition-colors duration-200"
          >
            <span>aloel</span>
            <span className="text-accent dark:text-accent-dark">.dev</span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = item.match(pathname)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center min-h-[44px] px-3.5 rounded-xl text-sm transition-all duration-200 ease-out active:scale-[0.98] ${
                    isActive
                      ? 'bg-paper-muted dark:bg-obsidian-muted text-ink dark:text-ink-dark font-medium'
                      : 'text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark hover:bg-paper-muted/60 dark:hover:bg-obsidian-muted/70'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <div className="h-5 w-px bg-paper-border dark:bg-obsidian-border mx-1" aria-hidden="true" />

            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
