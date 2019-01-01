// axios 配置
import axios from 'axios'
// axios.defaults.timeout = 5000
axios.defaults.baseURL = '//localhost:3333/'
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8' //此处是增加的代码，设置请求头的类型
axios.defaults.headers['Accept'] = 'application/json; charset=utf-8'
axios.defaults.transformRequest = [
  function (data) {
    let newData = ''
    for (let k in data) {
      newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
    }
    return newData
  }
]
// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    console.log('axios请求....')
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return success(response.data)
  },
  (err) => {
    return Promise.reject(error(err))
  }
)

export default axios

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
