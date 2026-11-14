import Link from 'next/link'
import { getAllPosts } from '@/app/lib/mdx'
import {
  Main,
  Navbar,
  CardPost,
  Footer,
} from '@/app/components'

export const metadata = {
  title: 'Tulisan',
  description: 'Daftar artikel, tutorial, dan catatan software engineering oleh Samsul Fauzi.',
}

export default async function Posts() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        <div className="pt-2 sm:pt-4 pb-8 border-b border-paper-border dark:border-obsidian-border">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h1 className="text-3xl sm:text-4xl tracking-tight text-ink dark:text-ink-dark">
              Semua Tulisan
            </h1>
            <span className="font-mono text-xs text-ink-muted dark:text-ink-dark-muted">
              {posts.length} artikel
            </span>
          </div>
          <p className="mt-3 text-base text-ink-muted dark:text-ink-dark-muted max-w-2xl leading-relaxed">
            Kumpulan catatan teknis, tutorial ringkas, dan dokumentasi eksplorasi pengembangan perangkat lunak.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="divide-y divide-paper-border dark:divide-obsidian-border border-b border-paper-border dark:border-obsidian-border">
            {posts.map((item, i) => {
              const { data } = item
              return (
                <Link href={`/posts/${data.slug}`} key={data.slug || i} className="block">
                  <CardPost data={data} headingAs="h2" />
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="py-12">
            <p className="text-ink-muted dark:text-ink-dark-muted">
              Belum ada tulisan yang dipublikasikan.
            </p>
          </div>
        )}
      </Main>
      <Footer />
    </>
  )
}
