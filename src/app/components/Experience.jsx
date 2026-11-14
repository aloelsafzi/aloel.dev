import Badge from '@/app/components/Badge'

const defaultExperiences = [
  {
    role: 'Full Stack Developer',
    company: 'PT Pegadaian',
    companyUrl: '',
    location: 'Jakarta, Indonesia',
    period: '2025 - Sekarang',
    type: 'Contract',
    current: true,
    description:
      'Memelihara dan mengembangkan fitur baru pada platform web internal perusahaan untuk mendukung operasional harian.',
    achievements: [
      'Memigrasi aplikasi E-Office dari arsitektur monolitik ke microservices agar setiap layanan lebih mudah dikembangkan dan dipelihara.',
      'Mengintegrasikan layanan microservices dan API internal untuk alur pertukaran data lintas modul.',
      'Memperbaiki antarmuka dan alur penggunaan aplikasi E-Office agar lebih responsif di berbagai ukuran layar.',
    ],
    skills: ['React', 'Node.js', 'Django', 'Tailwind CSS', 'PostgreSQL', 'GitLab', 'Docker', 'Vue.js', 'NestJS'],
  },
  {
    role: 'Junior DevOps Engineer',
    company: 'PT Wahana Prestasi Logistik',
    companyUrl: '',
    location: 'Tangerang Selatan, Indonesia',
    period: '2023 - 2024',
    type: 'Contract',
    current: false,
    description:
      'Menangani kontainerisasi aplikasi internal, pengelolaan server dan repositori, serta otomasi deployment dengan GitLab CI/CD.',
    achievements: [
      'Menyiapkan pipeline GitLab CI/CD dengan GitLab Runner untuk mengotomasi proses build, pengujian, dan deployment.',
      'Mengemas aplikasi internal menggunakan Docker dan Docker Compose serta mengelola image di private registry.',
      'Menyatukan repositori source code aplikasi internal ke dalam satu manajemen terpusat di GitLab.',
      'Menyiapkan dan mengonfigurasi server DRC (Disaster Recovery Center) untuk menjaga kesiapan pemulihan layanan.',
    ],
    skills: ['Linux', 'Docker', 'Docker Compose', 'GitLab CI/CD', 'Git', 'Nginx', 'Shell Script', 'CentOS', 'Ubuntu'],
  },
  {
    role: 'Programmer',
    company: 'PT Wahana Prestasi Logistik',
    companyUrl: '',
    location: 'Tangerang Selatan, Indonesia',
    period: '2022 - 2023',
    type: 'Contract',
    current: false,
    description:
      'Merancang antarmuka pengguna, membangun layanan backend, dan mengintegrasikan API pihak ketiga untuk operasional pengiriman logistik.',
    achievements: [
      'Mengintegrasikan sistem logistik dengan marketplace (Tokopedia dan Lazada) untuk sinkronisasi pesanan dan pengiriman.',
      'Membangun API pelacakan paket real-time bagi mitra e-commerce untuk memantau status pengiriman.',
      'Mengembangkan modul web Customer Center untuk mengelola pengaduan dan permintaan layanan pelanggan.',
    ],
    skills: ['Vue.js', 'Quasar', 'JavaScript', 'Node.js', 'MySQL', 'Docker', 'Nginx', 'Perl', 'Linux', 'Git'],
  },
  {
    role: 'Software Developer',
    company: 'PT Bank SMBC Indonesia',
    companyUrl: '',
    location: 'Jakarta, Indonesia',
    period: '2020 - 2022',
    type: 'Contract',
    current: false,
    description:
      'Memodernisasi aplikasi operasional perbankan serta membangun prototipe layanan perbankan digital.',
    achievements: [
      'Memigrasi aplikasi legacy dari Lotus Notes ke platform web berbasis OutSystems.',
      'Mengembangkan prototipe pengajuan pinjaman digital dengan WebRTC untuk kebutuhan video KYC (Know Your Customer).',
      'Mengimplementasikan alur verifikasi data dan tanda tangan digital secara real-time untuk proses persetujuan nasabah.',
    ],
    skills: ['JavaScript', 'Node.js', 'Express.js', 'OutSystems', 'WebRTC', 'GitLab', 'Git'],
  },
]

