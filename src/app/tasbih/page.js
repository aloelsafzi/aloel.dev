"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  Main,
  Navbar,
  Footer
} from "@/app/components"
import useTasbih from "./hooks/useTasbih"

const PRESETS = [33, 99, 100, 0]

const Tasbih = () => {
  const {
    count,
    target,
    setTarget,
    setQuickTarget,
    soundEnabled,
    setSoundEnabled,
    onClickTasbih,
    onClickreset
  } = useTasbih()

  const targetNum = Number(target) || 0
  const isTargetSet = targetNum > 0
  const isReached = isTargetSet && count >= targetNum
  const progressPercent = isTargetSet ? Math.min(100, Math.round((count / targetNum) * 100)) : null

  // Keyboard shortcut: Spacebar to count
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault()
        onClickTasbih()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClickTasbih])

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        {/* Navigation & Header */}
        <div className="pt-2 sm:pt-4 mb-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <span className="p-1 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 shadow-2xs transition-all group-hover:-translate-x-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </span>
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Tasbih Card Container */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800/90 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-black/50 transition-colors">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
              <div>
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">Tasbih Digital</h1>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Penghitung dzikir sederhana & responsif</p>
              </div>

              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-xl border text-sm font-medium transition-colors ${
                  soundEnabled
                    ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800 text-blue-600 dark:text-blue-400'
                    : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500'
                }`}
                title={soundEnabled ? 'Suara aktif' : 'Suara dimatikan'}
                aria-label={soundEnabled ? 'Matikan suara' : 'Aktifkan suara'}
              >
                {soundEnabled ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-3.75l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Target & Progress Bar */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                <span>Target: {isTargetSet ? targetNum : 'Bebas'}</span>
                {isTargetSet && (
                  <span className={isReached ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
                    {isReached ? 'Target Tercapai! 🎉' : `${progressPercent}%`}
                  </span>
                )}
              </div>
              {isTargetSet && (
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-200 rounded-full ${
                      isReached ? 'bg-emerald-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
            </div>

            {/* Big Count Display */}
            <div className="my-8 flex flex-col items-center justify-center">
              <div
                className={`text-7xl sm:text-8xl font-black font-mono tracking-tighter select-none transition-transform duration-100 ${
                  isReached ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-900 dark:text-white'
                }`}
              >
                {count}
              </div>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 uppercase tracking-wider font-semibold">
                Hitungan
              </span>
            </div>

            {/* Main Tactile Tap Button */}
            <div className="flex justify-center mb-8">
              <button
                type="button"
                onClick={onClickTasbih}
                aria-label="Tambah hitungan"
                className={`relative group w-40 h-40 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center select-none cursor-pointer transition-all duration-150 active:scale-95 shadow-xl ${
                  isReached
                    ? 'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-emerald-500/25 hover:from-emerald-400 hover:to-emerald-500 ring-8 ring-emerald-50 dark:ring-emerald-950/50'
                    : 'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-blue-500/25 hover:from-blue-400 hover:to-blue-500 ring-8 ring-blue-50 dark:ring-blue-950/50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 transition-transform group-active:scale-90">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
                <span className="mt-1 text-xs font-bold tracking-widest uppercase">
                  TEKAN
                </span>
                <span className="text-[10px] opacity-75 hidden sm:inline">(Spasi)</span>
              </button>
            </div>

            {/* Quick Target Presets */}
            <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  Preset Target
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">Kustom:</span>
                  <input
                    type="number"
                    min="0"
                    value={target || ''}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder="0"
                    aria-label="Target kustom"
                    className="w-16 px-2 py-1 text-xs text-center font-mono rounded-lg border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {PRESETS.map((p) => {
                  const isSelected = targetNum === p
                  return (
                    <button
                      key={p}
                      onClick={() => setQuickTarget(p)}
                      className={`py-1.5 text-xs font-medium rounded-xl border transition-colors ${
                        isSelected
                          ? 'bg-blue-600 dark:bg-blue-600 border-blue-600 dark:border-blue-600 text-white dark:text-white shadow-xs'
                          : 'bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-200/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      {p === 0 ? 'Bebas' : p}
                    </button>
                  )
                })}
              </div>

              {/* Reset Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClickreset}
                  className="w-full py-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-red-50 dark:hover:bg-red-950/40 hover:border-red-200 dark:hover:border-red-900 hover:text-red-600 dark:hover:text-red-400 text-zinc-600 dark:text-zinc-400 text-xs font-semibold transition-all shadow-2xs active:scale-98 flex items-center justify-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <span>Reset Hitungan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default Tasbih