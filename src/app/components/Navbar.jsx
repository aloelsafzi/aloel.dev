'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon, ThemeToggle } from "@/app/components"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function AppsDropdown() {
  const pathname = usePathname()
  const isTasbihActive = pathname === '/tasbih'

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          aria-label="Aplikasi dan Tools"
          className={`flex items-center justify-center p-2 rounded-full transition-colors ${
            isTasbihActive
              ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 ring-2 ring-blue-500/20'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
          }`}
        >
          <Icon name="apps" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-2xl bg-white dark:bg-zinc-900 p-2 shadow-xl shadow-zinc-900/10 dark:shadow-black/50 border border-zinc-200/80 dark:border-zinc-800 focus:outline-none z-50">
          <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
            Aplikasi & Alat
          </div>
          <div className="mt-1 space-y-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/tasbih"
                  className={`${
                    active || isTasbihActive
                      ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                      : 'text-zinc-700 dark:text-zinc-300'
                  } group flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-sm transition-colors`}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                    <Icon name="play_circle" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="font-medium text-sm leading-tight">Tasbih Digital</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 leading-tight">Penghitung dzikir</span>
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const Navbar = () => {
  const pathname = usePathname()
  const isPosts = pathname.startsWith('/posts')

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/70 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="group flex items-center gap-2 font-bold text-lg text-zinc-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-semibold">
              A
            </span>
            <span>{process.env.appName}</span>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/70">
              v{process.env.version}
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/posts"
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                isPosts
                  ? 'bg-zinc-900 text-white dark:bg-zinc-800 dark:text-white dark:border dark:border-zinc-700 shadow-xs hover:bg-zinc-800 dark:hover:bg-zinc-700'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
              }`}
            >
              Tulisan
            </Link>

            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1 hidden sm:block" />

            <ThemeToggle />
            <AppsDropdown />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar