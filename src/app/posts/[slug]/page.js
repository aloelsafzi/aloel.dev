"use client"

import useSWR from 'swr'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import {
  Main,
  Navbar,
  Badge,
  Footer
} from "@/app/components"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function PostSkeleton() {
  return (
    <div className="animate-pulse space-y-6 max-w-3xl mx-auto py-8">
      <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
      <div className="h-10 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
      <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded" />
      <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
      <div className="space-y-3">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/6" />
      </div>
      <div className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded-2xl" />
    </div>
  )
}

function PostError() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white dark:bg-zinc-900 border border-red-100 dark:border-red-950/50 rounded-2xl shadow-sm text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-50 dark:bg-red-950/50 text-red-500 dark:text-red-400 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Gagal Memuat Tulisan</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Artikel yang kamu cari mungkin tidak ditemukan atau terjadi kesalahan jaringan.</p>
      <Link
        href="/posts"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white dark:border dark:border-zinc-700 text-sm font-medium transition-colors"
      >
        ← Kembali ke Daftar Tulisan
      </Link>
    </div>
  )
}

export default function Post({ params: { slug } }) {
  const { data, error, isLoading } = useSWR(`/api/posts/${slug}`, fetcher)

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        {/* Navigation Breadcrumb */}
        <div className="pt-2 sm:pt-4 mb-6">
          <Link
            href="/posts"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <span className="p-1 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 shadow-2xs transition-all group-hover:-translate-x-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </span>
            <span>Kembali ke Semua Tulisan</span>
          </Link>
        </div>

        {isLoading && <PostSkeleton />}
        {error && <PostError />}

        {data && (
          <article className="max-w-3xl mx-auto">
            {/* Article Header */}
            <header className="pb-8 border-b border-zinc-200/70 dark:border-zinc-800/80">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <Badge text={data.date} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs" />
                <span className="text-zinc-300 dark:text-zinc-700">·</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Oleh Samsul Fauzi</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
                {data.title}
              </h1>

              {data.description && (
                <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {data.description}
                </p>
              )}
            </header>

            {/* Article Body */}
            <div className="prose-article py-8">
              <MDXRemote {...data.content} />
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t border-zinc-200/70 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Terima kasih sudah membaca!</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Ada saran atau diskusi? Hubungi lewat LinkedIn atau GitHub.</p>
              </div>
              <Link
                href="/posts"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 hover:text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200 dark:hover:text-white border border-transparent dark:border-zinc-700 text-sm font-medium transition-colors"
              >
                <span>Semua Tulisan</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </footer>
          </article>
        )}
      </Main>
      <Footer />
    </>
  )
}