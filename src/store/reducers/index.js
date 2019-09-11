import { useReducer } from 'react'

import combineReducers from '../../utils/combineReducers'
import ajax, { initialState as ajaxState } from './ajax'
import user, { initialState as userState } from './user'

const rootReducer = combineReducers({
  ajax,
  user
})
export default rootReducer
const initState = {
  user: userState,
  ajax: ajaxState
}

const [state, dispatch] = useReducer(rootReducer, initState)
export const dispatchProxy = new Proxy(dispatch, {
  apply: (target, ctx, [action, ...other]) => {
    if (typeof action === 'function') {
      return action.apply(null, [target, ...other])
    } else {
      return target(action)
    }
  }
})


export const store = state