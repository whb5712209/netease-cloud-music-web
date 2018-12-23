import * as acts from '../actions/ajax'

export const initialState = {
  request: 0
}
export default (state, action) => {
  switch (action.type) {
    case acts.REQUEST_TYPE:
      return Object.assign({}, state, {
        request: action.data
      })
    case acts.URL_MATCH:
      return Object.assign({}, state, {
        match: action.data
      })
    default:
      return state
  }
}
