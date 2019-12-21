// import React from 'react'
// import { initState } from './reducers'
// export default React.createContext({
//   state: initState,
//   history: History,
//   dispatch: () => {}

// })
import { combineReducers } from 'redux'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

// export type AppDispatch = typeof store.dispatch
