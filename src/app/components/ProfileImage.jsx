import Image from 'next/image'

const ProfileImage = () => {
  return (
    <figure className="flex flex-col items-center lg:items-end">
      <div className="relative p-1.5 rounded-full border border-paper-border dark:border-obsidian-border bg-paper-elevated dark:bg-obsidian-elevated shadow-sm">
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden bg-paper-muted dark:bg-obsidian-muted ring-1 ring-paper-border dark:ring-obsidian-border">
          <Image
            src="/aloel.jpg"
            alt="Foto Samsul Fauzi"
            sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
            quality={85}
            priority
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
      <figcaption className="mt-3 flex items-center gap-2 text-xs font-mono text-ink-muted dark:text-ink-dark-muted">
        <span>Samsul Fauzi</span>
        <span aria-hidden="true">·</span>
        <span>Jakarta, ID</span>
      </figcaption>
    </figure>
  )
}

export default ProfileImage
