import { useEffect, useRef, useCallback } from 'react'
interface IFunction {
  (): void
}
export function useSetTimeOut<T extends IFunction, U extends number> (fn: T, duration: U) {
  useEffect(
    () => {
      const timeOut = setTimeout(() => {
        fn()
      }, duration)
      return () => {
        clearTimeout(timeOut)
      }
    },
    [ fn, duration ]
  )
}

interface IUseToastTime {
  (fn: () => void, duration: number): [any, any]
}
export const useToastTime: IUseToastTime = (fn, duration) => {
  let timeOut = useRef<NodeJS.Timeout>()
  const startCloseTimer = useCallback(
    () => {
      if (duration) {
        timeOut.current = setTimeout(() => {
          fn()
        }, duration * 1000)
      }
    },
    [ fn, duration ]
  )
  const clearCloseTimer = useCallback(() => {
    if (timeOut.current) {
      clearTimeout(timeOut.current)
    }
  }, [])
  const restartCloseTimer = useCallback(
    () => {
      clearCloseTimer()
      startCloseTimer()
    },
    [ clearCloseTimer, startCloseTimer ]
  )
  useEffect(
    () => {
      restartCloseTimer()
      return () => {
        clearCloseTimer()
      }
    },
    [ clearCloseTimer, duration, restartCloseTimer ]
  )

  return [ startCloseTimer, clearCloseTimer ]
}
