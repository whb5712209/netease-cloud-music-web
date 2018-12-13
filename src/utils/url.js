export const setUrlParams = ({ url, data }) => {
  if (!data) return url
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
