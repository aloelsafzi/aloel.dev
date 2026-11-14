'use client'

import { useEffect } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import DateFormatter from '@/app/lib/dateFormatter'
import {
  Main,
  Navbar,
  Footer,
} from '@/app/components'

const fetcher = async (url) => {
  const res = await fetch(url)
  const payload = await res.json().catch(() => ({}))
  if (!res.ok) {
    const error = new Error(payload.error || 'Gagal memuat tulisan')
    error.status = res.status
    throw error
  }
  return payload
}

function PostSkeleton() {
  return (
    <div className="animate-pulse space-y-6 max-w-3xl py-6" aria-busy="true" aria-label="Memuat tulisan">
      <div className="h-4 w-32 bg-paper-muted dark:bg-obsidian-muted rounded" />
      <div className="h-10 w-3/4 bg-paper-muted dark:bg-obsidian-muted rounded" />
      <div className="h-4 w-48 bg-paper-muted dark:bg-obsidian-muted rounded" />
      <div className="h-px bg-paper-border dark:bg-obsidian-border my-6" />
      <div className="space-y-3">
        <div className="h-4 bg-paper-muted dark:bg-obsidian-muted rounded w-full" />
        <div className="h-4 bg-paper-muted dark:bg-obsidian-muted rounded w-5/6" />
        <div className="h-4 bg-paper-muted dark:bg-obsidian-muted rounded w-4/6" />
      </div>
      <div className="h-32 bg-paper-muted dark:bg-obsidian-muted rounded-lg" />
    </div>
  )
}

function PostError({ error, onRetry }) {
  const isNotFound = error?.status === 404

  return (
    <div
      role="alert"
      className="max-w-lg my-12 p-6 sm:p-8 bg-paper-elevated dark:bg-obsidian-elevated border border-paper-border dark:border-obsidian-border rounded-lg"
    >
      <p className="font-mono text-xs text-accent dark:text-accent-dark mb-2">
        {isNotFound ? '404' : 'KESALAHAN'}
      </p>
      <h1 className="text-xl sm:text-2xl text-ink dark:text-ink-dark mb-2">
        {isNotFound ? 'Tulisan Tidak Ditemukan' : 'Gagal Memuat Tulisan'}
      </h1>
      <p className="text-sm sm:text-base text-ink-muted dark:text-ink-dark-muted mb-6 leading-relaxed">
        {isNotFound
          ? 'Artikel yang Anda cari tidak tersedia atau alamatnya berubah.'
          : 'Terjadi gangguan jaringan saat mengambil isi artikel. Coba muat ulang beberapa saat lagi.'}
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {!isNotFound && (
          <button
            type="button"
            onClick={onRetry}
            className="btn-primary"
          >
            Coba Lagi
          </button>
        )}
        <Link
          href="/posts"
          className="btn-secondary"
        >
          Kembali ke Daftar Tulisan
        </Link>
      </div>
    </div>
  )
}

export default function Post({ params: { slug } }) {
  const { data, error, isLoading, mutate } = useSWR(`/api/posts/${slug}`, fetcher)

  useEffect(() => {
    if (data?.title) {
      document.title = `${data.title} | ${process.env.appName}`
    } else if (error) {
      document.title = `Tulisan Tidak Ditemukan | ${process.env.appName}`
    }
  }, [data, error])

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        <div className="pt-2 sm:pt-4 mb-6">
          <Link
            href="/posts"
            className="btn-subtle group -ml-3.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4 transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Semua Tulisan</span>
          </Link>
        </div>

        {isLoading && <PostSkeleton />}
        {error && <PostError error={error} onRetry={() => mutate()} />}

        {data && (
          <article className="max-w-3xl">
            <header className="pb-8 border-b border-paper-border dark:border-obsidian-border">
              <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
                <time dateTime={data.date}>{DateFormatter(data.date)}</time>
                <span aria-hidden="true">·</span>
                <span>Samsul Fauzi</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-ink dark:text-ink-dark tracking-tight leading-tight">
                {data.title}
              </h1>

              {data.description && (
                <p className="mt-4 text-base sm:text-lg text-ink-muted dark:text-ink-dark-muted leading-relaxed">
                  {data.description}
                </p>
              )}
            </header>

            <div className="prose-article py-8">
              <MDXRemote {...data.content} />
            </div>

            <footer className="mt-10 pt-8 border-t border-paper-border dark:border-obsidian-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-ink-muted dark:text-ink-dark-muted">
                Diskusi atau masukan dapat dikirim lewat LinkedIn atau GitHub.
              </p>
              <Link
                href="/posts"
                className="btn-secondary"
              >
                Lihat Tulisan Lainnya
              </Link>
            </footer>
          </article>
        )}
      </Main>
      <Footer />
    </>
  )
}
