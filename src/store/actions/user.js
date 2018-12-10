export const USER_INFO = 'USER_INFO'
export const USER_LOGIN_TYPE = 'USER_LOGIN_TYPE'
export const setUserInfo = (data) => ({
  type: USER_INFO,
  data
})
export const setLoginType = (data) => ({
  type: USER_LOGIN_TYPE,
  data
})
