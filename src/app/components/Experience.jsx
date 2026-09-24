const defaultExperiences = [
  {
    role: "Full Stack Developer",
    company: "PT Pegadaian",
    companyUrl: "",
    location: "Jakarta, Indonesia",
    period: "2025 — Sekarang",
    type: "Contract",
    current: true,
    description:
      "Bertanggung jawab atas pemeliharaan dan pengembangan fitur baru pada platform web internal perusahaan guna mendukung efisiensi operasional bisnis.",
    achievements: [
      "Memigrasi sistem aplikasi E-Office dari arsitektur monolitik ke microservices untuk meningkatkan skalabilitas dan kemudahan pemeliharaan.",
      "Mengintegrasikan berbagai layanan (microservices) dan API internal untuk alur pertukaran data yang aman dan terpadu.",
      "Meningkatkan kualitas antarmuka dan pengalaman pengguna (UI/UX) pada aplikasi E-Office agar lebih responsif dan intuitif.",
    ],
    skills: ["React", "Node.js", "Django", "Tailwind CSS", "PostgreSQL", "GitLab", "Docker", "VueJs", "NestJs"],
  },
  {
    role: "Junior DevOps Engineer",
    company: "PT Wahana Prestasi Logistik",
    companyUrl: "",
    location: "Tangerang Selatan, Indonesia",
    period: "2023 — 2024",
    type: "Contract",
    current: false,
    description:
      "Bertanggung jawab atas modernisasi infrastruktur aplikasi melalui kontainerisasi Docker, pengelolaan server dan repositori, serta otomasi deployment dengan GitLab CI/CD.",
    achievements: [
      "Menginisiasi dan mengonfigurasi pipeline GitLab CI/CD menggunakan GitLab Runner untuk mengotomasi proses build, pengujian, dan deployment.",
      "Mengimplementasikan kontainerisasi (Docker & Docker Compose) pada aplikasi internal serta mengelola image pada private registry.",
      "Melakukan sentralisasi dan manajemen repositori source code seluruh aplikasi internal di GitLab.",
      "Mempersiapkan dan mengonfigurasi server DRC (Disaster Recovery Center) untuk menjaga ketersediaan layanan dan kesiapan pemulihan sistem.",
    ],
    skills: ["Linux", "Docker", "Docker Compose", "GitLab CI/CD", "Git", "Nginx", "Shell Script", "CentOS", "Ubuntu"],
  },
  {
    role: "Programmer",
    company: "PT Wahana Prestasi Logistik",
    companyUrl: "",
    location: "Tangerang Selatan, Indonesia",
    period: "2022 — 2023",
    type: "Contract",
    current: false,
    description:
      "Bertanggung jawab atas perancangan antarmuka pengguna, pengembangan backend, serta integrasi API pihak ketiga untuk mendukung operasional logistik pengiriman.",
    achievements: [
      "Mengintegrasikan sistem logistik dengan marketplace (Tokopedia dan Lazada) untuk sinkronisasi pesanan dan pengiriman.",
      "Membangun API Tracking paket real-time yang digunakan mitra e-commerce untuk memantau status pengiriman secara akurat.",
      "Mengembangkan modul web Customer Center guna mempermudah pengelolaan pengaduan dan permintaan layanan pelanggan.",
    ],
    skills: ["Vue.js", "Quasar", "JavaScript", "Node.js", "MySQL", "Docker", "Nginx", "Perl", "Linux", "Git"],
  },
  {
    role: "Software Developer",
    company: "PT Bank SMBC Indonesia",
    companyUrl: "",
    location: "Jakarta, Indonesia",
    period: "2020 — 2022",
    type: "Contract",
    current: false,
    description:
      "Bertanggung jawab atas modernisasi aplikasi operasional perbankan serta riset dan pengembangan prototipe solusi perbankan digital.",
    achievements: [
      "Memigrasi sistem aplikasi legacy dari Lotus Notes ke platform web modern berbasis OutSystems guna mempercepat proses bisnis.",
      "Mengembangkan prototipe aplikasi pengajuan pinjaman digital dengan memanfaatkan WebRTC untuk kebutuhan video KYC (Know Your Customer).",
      "Mengimplementasikan fitur verifikasi data dan tanda tangan digital secara real-time untuk mempercepat proses persetujuan nasabah.",
    ],
    skills: ["JavaScript", "Node.js", "Express.js", "OutSystems", "WebRTC", "GitLab", "Git"],
  },
]

