import ajax from './base'

function getPrefix () {
  return 'http://127.0.0.1:3333/'
}
export async function get (url, params, opt = {}) {
  return ajax({
    url,
    data: params,
    ...opt,
    method: 'GET'
  })
}
export async function post (opt) {
  return ajax({
    ...opt,
    method: 'POST'
  })
}
export async function remove (opt) {
  return ajax({
    ...opt,
    method: 'DELETE'
  })
}
export async function put (opt) {
  return ajax({
    ...opt,
    method: 'PUT'
  })
}
export async function upload (opt) {
  return ajax({
    ...opt,
    method: 'POST'
  })
}
export default {
  async getSearch (data) {
    const url = getPrefix() + 'search'
    return get(url, { keywords: data })
  }
}
