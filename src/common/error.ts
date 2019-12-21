import report from './report'
window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent): void => {
  report(e.reason)
  e.preventDefault()
})

window.onerror = () => {
  report()
}
window.addEventListener('error', (): void => {
  report()
})