const Experience = ({ experiences = defaultExperiences, className = "" }) => {
  return (
    <section
      id="experience"
      className={`mt-8 border-t border-zinc-200/70 dark:border-zinc-800/80 pt-12 ${className}`}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/60 mb-2">
            <span>Karier</span>
            <span className="text-blue-300 dark:text-blue-700">·</span>
            <span>Jejak Langkah</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Pengalaman Kerja
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-xl">
            Perjalanan karier profesional dan kontribusi saya dalam merancang serta mengembangkan produk digital.
          </p>
        </div>

        {process.env.linkCv && (
          <a
            href={process.env.linkCv}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-center inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors shrink-0"
          >
            <span>Unduh Resume (CV)</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
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

      {/* Timeline List */}
      <div className="relative">
        {experiences.map((item, index) => (
          <div key={index} className="relative flex items-stretch gap-4 sm:gap-6 group">
            {/* Left Timeline Rail (Line + Dot) */}
            <div className="flex flex-col items-center shrink-0 w-4 select-none" aria-hidden="true">
              {/* Line above dot: visible for all except first item */}
              <div
                className={`w-0.5 h-6 sm:h-7 transition-colors ${index === 0 ? "bg-transparent" : "bg-zinc-200 dark:bg-zinc-800"
                  }`}
              />

              {/* Indicator Dot */}
              <div className="relative flex items-center justify-center shrink-0 z-10">
                <div
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 bg-white dark:bg-zinc-900 transition-colors flex items-center justify-center ${item.current
                    ? "border-blue-600 dark:border-blue-400 ring-4 ring-blue-100 dark:ring-blue-950/80"
                    : "border-zinc-300 dark:border-zinc-700 group-hover:border-blue-500"
                    }`}
                >
                  {item.current ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-blue-500 transition-colors" />
                  )}
                </div>
              </div>

              {/* Line below dot: fills to bottom of item, visible for all except last item */}
              <div
                className={`w-0.5 grow transition-colors ${index === experiences.length - 1 ? "bg-transparent" : "bg-zinc-200 dark:bg-zinc-800"
                  }`}
              />
            </div>

            {/* Experience Card Wrapper with bottom spacing */}
            <div className={`grow min-w-0 ${index === experiences.length - 1 ? "pb-0" : "pb-8 sm:pb-10"}`}>
              <article className="p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/90 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-2xl shadow-2xs hover:shadow-md hover:shadow-zinc-200/60 dark:hover:shadow-black/50 hover:-translate-y-0.5 transition-all duration-200">
                {/* Header: Role, Company, Period & Type */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                        >
                          {item.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">
                          {item.company}
                        </span>
                      )}

                      {item.location && (
                        <>
                          <span className="text-zinc-300 dark:text-zinc-700">·</span>
                          <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Period & Employment Type Badges */}
                  <div className="flex sm:flex-col sm:items-end items-center gap-1.5 shrink-0 mt-1 sm:mt-0">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono ${item.current
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/60"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/70"
                        }`}
                    >
                      {item.period}
                    </span>
                    {item.type && (
                      <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
                        {item.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Key Achievements / Responsibilities */}
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="mt-3.5 space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-blue-500 shrink-0 mt-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack Chips */}
                {item.skills && item.skills.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 mr-1 uppercase tracking-wider">
                      Tech:
                    </span>
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
