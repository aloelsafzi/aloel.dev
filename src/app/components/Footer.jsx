import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-paper-border dark:border-obsidian-border mt-20 py-8 text-sm text-ink-muted dark:text-ink-dark-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-ink dark:text-ink-dark font-medium">© {currentYear} Samsul Fauzi</span>
          <span aria-hidden="true">·</span>
          <span>Jakarta, Indonesia</span>
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-wrap items-center gap-x-2 gap-y-1 -ml-2 sm:ml-0">
          <Link
            href="/"
            className="inline-flex items-center min-h-[44px] px-2 hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            Beranda
          </Link>
          <Link
            href="/posts"
            className="inline-flex items-center min-h-[44px] px-2 hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            Tulisan
          </Link>
          <Link
            href="/tasbih"
            className="inline-flex items-center min-h-[44px] px-2 hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            Tasbih
          </Link>
          <a
            href="https://github.com/aloelsafzi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-[44px] px-2 hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samsulfauzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-[44px] px-2 hover:text-ink dark:hover:text-ink-dark transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
