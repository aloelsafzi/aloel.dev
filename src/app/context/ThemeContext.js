'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  mounted: false,
  toggleTheme: () => {},
  setTheme: () => {},
})

function applyDocumentTheme(nextTheme) {
  if (typeof document === 'undefined') return
  if (nextTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const savedTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
      setThemeState(savedTheme)
      applyDocumentTheme(savedTheme)
    } catch {
      setThemeState('dark')
      applyDocumentTheme('dark')
    }
  }, [])

  const setTheme = useCallback((newTheme) => {
    const resolved = newTheme === 'light' ? 'light' : 'dark'
    setThemeState(resolved)
    try {
      localStorage.setItem('theme', resolved)
    } catch {}
    applyDocumentTheme(resolved)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', nextTheme)
      } catch {}
      applyDocumentTheme(nextTheme)
      return nextTheme
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
