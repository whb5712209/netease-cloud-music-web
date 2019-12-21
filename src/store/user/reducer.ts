import { USER_INFO, USER_LOGIN_TYPE, userActionTypes, IUserState } from './types'

export const initUserInfo: IUserState = {
  userId: '',
  nickname: '',
  isLogin: false
}

export default (state = initUserInfo, action: userActionTypes): IUserState => {
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
    default:
      return state
  }
}
