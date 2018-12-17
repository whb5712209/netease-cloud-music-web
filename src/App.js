import React, { useReducer } from 'react'
import Router from './router'
import Header from './components/header'
import userReducer, { initialState as userInitialState } from './store/reducers/user'
import globalReducer, { initialState as globalInitialState } from './store/reducers/user'
import ajaxProxy from './store/actions/'
import GlobalContext from './store'
import './App.css'
import './assets/css/global.css'

export default function App () {
  const [ userState, userDispatch ] = useReducer(userReducer, userInitialState)
  const [ globaltate, globalDispatch ] = useReducer(globalReducer, globalInitialState)
  const ajax = ajaxProxy(globalDispatch)

  return (
    <GlobalContext.Provider
      value={{ userState, globaltate, globalDispatch: globalDispatch, dispatch: userDispatch, ajax }}>
      <Header />
      <Router />
    </GlobalContext.Provider>
  )
}
