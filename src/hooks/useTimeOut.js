import { useEffect, useCallback } from 'react'
export function useSetTimeOut (fn, duration) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      fn()
    }, duration)
    return () => {
      clearTimeout(timeOut)
    }
  }, [])
}
export default function useToastTime (fn, duration) {
  let timeOut = ''
  useEffect(
    () => {
      restartCloseTimer()
      return () => {
        clearCloseTimer()
      }
    },
    [ duration ]
  )
  const startCloseTimer = useCallback(() => {
    if (duration) {
      timeOut = setTimeout(() => {
        fn()
      }, duration * 1000)
    }
  })
  const clearCloseTimer = useCallback(() => {
    if (timeOut) {
      clearTimeout(timeOut)
      timeOut = ''
    }
  })
  const restartCloseTimer = () => {
    clearCloseTimer()
    startCloseTimer()
  }
  return [ startCloseTimer, clearCloseTimer ]
}
