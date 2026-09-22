import { useState, useCallback } from 'react'
import useAudio from "./useAudio"

const useTasbih = () => {
  const [count, setCount] = useState(0)
  const [target, setTarget] = useState(33)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [vibrateEnabled, setVibrateEnabled] = useState(true)
  const [, playSound] = useAudio('/ping.mp3')

  const triggerFeedback = useCallback(() => {
    if (vibrateEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(40)
      } catch (e) {
        // ignore vibration error
      }
    }
  }, [vibrateEnabled])

  const onClickTasbih = useCallback(() => {
    setCount((prev) => {
      const nextCount = prev + 1

      triggerFeedback()

      const targetNum = Number(target)
      if (targetNum > 0 && nextCount === targetNum) {
        if (soundEnabled) {
          playSound()
        }
        if (vibrateEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
          try {
            navigator.vibrate([100, 50, 100])
          } catch (e) {
            // ignore
          }
        }
      }

      return nextCount
    })
  }, [target, soundEnabled, vibrateEnabled, playSound, triggerFeedback])

  const onClickreset = useCallback(() => {
    setCount(0)
  }, [])

  const setQuickTarget = useCallback((val) => {
    setTarget(val)
  }, [])

  return {
    count,
    target,
    setTarget,
    setQuickTarget,
    soundEnabled,
    setSoundEnabled,
    vibrateEnabled,
    setVibrateEnabled,
    onClickTasbih,
    onClickreset
  }
}

export default useTasbih
