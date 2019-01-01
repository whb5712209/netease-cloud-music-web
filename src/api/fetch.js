import code from '../config/code'
export default async ({ url, method, headers, ...otherOpts }) => {
  try {
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
    } else {
      return error(res)
    }
  } catch (e) {
    return error(e)
  }
}

function error (res) {
  return Promise.reject({
    code: res.status || -1,
    message: code[res.status] || res.message || '无效地址',
    originalMessage: res.message || res.statusText
  })
}

function success (data) {
  if (data.code === 200) {
    return data.result
  }
  return error({ status: data.code, message: data.message, statusText: data.statusText })
}
