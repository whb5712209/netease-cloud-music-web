import { USER_INFO, USER_LOGIN_TYPE, IUserInfo, userActionTypes } from './types'
export const setUserInfo = (data: IUserInfo): userActionTypes => ({
  type: USER_INFO,
  data
})
export const setLoginType = (data: boolean): userActionTypes => ({
  type: USER_LOGIN_TYPE,
  data
})
