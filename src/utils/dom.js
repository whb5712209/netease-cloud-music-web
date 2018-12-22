export function getScrollingElement () {
  var d = document
  return d.documentElement.scrollHeight > d.body.scrollHeight && d.compatMode.indexOf('CSS1') === 0
    ? d.documentElement
    : d.body
}
