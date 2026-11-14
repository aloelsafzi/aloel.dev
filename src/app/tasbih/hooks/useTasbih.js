import { useState, useCallback, useRef } from 'react'
import useAudio from './useAudio'

const useTasbih = () => {
  const [count, setCount] = useState(0)
  const [target, setTargetState] = useState(33)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [vibrateEnabled, setVibrateEnabled] = useState(true)
  const countRef = useRef(0)
  const [, playSound] = useAudio('/ping.mp3')

  const triggerVibrate = useCallback(
    (pattern) => {
      if (vibrateEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
        try {
          navigator.vibrate(pattern)
        } catch {}
      }
    },
    [vibrateEnabled]
  )

  const setTarget = useCallback((val) => {
    if (val === '' || val === null || val === undefined) {
      setTargetState(0)
      return
    }
    const parsed = Math.max(0, Math.min(99999, parseInt(val, 10) || 0))
    setTargetState(parsed)
  }, [])

  const onClickTasbih = useCallback(() => {
    const nextCount = countRef.current + 1
    countRef.current = nextCount
    setCount(nextCount)

    const targetNum = Number(target)
    if (targetNum > 0 && nextCount === targetNum) {
      if (soundEnabled) {
        playSound()
      }
      triggerVibrate([100, 50, 100])
    } else {
      triggerVibrate(40)
    }
  }, [target, soundEnabled, playSound, triggerVibrate])

  const resetCount = useCallback(() => {
    countRef.current = 0
    setCount(0)
  }, [])

  return {
    count,
    target,
    setTarget,
    setQuickTarget: setTarget,
    soundEnabled,
    setSoundEnabled,
    vibrateEnabled,
    setVibrateEnabled,
    onClickTasbih,
    resetCount,
  }
}

export default useTasbih
