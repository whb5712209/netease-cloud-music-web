import React, { useContext, lazy, Suspense } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import GlobalContext from '../store/'

import Header from '../components/header'
import Aside from '../components/aside'

import Discover from '../pages/discover/home'
import Login from '../pages/discover/login'

const Album = lazy(() => import('../pages/discover/album'))
const Artist = lazy(() => import('../pages/discover/artist'))
const DjRadio = lazy(() => import('../pages/discover/djRadio'))
const PlayList = lazy(() => import('../pages/discover/playList'))
const TopList = lazy(() => import('../pages/discover/topList'))

const BusinessError = lazy(() => import('../pages/auxiliary/businessError'))
const ServerError = lazy(() => import('../pages/auxiliary/serverError'))
const WebError = lazy(() => import('../pages/auxiliary/webError'))

const UserHome = lazy(() => import('../pages/user/home'))
const UserMessage = lazy(() => import('../pages/user/message'))
const UserLevel = lazy(() => import('../pages/user/level'))

export default () => {
  const { history } = useContext(GlobalContext)
  return (
    <Router basename='/' history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Aside />
        <Switch>
          <Route exact path='/' component={Discover} />
          <Route path='/discover' component={HomeCommonent} />
          <LoginRoute path='/login' component={Login} />
          <Route path='/user' component={UserCommonent} />
          <Route path='/error' component={ErrorComponent} />
          <Route path='*' component={WebError} />
        </Switch>
      </Suspense>
    </Router>
  )
}
/**
 * 用户私有路由
 */
const PrivateUserRoute = ({ component: Component, ...rest }) => {
  const { userState: { isLogin } } = useContext(GlobalContext)
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? <Component /> : <Redirect to='/login' />
      }}
    />
  )
}

/**
 * 登录路由,已登录用户无法进入
 */
const LoginRoute = ({ component: Component, ...rest }) => {
  const { userState: { isLogin } } = useContext(GlobalContext)
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? <Redirect to='/' /> : <Component />
      }}
    />
  )
}
/**
 * 错误中心
 * @param {Object} match 嵌套路由参数
 */
const ErrorComponent = ({ match }) => {
  return (
    <React.Fragment>
      <Route path={`${match.path}/server`} component={ServerError} />
      <Route path={`${match.path}/business`} component={BusinessError} />
      <Route path={`${match.path}/web`} component={WebError} />
      <Route exact path={match.path} component={WebError} />
    </React.Fragment>
  )
}
/**
 * 用户中心
 * @param {Object} match  路由对象
 */
const UserCommonent = ({ match }) => {
  return (
    <React.Fragment>
      <Route path={`${match.path}/home/:id`} component={UserHome} />
      <PrivateUserRoute path={`${match.path}/msg/:type`} component={UserMessage} />
      <PrivateUserRoute path={`${match.path}/level`} component={UserLevel} />
      <Route exact path={match.path} component={WebError} />
    </React.Fragment>
  )
}

const HomeCommonent = ({ match }) => {
  return (
    <React.Fragment>
      <Route path={`${match.path}/toplist`} component={TopList} />
      <Route path={`${match.path}/playlist`} component={PlayList} />
      <Route path={`${match.path}/djradio`} component={DjRadio} />
      <Route path={`${match.path}/artist`} component={Artist} />
      <Route path={`${match.path}/album`} component={Album} />
      <Route exact path={match.path} component={Discover} />
    </React.Fragment>
  )
}
