import Link from "next/link"
import { getAllPosts } from "@/app/lib/mdx"
import {
  AboutMe,
  Main,
  Navbar,
  ProfileImage,
  SocialMedia,
  Experience,
  CardPost,
  Footer
} from "@/app/components"

export default function Home() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 2)

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-14 pt-4 sm:pt-8 pb-12">
          <div className="flex flex-col items-center shrink-0">
            <ProfileImage />
            <SocialMedia />
          </div>
          <AboutMe />
        </section>

        {/* Work Experience Section */}
        <Experience />

        {/* Recent Posts Section */}
        {recentPosts.length > 0 && (
          <section className="mt-8 border-t border-zinc-200/70 dark:border-zinc-800/80 pt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  Tulisan Terbaru
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Catatan teknis, tutorial, dan dokumentasi eksplorasi pemrograman.
                </p>
              </div>
              <Link
                href="/posts"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>Lihat Semua</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {recentPosts.map((item, i) => (
                <Link href={`/posts/${item.data.slug}`} key={i} className="block">
                  <CardPost data={item.data} />
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center sm:hidden">
              <Link
                href="/posts"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Lihat Semua Tulisan →
              </Link>
            </div>
          </section>
        )}
      </Main>
      <Footer />
    </>
  )
}
