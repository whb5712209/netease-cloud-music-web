// XMLHttpRequest.withCredentials = true
export default async ({ url, method, headers, ...otherOpts }) => {
  console.log('fetch请求....')
  const xhr = new XMLHttpRequest()
  xhr.withCredentials = true
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
  switch (res.status) {
    case 404:
      return {
        code: res.status,
        message: res.message || '无效地址',
        originalMessage: res.statusText
      }
    case 500:
      return {
        code: res.status,
        message: res.message || '服务端崩溃了',
        originalMessage: res.statusText
      }
    default:
      return {
        code: res.status,
        message: res.message || '请检查网络',
        originalMessage: res.statusText
      }
  }
}

function success (data) {
  if (data.code === 200) {
    return data.result
  }
  return error({ status: data.code, message: data.message, statusText: data.statusText })
}
