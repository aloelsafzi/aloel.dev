import { Badge } from "@/app/components"

const CardPost = ({ data }) => {
  return (
    <article className="group relative p-5 sm:p-6 bg-white/90 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/90 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-2xl shadow-2xs hover:shadow-md hover:shadow-zinc-200/60 dark:hover:shadow-black/50 hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge text={data.date} className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono text-[11px]" />
          <span className="text-xs text-zinc-400 dark:text-zinc-500 hidden sm:inline">·</span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 hidden sm:inline">Artikel</span>
        </div>
        <div className="text-zinc-400 dark:text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>

      <h2 className="mt-3 text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight leading-snug">
        {data.title}
      </h2>

      <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed line-clamp-2">
        {data.description}
      </p>

      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
        <span className="font-medium text-blue-600 dark:text-blue-400 group-hover:underline">Baca selengkapnya</span>
        <span>aloel.dev</span>
      </div>
    </article>
  )
}

export default CardPost