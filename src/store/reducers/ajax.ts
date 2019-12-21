// import * as acts from '../actions/ajax'
import { IAjax, ajaxActionTypes, REQUEST_TYPE, REQUEST_XHR } from '../actions/types'

export const initialState: IAjax = {
  response: 0
}
export default (state = initialState, action: ajaxActionTypes): IAjax => {
  switch (action.type) {
    case REQUEST_TYPE:
      return Object.assign({}, state, {
        response: action.data
      })
    case REQUEST_XHR:
      return Object.assign({}, state, {
        response: 0
      })
    default:
      return state
  }
}
