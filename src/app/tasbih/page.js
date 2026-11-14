'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Main, Navbar, Footer } from '@/app/components'
import useTasbih from './hooks/useTasbih'

const PRESETS = [33, 99, 100, 0]

const Tasbih = () => {
  const {
    count,
    target,
    setTarget,
    setQuickTarget,
    soundEnabled,
    setSoundEnabled,
    vibrateEnabled,
    setVibrateEnabled,
    onClickTasbih,
    resetCount,
  } = useTasbih()

  const targetNum = Number(target) || 0
  const isTargetSet = targetNum > 0
  const isReached = isTargetSet && count >= targetNum
  const progressPercent = isTargetSet ? Math.min(100, Math.round((count / targetNum) * 100)) : null

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code !== 'Space') return
      const el = e.target
      const tag = el?.tagName
      if (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        tag === 'BUTTON' ||
        tag === 'A' ||
        el?.isContentEditable
      ) {
        return
      }
      e.preventDefault()
      onClickTasbih()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClickTasbih])

  return (
    <>
      <Navbar />
      <Main className="flex-1">
        <div className="pt-2 sm:pt-4 mb-6">
          <Link href="/" className="btn-subtle group -ml-3.5">
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
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-paper-elevated dark:bg-obsidian-elevated border border-paper-border dark:border-obsidian-border rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-paper-border dark:border-obsidian-border">
              <div>
                <h1 className="text-2xl text-ink dark:text-ink-dark tracking-tight">
                  Tasbih Digital
                </h1>
                <p className="text-sm text-ink-muted dark:text-ink-dark-muted mt-1">
                  Penghitung dzikir dengan target kustom.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setVibrateEnabled(!vibrateEnabled)}
                  aria-pressed={vibrateEnabled}
                  aria-label={vibrateEnabled ? 'Matikan getar' : 'Aktifkan getar'}
                  title={vibrateEnabled ? 'Getar aktif' : 'Getar dimatikan'}
                  className={`flex items-center justify-center w-11 h-11 rounded-xl border text-xs font-mono transition-all duration-200 ease-out active:scale-95 ${
                    vibrateEnabled
                      ? 'bg-accent/10 dark:bg-accent-dark/15 border-accent/30 dark:border-accent-dark/30 text-accent dark:text-accent-dark'
                      : 'bg-paper-muted dark:bg-obsidian-muted border-paper-border dark:border-obsidian-border text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h6"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  aria-pressed={soundEnabled}
                  aria-label={soundEnabled ? 'Matikan suara' : 'Aktifkan suara'}
                  title={soundEnabled ? 'Suara aktif' : 'Suara dimatikan'}
                  className={`flex items-center justify-center w-11 h-11 rounded-xl border transition-all duration-200 ease-out active:scale-95 ${
                    soundEnabled
                      ? 'bg-accent/10 dark:bg-accent-dark/15 border-accent/30 dark:border-accent-dark/30 text-accent dark:text-accent-dark'
                      : 'bg-paper-muted dark:bg-obsidian-muted border-paper-border dark:border-obsidian-border text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-ink-dark'
                  }`}
                >
                  {soundEnabled ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-3.75l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs font-mono text-ink-muted dark:text-ink-dark-muted mb-2">
                <span>Target: {isTargetSet ? targetNum : 'Bebas'}</span>
                {isTargetSet && (
                  <span
                    aria-live="polite"
                    className={
                      isReached
                        ? 'text-[#047857] dark:text-[#34D399] font-semibold'
                        : ''
                    }
                  >
                    {isReached ? 'Target tercapai' : `${progressPercent}%`}
                  </span>
                )}
              </div>
              {isTargetSet && (
                <div
                  role="progressbar"
                  aria-valuenow={Math.min(count, targetNum)}
                  aria-valuemin={0}
                  aria-valuemax={targetNum}
                  aria-label="Progres hitungan dzikir"
                  className="w-full bg-paper-muted dark:bg-obsidian-muted rounded-full h-2 overflow-hidden"
                >
                  <div
                    className={`h-full transition-all duration-200 rounded-full ${
                      isReached
                        ? 'bg-[#047857] dark:bg-[#34D399]'
                        : 'bg-accent dark:bg-accent-dark'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
            </div>

            <div className="my-8 flex flex-col items-center justify-center">
              <div
                aria-live="polite"
                className={`text-7xl sm:text-8xl font-mono font-semibold tabular-nums tracking-tighter select-none ${
                  isReached
                    ? 'text-[#047857] dark:text-[#34D399]'
                    : 'text-ink dark:text-ink-dark'
                }`}
              >
                {count}
              </div>
              <span className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted mt-2 uppercase tracking-wider">
                Hitungan
              </span>
            </div>

            <div className="flex justify-center mb-8">
              <button
                type="button"
                onClick={onClickTasbih}
                aria-label="Tambah hitungan"
                className={`w-44 h-44 rounded-full flex flex-col items-center justify-center select-none transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.96] ring-8 ${
                  isReached
                    ? 'bg-[#047857] hover:bg-[#065F46] text-white ring-[#047857]/12 shadow-lg shadow-[#047857]/20 dark:bg-[#34D399] dark:hover:bg-[#6EE7B7] dark:text-obsidian dark:ring-[#34D399]/15 dark:shadow-[#34D399]/20'
                    : 'bg-accent hover:bg-accent-hover text-white ring-accent/12 shadow-lg shadow-accent/20 dark:bg-accent-dark dark:hover:bg-accent-dark-hover dark:text-obsidian dark:ring-accent-dark/15 dark:shadow-accent-dark/20'
                }`}
              >
                <span className="font-mono text-sm font-semibold tracking-widest uppercase">
                  TEKAN
                </span>
                <span className="mt-1 text-xs opacity-90 hidden sm:inline">
                  atau tekan Spasi
                </span>
              </button>
            </div>

            <div className="space-y-4 pt-6 border-t border-paper-border dark:border-obsidian-border">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono text-ink-muted dark:text-ink-dark-muted uppercase tracking-wider">
                  Preset Target
                </span>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="custom-target"
                    className="text-xs text-ink-muted dark:text-ink-dark-muted"
                  >
                    Kustom:
                  </label>
                  <input
                    id="custom-target"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    value={target === 0 ? '' : target}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder="0"
                    className="w-20 min-h-[44px] px-2.5 py-2 text-sm text-center font-mono rounded-xl border border-[#CFC9BE] dark:border-[#383530] bg-paper dark:bg-obsidian text-ink dark:text-ink-dark transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {PRESETS.map((p) => {
                  const isSelected = targetNum === p
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setQuickTarget(p)}
                      aria-pressed={isSelected}
                      className={`min-h-[44px] py-2 text-xs font-mono rounded-xl border transition-all duration-200 ease-out active:scale-[0.98] ${
                        isSelected
                          ? 'bg-accent dark:bg-accent-dark border-accent dark:border-accent-dark text-white dark:text-obsidian font-semibold shadow-sm'
                          : 'bg-paper dark:bg-obsidian-muted hover:bg-paper-muted dark:hover:bg-[#2E2C28] border-[#CFC9BE] dark:border-[#383530] text-ink dark:text-ink-dark'
                      }`}
                    >
                      {p === 0 ? 'Bebas' : p}
                    </button>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={resetCount}
                className="btn-secondary w-full"
              >
                Reset Hitungan
              </button>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default Tasbih
