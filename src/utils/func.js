/**
 * 函数节流
 * @param {Function} fn 放入需要放到节流的函数
 * @param {Int} interval 毫秒数
 */
export function throttle (fn, interval = 300) {
  let canRun = true
  return function () {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, interval)
  }
}
/**
 * 函数防抖
 * @param {*} fn 放入需要放到防抖的函数
 * @param {*} interval 毫秒数
 */
export function debounce (fn, interval = 300) {
  let timeout = null
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, interval)
  }
}
