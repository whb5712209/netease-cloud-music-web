import React, { SFC } from 'react'
import Router from './router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './store'
import './assets/css/global.css'
const createStoreWithMdware = applyMiddleware(
  thunkMiddleware
)(createStore);

const store = createStoreWithMdware(rootReducer);

interface Props { }
const App: SFC<Props> = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>

  )
}
export default App
