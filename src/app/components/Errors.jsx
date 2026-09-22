import Link from 'next/link'

const Errors = ({ title = "Halaman Tidak Ditemukan", message = "Halaman yang kamu tuju sedang dalam pengembangan atau tidak tersedia." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="max-w-md p-8 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl shadow-sm">
        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 text-2xl font-mono">
          404
        </div>
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
          {message}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white dark:border dark:border-zinc-700 text-sm font-medium transition-colors shadow-2xs"
        >
          <span>Kembali ke Beranda</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Errors