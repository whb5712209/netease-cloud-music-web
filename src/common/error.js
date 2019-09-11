import report from './report'
window.addEventListener("unhandledrejection", (e) => {
    report(e)
    e.preventDefault()
})

window.onerror = function (e) {
    report(e)
    e.preventDefault()
}
window.addEventListener('error', (e) => {
    report(e)
    e.preventDefault()
})
