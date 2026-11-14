import Link from 'next/link'

const Errors = ({
  title = 'Halaman Tidak Ditemukan',
  message = 'Halaman yang Anda buka tidak tersedia atau sudah dipindahkan.',
}) => {
  return (
    <div className="flex flex-col items-start justify-center min-h-[55vh] max-w-lg py-12">
      <p className="font-mono text-sm text-accent dark:text-accent-dark mb-3">404</p>
      <h1 className="text-3xl sm:text-4xl tracking-tight text-ink dark:text-ink-dark mb-3">
        {title}
      </h1>
      <p className="text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed mb-8">
        {message}
      </p>
      <Link href="/" className="btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  )
}

export default Errors
