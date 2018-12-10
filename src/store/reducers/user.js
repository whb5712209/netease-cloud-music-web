import * as userActs from '../actions/user'

export const initialState = {
  userInfo: {},
  isLogin: false
}
export default (state, action) => {
  switch (action.type) {
    case userActs.USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.userInfo,
        isLogin: Object.keys(action.userInfo).length > 0
      })
    case userActs.USER_LOGIN_TYPE:
      return Object.assign({}, state, {
        isLogin: action.data
      })
    default:
      return state
  }
}
