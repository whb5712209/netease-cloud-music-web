import { userActionTypes, IUserInfo, USER_INFO, USER_LOGIN_TYPE, IUserState } from '../actions/types'
import { getData } from '../../utils/cache'

export const initUserInfo: IUserInfo = {
  userId: '',
  nickname: ''
}
const userInfoCache: IUserInfo = getData('userInfo') || initUserInfo
export const initialState = {
  userId: userInfoCache.userId,
  nickname: userInfoCache.nickname,
  isLogin: !!userInfoCache
}

export default (state = initialState, action: userActionTypes): IUserState => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        ...action.data,
        isLogin: Object.keys(action.data).length > 0
      }
    case USER_LOGIN_TYPE:
      return {
        ...state,
        isLogin: action.data
      }
  }
  return state
}
