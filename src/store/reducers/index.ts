import { combineReducers } from 'redux'
import ajax from './ajax'
import user from './user'

const rootReducer = combineReducers({
  user,
  ajax
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
