import * as userActs from '../actions/user'
import { saveData, getData } from '../../utils/cache'
const userInfoCache = getData('userInfo') || null
export const initialState = {
  userInfo: userInfoCache,
  isLogin: !!userInfoCache
}
export default (state, action) => {
  switch (action.type) {
    case userActs.USER_INFO:
      saveData('userInfo', action.data)
      return Object.assign({}, state, {
        userInfo: action.data,
        isLogin: Object.keys(action.data).length > 0
      })
    case userActs.USER_LOGIN_TYPE:
      return Object.assign({}, state, {
        isLogin: action.data
      })
    default:
      return state
  }
}
