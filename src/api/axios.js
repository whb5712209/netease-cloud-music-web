// axios 配置
import axios from 'axios'
// axios.defaults.timeout = 5000
axios.defaults.baseURL = '//localhost:3333/'
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8' //此处是增加的代码，设置请求头的类型

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
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error.response.data)
  }
)

export default axios
