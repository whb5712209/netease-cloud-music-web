interface urlParams {
  url: string
  data?: {
    [propName: string]: any
  }
}
export const setUrlParams = ({ url, data }: urlParams) => {
  if (!data) return url
  const flag = url.indexOf('?') === -1
  let paramStr = flag ? '' : '&'
  Object.keys(data).reduce((str, item) => str + `${item}=${data[item]}&`, '')
  paramStr = paramStr.slice(0, paramStr.length - 1)
  return flag ? url + '?' + paramStr : url + paramStr
}
