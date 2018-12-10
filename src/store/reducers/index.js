import * as acts from '../actions/index'

export const initialState = {
  request: 0
}
export default (state, action) => {
  switch (action.type) {
    case acts.REQUEST_TYPE:
      return Object.assign({}, state, {
        request: action.data
      })
    default:
      return state
  }
}
