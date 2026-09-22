import Link from 'next/link'
import { getAllPosts } from '@/app/lib/mdx'
import {
  Main,
  Navbar,
  CardPost,
  Badge,
  Footer
} from "@/app/components"

export const metadata = {
  title: `Tulisan - ${process.env.appName}`,
  description: 'Daftar artikel, tutorial, dan catatan software engineering oleh Samsul Fauzi.',
}

export default async function Posts() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        {/* Page Header */}
        <div className="pt-4 sm:pt-8 pb-8 border-b border-zinc-200/70 dark:border-zinc-800/80 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              Blog & Tulisan
            </span>
            <Badge
              text={`${posts.length} Artikel`}
              className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono text-xs"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Semua Tulisan
          </h1>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Kumpulan artikel, catatan teknis, tips ngoding, dan dokumentasi eksplorasi seputar software development.
          </p>
        </div>

        {/* Posts List */}
        {posts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {posts.map((item, i) => {
              const { data } = item
              return (
                <Link href={`/posts/${data.slug}`} key={data.slug || i} className="block">
                  <CardPost data={data} />
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="py-16 text-center bg-white dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-8">
            <p className="text-zinc-500 dark:text-zinc-400">Belum ada tulisan yang dipublikasikan.</p>
          </div>
        )}
      </Main>
      <Footer />
    </>
  )
}