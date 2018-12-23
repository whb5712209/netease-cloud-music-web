import combineReducers from '../../utils/combineReducers'
import ajax, { initialState as ajaxState } from './ajax'
import user, { initialState as userState } from './user'

const rootReducer = combineReducers({
  ajax,
  user
})
export default rootReducer
export const initState = {
  user: userState,
  ajax: ajaxState
}
