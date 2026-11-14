import Link from 'next/link'
import { getAllPosts } from '@/app/lib/mdx'
import {
  AboutMe,
  Main,
  Navbar,
  ProfileImage,
  SocialMedia,
  Experience,
  CardPost,
  Footer,
  CodingCat,
  KittenPlayingBall,
} from '@/app/components'

const CAPABILITY_GROUPS = [
  {
    area: 'Frontend',
    subtitle: 'Antarmuka web interaktif & responsif',
    items: ['React', 'Next.js', 'Vue.js', 'Quasar', 'Tailwind CSS'],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.75}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
        />
      </svg>
    ),
  },
  {
    area: 'Backend & Bahasa',
    subtitle: 'Layanan backend, logika bisnis & REST API',
    items: ['JavaScript', 'Node.js', 'Express.js', 'NestJS', 'Django'],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.75}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    area: 'Database',
    subtitle: 'Pemodelan skema relasional & penyimpanan data',
    items: ['PostgreSQL', 'MySQL', 'NoSQL'],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.75}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    area: 'Server & Otomasi',
    subtitle: 'Kontainerisasi, CI/CD pipeline & manajemen Linux',
    items: ['Linux', 'Docker & Docker Compose', 'GitLab CI/CD', 'Nginx', 'Git'],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.75}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
  },
]

export default function Home() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 2)

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        <section className="relative pt-2 sm:pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-6">
              <AboutMe />
              <div className="pt-2 w-full flex justify-center lg:justify-start">
                <SocialMedia />
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center lg:items-end justify-between self-stretch">
              <ProfileImage />
              <div className="hidden lg:flex justify-end w-full max-w-[280px] mt-16 xl:mt-24 -mb-px">
                <CodingCat />
              </div>
            </div>
          </div>

          <div className="block lg:hidden w-full max-w-[260px] mx-auto mt-14 sm:mt-16 -mb-px flex justify-center">
            <CodingCat />
          </div>

          <div className="w-full lg:max-w-[55%] -mb-px mt-6 sm:mt-8 overflow-hidden pointer-events-none relative z-10">
            <KittenPlayingBall />
          </div>
        </section>

        <section
          aria-labelledby="skills-heading"
          className="border-t border-paper-border dark:border-obsidian-border pt-12 sm:pt-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2
                id="skills-heading"
                className="text-2xl sm:text-3xl tracking-tight text-ink dark:text-ink-dark"
              >
                Teknologi & Keahlian
              </h2>
              <p className="text-sm sm:text-base text-ink-muted dark:text-ink-dark-muted mt-1 max-w-xl">
                Kumpulan bahasa pemrograman, kerangka kerja, basis data, dan alat otomasi yang rutin saya gunakan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {CAPABILITY_GROUPS.map((group) => (
              <div
                key={group.area}
                className="group p-5 sm:p-6 rounded-2xl border border-paper-border dark:border-obsidian-border bg-paper-elevated/50 dark:bg-obsidian-elevated/50 hover:bg-paper-elevated dark:hover:bg-obsidian-elevated transition-colors duration-200 flex flex-col justify-between gap-5"
              >
                <div>
                  <div className="flex items-start gap-3">
                    <div
                      aria-hidden="true"
                      className="flex items-center justify-center w-9 h-9 rounded-xl bg-accent/10 dark:bg-accent-dark/15 border border-accent/25 dark:border-accent-dark/25 text-accent dark:text-accent-dark shrink-0 mt-0.5"
                    >
                      {group.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-medium tracking-tight text-ink dark:text-ink-dark">
                        {group.area}
                      </h3>
                      <p className="text-xs text-ink-muted dark:text-ink-dark-muted mt-0.5 leading-relaxed">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1 border-t border-paper-border/60 dark:border-obsidian-border/60">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono text-ink dark:text-ink-dark bg-paper dark:bg-obsidian border border-paper-border dark:border-obsidian-border transition-colors hover:border-accent/40 dark:hover:border-accent-dark/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Experience />

        {recentPosts.length > 0 && (
          <section
            aria-labelledby="recent-posts-heading"
            className="mt-16 sm:mt-20 border-t border-paper-border dark:border-obsidian-border pt-12 sm:pt-16"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <h2
                  id="recent-posts-heading"
                  className="text-2xl sm:text-3xl tracking-tight text-ink dark:text-ink-dark"
                >
                  Tulisan Terbaru
                </h2>
                <p className="text-sm sm:text-base text-ink-muted dark:text-ink-dark-muted mt-1.5">
                  Catatan teknis, tutorial singkat, dan dokumentasi kerja.
                </p>
              </div>
              <Link
                href="/posts"
                className="btn-subtle shrink-0 -ml-3.5 sm:ml-0 text-accent dark:text-accent-dark"
              >
                Lihat semua tulisan
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-paper-border dark:divide-obsidian-border border-y border-paper-border dark:border-obsidian-border">
              {recentPosts.map((item, i) => (
                <Link
                  href={`/posts/${item.data.slug}`}
                  key={item.data.slug || i}
                  className={`block ${i === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                >
                  <CardPost data={item.data} />
                </Link>
              ))}
            </div>
          </section>
        )}
      </Main>
      <Footer />
    </>
  )
}
