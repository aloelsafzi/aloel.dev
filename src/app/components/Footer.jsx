import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-zinc-200/70 dark:border-zinc-800/80 mt-20 py-8 text-sm text-zinc-500 dark:text-zinc-500 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">© {currentYear} Samsul Fauzi</span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
          <span>Dibangun dengan Next.js & Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-5 text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Tentang
          </Link>
          <Link href="/posts" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Tulisan
          </Link>
          <Link href="/tasbih" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
            Tasbih
          </Link>
          <a
            href="https://github.com/aloelsafzi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samsulfauzi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
