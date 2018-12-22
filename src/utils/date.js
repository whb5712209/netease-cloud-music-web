/**
 * [getDateStr 获得指定日期格式的字符串]
 * @param  {[String or Date]}  date  
 * [要转换的日期，必填, String须为ISO时间字符串2016-01-01T14:16:00+08:00]
 * @param  {[String]}  format     
 * [要转化的目标格式，必填。其中 YYYY/yyyy代表年,MM代表月,DD/dd代表日。hh/HH代表时，mm代表分，ss/SS代表秒，Z代表时区,O代表数字时区（+08:00）
 * example
 * input: '2016-01-01T14:16:00+08:00','YYYY年MM月DD日 hh:mm:ss (Z)'
 * output: 2016年01月01日 14:16:00 (CTS)
 * ]
 */
export function getDateStr (date, format) {
  if (!(date instanceof Date)) {
    throw new Error('date is required')
  }
  const _dateStr = date.toString() //浏览器时间字符串
  if (/invalid/i.test(_dateStr)) {
    throw new Error('Invalid Date')
  }
  let returnStr = '',
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    weekday = date.getDay()
  const patternI = /(yyyy)|(dd)|(hh)|(ss)|(Z)|(d)|(h)|(s)|(o)|(w)/gi,
    pattern = /(MM)|(mm)|(M)|(m)/g

  //替换年、日、小时、秒、时区
  returnStr = format.replace(patternI, (match, ...args) => {
    let [ p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, ...rest ] = args
    if (p1) return year
    if (p2) return zeroPadding(day)
    if (p3) return zeroPadding(hour)
    if (p4) return zeroPadding(second)
    if (p5) {
      const timeZone = _dateStr.match(/\((.*)\)$/)[1]
      if (timeZone) return timeZone
      else return `${p5}`
    }
    if (p6) return day
    if (p7) return hour
    if (p8) return second
    if (p9) {
      const offset = -date.getTimezoneOffset()
      const isNegative = offset < 0
      const offsetByHours = Math.floor(offset / 60)
      const offsetByMins = Math.floor(offset % 60)
      const offsetByHoursAbs = zeroPadding(Math.abs(offsetByHours))
      const offsetByMinsAbs = zeroPadding(Math.abs(offsetByMins))
      return isNegative ? `-${offsetByHoursAbs}:${offsetByMinsAbs}` : `+${offsetByHoursAbs}:${offsetByMinsAbs}`
    }
    if (p10) {
      const weekdays = [ '日', '一', '二', '三', '四', '五', '六' ]
      return weekdays[weekday]
    }
  })
  //替换月、分钟
  returnStr = returnStr.replace(pattern, (match, p1, p2, p3, p4) => {
    if (p1) return zeroPadding(month)
    if (p2) return zeroPadding(minute)
    if (p3) return month
    if (p4) return minute
  })
  return returnStr
}
/**
   * [zeroPadding 小于10的数字补0，必填]
   * @param  {[Int]} value [description]
   * @return {[String]}       [description]
   */
export function zeroPadding (value) {
  return value < 10 ? `0${value}` : `${value}`
}
