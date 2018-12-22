import React, { useReducer } from 'react'
import Router from './router'
import userReducer, { initialState as userInitialState } from './store/reducers/user'
import globalReducer, { initialState as globalInitialState } from './store/reducers/user'

import createHashHistory from 'history/createBrowserHistory'

import ajax from './store/actions/'
import GlobalContext from './store'
import './App.css'
import './assets/css/global.css'
const history = createHashHistory()
history.listen((location, action) => {
  console.log(action, location)
})
export default function App () {
  const [ userState, userDispatch ] = useReducer(userReducer, userInitialState)
  const [ globaltate, globalDispatch ] = useReducer(globalReducer, globalInitialState)

  const dispatchProxy = new Proxy(userDispatch, {
    apply: (target, ctx, [ action, ...other ]) => {
      if (typeof action === 'function') {
        return action.apply(null, [ target, ...other ])
      } else {
        return target(action)
      }
    }
  })

  return (
    <GlobalContext.Provider
      value={{ userState, globaltate, history, globalDispatch: globalDispatch, dispatch: dispatchProxy, ajax }}>
      <Router />
    </GlobalContext.Provider>
  )
}
