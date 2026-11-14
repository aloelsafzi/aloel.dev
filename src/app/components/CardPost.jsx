import DateFormatter from '@/app/lib/dateFormatter'

const CardPost = ({ data, headingAs = 'h3', className = '' }) => {
  const formattedDate = DateFormatter(data.date)
  const Heading = headingAs

  return (
    <article className={`group py-6 sm:py-7 flex flex-col justify-between gap-2 ${className}`}>
      <div className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
        <time dateTime={data.date}>{formattedDate}</time>
      </div>

      <Heading className="text-lg sm:text-xl text-ink dark:text-ink-dark group-hover:text-accent dark:group-hover:text-accent-dark group-hover:underline underline-offset-4 transition-colors tracking-tight leading-snug">
        {data.title}
      </Heading>

      {data.description && (
        <p className="mt-1 text-sm sm:text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed line-clamp-2">
          {data.description}
        </p>
      )}
    </article>
  )
}

export default CardPost
