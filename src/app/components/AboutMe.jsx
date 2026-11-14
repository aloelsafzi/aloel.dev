import Link from 'next/link'

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <p className="font-mono text-sm text-accent dark:text-accent-dark mb-3">
        Software Engineer
      </p>

      <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink dark:text-ink-dark">
        Samsul Fauzi
      </h1>

      <p className="mt-5 text-lg sm:text-xl text-ink dark:text-ink-dark leading-relaxed max-w-xl">
        Membangun aplikasi web, layanan backend, dan infrastruktur server yang stabil dari pengembangan hingga produksi.
      </p>

      <p className="mt-4 text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed max-w-xl">
        Sejak 2020 saya menangani sistem perbankan digital, integrasi logistik marketplace, kontainerisasi Docker.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
        <a
          href={process.env.linkCv}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary group w-full sm:w-auto justify-center"
        >
          <span>Unduh Resume (CV)</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>

        <Link href="/posts" className="btn-secondary w-full sm:w-auto justify-center">
          Baca Tulisan
        </Link>
      </div>
    </div>
  )
}

export default AboutMe
