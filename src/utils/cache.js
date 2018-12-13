export function supportLoaclStorage () {
  return !!window.localStorage
}

/*
  保存数据有限存localStorage 不支持会存cookie
  @param {String} name 保存数据的key值
  @param {Object} value 保存数据的值
* */
export function saveData (name, value) {
  let storeValue = JSON.stringify(value)
  if (supportLoaclStorage()) {
    window.localStorage.setItem(name, storeValue)
  } else {
    //默认path 根路径
    document.cookie = name + '=' + encodeURIComponent(storeValue) + ';path=/'
  }
}

export function getData (name) {
  if (supportLoaclStorage()) {
    return JSON.parse(window.localStorage.getItem(name))
  }
  if (document.cookie.length > 0) {
    let cookieStr = document.cookie
    let nameidnex = cookieStr.indexOf(name)
    if (nameidnex === -1) {
      return ''
    }
    let lastIndex = cookieStr.indexOf(';', nameidnex)
    if ((lastIndex = -1)) {
      lastIndex = cookieStr.length
    }
    return JSON.parse(decodeURIComponent(cookieStr.substring(nameidnex + name.length + 1, lastIndex)))
  }
  return ''
}
