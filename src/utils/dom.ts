export function getScrollingElement () {
  var d = document
  return d.documentElement.scrollHeight > d.body.scrollHeight && d.compatMode.indexOf('CSS1') === 0
    ? d.documentElement
    : d.body
}

export function getDom (id: string): Element {
  let dom = document.querySelector(`#${id}`)
  if (!dom) {
    dom = document.createElement('div')
    dom.setAttribute('id', id)
    document.body.appendChild(dom)
  }
  return dom
}
