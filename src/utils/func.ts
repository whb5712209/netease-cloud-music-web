/**
 * 函数节流
 * @param {Function} func 放入需要放到节流的函数
 * @param {number} waitMilliseconds 毫秒数
 */
export function throttle<F extends Procedure> (func: F, waitMilliseconds = 300): F {
  let canRun = true
  return function (this: any, ...args: any[]) {
    if (!canRun) return
    setTimeout(() => {
      func.apply(this, args)
      canRun = true
    }, waitMilliseconds)
  } as any
}

export type Procedure = (...args: any[]) => void

export type Options = {
  isImmediate: boolean
}

/**
 * 
 * @param func 回调
 * @param waitMilliseconds 执行时间 
 * @param options 是否立即执行
 * @author  Iman: https://github.com/iheidari
 */
export function debounce<F extends Procedure> (
  func: F,
  waitMilliseconds = 50,
  options: Options = {
    isImmediate: false
  }
): F {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  return function (this: any, ...args: any[]) {
    const context = this
    const doLater = function () {
      timeoutId = undefined
      if (!options.isImmediate) {
        func.apply(context, args)
      }
    }
    const shouldCallNow = options.isImmediate && timeoutId === undefined
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(doLater, waitMilliseconds)
    if (shouldCallNow) {
      func.apply(context, args)
    }
  } as any
}
