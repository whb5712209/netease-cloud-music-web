import fetch from './fetch'
import { setUrlParams } from '../utils/url'

const methodList = [ 'get', 'post', 'delete', 'put', 'update' ]
const ajaxType = { fetch: fetch }
const shortcut = {}
function getSimple (type) {
  methodList.forEach((item) => {
    shortcut[item] = (url, data, opt = {}) => {
      const _opt = assemble(
        {
          url,
          data,
          method: item.toLocaleUpperCase(),
          ...opt
        },
        type
      )
      return ajaxType[type](_opt)
    }
  })
}

function getPrefix (url) {
  return `${process.env.REACT_APP_PREFIX}/${url}`
}

function assemble (opt, type) {
  if (type === 'fetch') {
    return assembleByFetch(opt)
  } else if (type === 'axios') {
    return assembleByAxios(opt)
  }
}
function assembleByFetch (opt) {
  opt.url = getPrefix(opt.url)
  if (opt.method === 'GET') {
    opt.url = setUrlParams(opt)
    opt.data = {}
    return {
      ...opt,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8'
      })
    }
  }
  return {
    ...opt,
    body: JSON.stringify(opt.data),
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8'
    })
  }
}

function assembleByAxios (opt) {
  opt.url = getPrefix(opt.url)
  if (opt.method === 'GET') {
    opt.url = setUrlParams(opt)
    opt.data = {}
    return {
      ...opt
    }
  }
  return {
    ...opt
  }
}
getSimple('fetch')
export default shortcut
