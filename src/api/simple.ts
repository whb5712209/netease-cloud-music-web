import fetch from './fetch'
import { setUrlParams } from '../utils/url'

const ajaxType = { fetch: fetch }

function getSimple (type: 'fetch') {
  const shortcut = {
    get: (url: string, data?: object, opt?: {}) => send({ url, data, opt, method: 'GET', type }),
    post: (url: string, data?: object, opt?: object) => send({ url, data, opt, method: 'POST', type }),
    delete: (url: string, data?: object, opt?: object) => send({ url, data, opt, method: 'DELETE', type }),
    put: (url: string, data?: object, opt?: object) => send({ url, data, opt, method: 'PUT', type }),
    update: (url: string, data?: object, opt?: object) => send({ url, data, opt, method: 'UPDATE', type })
  }
  return shortcut
}
function send ({
  url,
  data = {},
  opt = { header: {} },
  method,
  type
}: {
  url: string
  data?: object
  opt?: { header?: {} }
  method: string
  type: 'fetch'
}) {
  const sendOpt = assemble(
    {
      url,
      data,
      method: method.toLocaleUpperCase(),
      ...opt
    },
    type
  )
  return ajaxType[type](sendOpt)
}

function getPrefix (url: string) {
  return `${process.env.REACT_APP_PREFIX}/${url}`
}
// opt: {} ,type:
function assemble (opt: { url: string; method: string; data: {}; header?: {} }, type: string) {
  if (type === 'fetch') {
    return assembleByFetch(opt)
  }
  return assembleByAxios(opt)
}
function assembleByFetch (opt: { url: string; method: string; data: {} }) {
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

function assembleByAxios (opt: { url: string; method: string; data: {} }) {
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
const shortcut = getSimple('fetch')
export default shortcut
