import Image from 'next/image'

const ProfileImage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Ambient background blur glow */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500/20 dark:from-blue-500/30 via-indigo-500/20 dark:via-indigo-500/30 to-teal-500/20 dark:to-teal-500/30 blur-md transition-all group-hover:blur-lg -z-10" />

        {/* Avatar container */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white dark:ring-zinc-900 shadow-xl shadow-zinc-200/80 dark:shadow-black/60 bg-zinc-100 dark:bg-zinc-800">
          <Image
            src="/aloel.jpg"
            alt="Samsul Fauzi"
            sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
            quality={85}
            priority
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Status indicator */}
      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/90 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-medium shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Open for work & collaboration</span>
      </div>
    </div>
  )
}

export default ProfileImage