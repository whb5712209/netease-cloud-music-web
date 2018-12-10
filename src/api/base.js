import request from './request'
import success, { error } from './response'

export default async function ajax (options) {
  return webAjax(options)
}
export async function webAjax (options) {
  const { url, ...other } = request(options)
  return fetch(url, other).then(success, error)
}