const Experience = ({ experiences = defaultExperiences, className = '' }) => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={`mt-16 sm:mt-20 border-t border-paper-border dark:border-obsidian-border pt-12 sm:pt-16 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="flex items-start gap-3.5">
          <div
            aria-hidden="true"
            className="mt-1 flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 dark:bg-accent-dark/15 border border-accent/25 dark:border-accent-dark/25 text-accent dark:text-accent-dark shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h2
              id="experience-heading"
              className="text-2xl sm:text-3xl tracking-tight text-ink dark:text-ink-dark"
            >
              Pengalaman Kerja
            </h2>
            <p className="text-sm sm:text-base text-ink-muted dark:text-ink-dark-muted mt-1 max-w-xl">
              Kronologi perjalanan karier dan kontribusi rekayasa perangkat lunak sejak 2020.
            </p>
          </div>
        </div>

        {process.env.linkCv && (
          <a
            href={process.env.linkCv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-subtle group shrink-0 -ml-3.5 sm:ml-0 text-accent dark:text-accent-dark"
          >
            <span>Lihat CV lengkap</span>
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
        )}
      </div>

      <div className="relative">
        {experiences.map((item, index) => {
          const isLast = index === experiences.length - 1
          return (
            <article
              key={`${item.company}-${item.period}-${index}`}
              className="group relative flex items-stretch gap-4 sm:gap-6"
            >
              <div className="flex flex-col items-center shrink-0 w-9" aria-hidden="true">
                <div
                  className={`w-px h-3 ${
                    index === 0 ? 'bg-transparent' : 'bg-paper-border dark:bg-obsidian-border'
                  }`}
                />
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-xl border transition-colors shrink-0 ${
                    item.current
                      ? 'bg-accent text-white border-accent dark:bg-accent-dark dark:text-obsidian dark:border-accent-dark shadow-sm'
                      : 'bg-paper-elevated dark:bg-obsidian-elevated border-[#CFC9BE] dark:border-[#383530] text-ink-muted dark:text-ink-dark-muted group-hover:border-accent dark:group-hover:border-accent-dark group-hover:text-accent dark:group-hover:text-accent-dark'
                  }`}
                >
                  {item.current ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <div
                  className={`w-px grow ${
                    isLast ? 'bg-transparent' : 'bg-paper-border dark:bg-obsidian-border'
                  }`}
                />
              </div>

              <div
                className={`grow min-w-0 pt-1 ${
                  isLast
                    ? 'pb-2'
                    : 'pb-8 sm:pb-10 mb-5 sm:mb-6 border-b border-paper-border dark:border-obsidian-border'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-4 flex flex-col items-start">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-sm text-ink dark:text-ink-dark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.75}
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-3.5 h-3.5 text-accent dark:text-accent-dark shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                        <span>{item.period}</span>
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono bg-accent/10 dark:bg-accent-dark/15 text-accent dark:text-accent-dark border border-accent/30 dark:border-accent-dark/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" aria-hidden="true" />
                          Saat ini
                        </span>
                      )}
                    </div>

                    <div className="mt-2 text-sm text-ink dark:text-ink-dark font-medium">
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent dark:hover:text-accent-dark underline underline-offset-4"
                        >
                          {item.company}
                        </a>
                      ) : (
                        <span>{item.company}</span>
                      )}
                    </div>

                    {(item.location || item.type) && (
                      <p className="mt-1 text-xs text-ink-muted dark:text-ink-dark-muted">
                        {[item.location, item.type].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-8 min-w-0">
                    <h3 className="text-lg sm:text-xl text-ink dark:text-ink-dark tracking-tight">
                      {item.role}
                    </h3>

                    {item.description && (
                      <p className="mt-2 text-sm sm:text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.achievements && item.achievements.length > 0 && (
                      <ul className="mt-4 list-disc pl-4 space-y-2 text-sm text-ink dark:text-ink-dark marker:text-accent dark:marker:text-accent-dark">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="leading-relaxed">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <Badge key={skill} text={skill} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
