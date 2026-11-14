import { useCallback, useEffect, useRef } from 'react'

const useAudio = (url) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const audioInstance = new Audio(url)
    audioRef.current = audioInstance

    return () => {
      audioInstance.pause()
      audioRef.current = null
    }
  }, [url])

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    audio.play().catch(() => {})
  }, [])

  return [false, play]
}

export default useAudio
