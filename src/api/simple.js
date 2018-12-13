import fetch from './fetch'
import { setUrlParams } from '../utils/url'

const methodList = [ 'get', 'post', 'delete', 'put', 'update' ]
const shortcut = {}
methodList.forEach((item) => {
  shortcut[item] = (url, data, opt = {}) => {
    return assemble({
      url,
      data,
      method: item.toLocaleUpperCase(),
      ...opt
    })
  }
  shortcut[item] = new Proxy(shortcut[item], {
    apply: (target, ctx, opt) => {
      const _opt = target.apply(this, opt)
      return fetch(_opt)
    }
  })
})

function getPrefix (url) {
  return (process.env.NODE_ENV === 'development' ? 'http://localhost:3333/' : '') + url
}
function assemble (opt) {
  opt.url = getPrefix(opt.url)
  if (opt.method === 'GET') {
    opt.url = setUrlParams(opt)
    opt.data = {}
    return {
      ...opt,
      mode: 'cors',
      credentials: 'include',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8'
      })
    }
  }
  return {
    ...opt,
    body: JSON.stringify(opt.data),
    mode: 'cors',
    credentials: 'include',
    redirect: 'follow',
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8'
    })
  }
}

export default shortcut
