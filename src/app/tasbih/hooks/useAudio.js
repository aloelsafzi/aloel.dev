import { useState, useEffect } from 'react'

const useAudio = (url) => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (audio) {
      audio.currentTime = 0
      audio.play().catch(() => {})
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioInstance = new Audio(url)
      setAudio(audioInstance)

      const handleEnded = () => setPlaying(false)
      audioInstance.addEventListener('ended', handleEnded)

      return () => {
        audioInstance.removeEventListener('ended', handleEnded)
        audioInstance.pause()
      }
    }
  }, [url])

  return [playing, toggle]
}

export default useAudio