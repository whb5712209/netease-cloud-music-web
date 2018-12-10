export default (opt) => {
  if (opt.method === 'GET') {
    opt.url = urlEncode(opt)
    opt.data = {}
    return {
      ...opt,
      withCredentials: true,
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json;charset=utf-8'
      })
    }
  }
  return {
    ...opt,
    body: JSON.stringify(opt.data),
    mode: 'cors',
    withCredentials: true,
    headers: new Headers({
      'Content-Type': 'application/json;charset=utf-8'
    })
  }
}
const urlEncode = ({ url, data }) => {
  if (!data) return ''
  const flag = url.indexOf('?') === -1
  let paramStr = flag ? '' : '&'
  for (const item in data) {
    if (data.hasOwnProperty(item)) {
      paramStr += `${item}=${data[item]}&`
    }
  }
  paramStr = paramStr.slice(0, paramStr.length - 1)
  return flag ? url + '?' + paramStr : url + paramStr
}
