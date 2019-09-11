import React from 'react'
import Router from './router'
import { dispatchProxy, store } from './store/reducers/'


import GlobalContext from './store'
import './assets/css/global.css'

export default function App() {
  return (
    <GlobalContext.Provider value={{ state: store, history: {}, dispatch: dispatchProxy }}>
      <Router />
    </GlobalContext.Provider>
  )
}
