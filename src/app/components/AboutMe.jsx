import Link from "next/link"

const skills = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Node.js', category: 'backend' },
  { name: 'ExpressJs', category: 'backend' },
  { name: 'NestJs', category: 'backend' },
  { name: 'Mysql', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'NoSQL', category: 'database' },
  { name: 'Linux & Servers', category: 'devops' },
  { name: 'Gitlab CI/CD', category: 'devops' },
  { name: 'Docker', category: 'tools' },
  { name: 'Docker Compose', category: 'tools' },
  { name: 'Git', category: 'tools' },
]

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
      {/* Role Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/60 mb-3">
        <span>Software Engineer</span>
        <span className="text-blue-300 dark:text-blue-700">·</span>
        <span>Web & Mobile</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
        Halo, saya <span className="text-blue-600 dark:text-blue-400">Samsul Fauzi</span>
      </h1>

      <p className="mt-2 text-base sm:text-lg font-medium text-zinc-700 dark:text-zinc-300">
        Membangun aplikasi digital yang cepat, tangguh, dan mudah digunakan.
      </p>

      {/* Bio Description */}
      <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
        Saya adalah seorang Software Engineer yang berfokus pada pengembangan aplikasi web dan mobile end-to-end. Memiliki pengalaman dalam merancang antarmuka interaktif, mengelola database SQL/NoSQL, serta mengelola server dan sistem jaringan agar aplikasi berjalan stabil dan optimal.
      </p>

      {/* Skills Badges */}
      <div className="mt-6 w-full">
        <h2 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2.5">
          Teknologi & Keahlian
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-colors"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <a
          href={process.env.linkCv}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white font-medium text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
        >
          <span>Unduh Resume (CV)</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>

        <Link
          href="/posts"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 hover:text-zinc-900 border border-zinc-200/90 hover:border-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-200 dark:hover:text-white dark:border-zinc-800 dark:hover:border-zinc-700 font-medium text-sm shadow-2xs transition-all"
        >
          <span>Baca Tulisan</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default AboutMe
