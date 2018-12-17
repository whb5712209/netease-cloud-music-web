// XMLHttpRequest.withCredentials = true
import code from '../config/code'
export default async ({ url, method, headers, ...otherOpts }) => {
  console.log('fetch请求....')
  const res = await fetch(url, {
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      ...headers
    }),
    ...otherOpts
  })
  if (res.ok) {
    return success(await res.json())
  }
  return error(res)
}

function error (res) {
  return Promise.reject({
    code: res.status,
    message: code[res.status] || '无效地址',
    originalMessage: res.statusText
  })
}

function success (data) {
  if (data.code === 200) {
    return data.result
  }
  return error({ status: data.code, message: data.message, statusText: data.statusText })
}
