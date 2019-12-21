import path from 'path'
import fs from 'fs'
interface IPak {
  name: string
}
const pak: IPak = { name: path.resolve(fs.realpathSync(process.cwd()), 'package.json') }

export default function report (error?: string) {
  var reportUrl = 'http://xxxx/report?'
  new Image().src = reportUrl + 'error=' + error + '&' + setCommonProperty
}
function setCommonProperty () {
  const happenTime = new Date().getTime() // 日志发生时间
  const webMonitorId = pak.name // 用于区分应用的唯一标识（一个项目对应一个）
  const simpleUrl = window.location.href.split('?')[0] // 页面的url
  const customerKey = '' // 用于区分用户，所对应唯一的标识，清理本地数据后失效
  const pageKey = '' // 用于区分页面，所对应唯一的标识，每个新页面对应一个值
  const deviceName = '' // 设备名称
  const os = '' //系统名称 + 系统版本
  const browserName = '' //浏览器名称
  const browserVersion = '' //浏览器版本
  // TODO 位置信息, 待处理
  const monitorIp = '' // 用户的IP地址
  const country = '' // 用户所在国家
  const province = '' // 用户所在省份
  const city = '' // 用户所在城市
  // 用户自定义信息， 由开发者主动传入， 便于对线上进行准确定位
  const userId = '' // 用户名称
  const firstUserParam = '' //用户参数
  const secondUserParam = '' //用户参数
  return {
    happenTime,
    webMonitorId,
    simpleUrl,
    customerKey,
    pageKey,
    deviceName,
    os,
    browserName,
    browserVersion,
    monitorIp,
    country,
    province,
    city,
    userId,
    firstUserParam,
    secondUserParam
  }
}
