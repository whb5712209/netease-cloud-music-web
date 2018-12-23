import React, { useReducer } from 'react'
import Router from './router'
import Reducer, { initState } from './store/reducers/'

import createHashHistory from 'history/createBrowserHistory'

import GlobalContext from './store'
import './assets/css/global.css'
const history = createHashHistory()
history.listen((location, action) => {
  console.log(action, location)
})
export default function App () {
  const [ state, dispatch ] = useReducer(Reducer, initState)
  const dispatchProxy = new Proxy(dispatch, {
    apply: (target, ctx, [ action, ...other ]) => {
      if (typeof action === 'function') {
        return action.apply(null, [ target, ...other ])
      } else {
        return target(action)
      }
    }
  })

  return (
    <GlobalContext.Provider value={{ state, history, dispatch: dispatchProxy }}>
      <Router />
    </GlobalContext.Provider>
  )
}
