import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import GlobalContext from '../store/'

import Discover from '../pages/discover'
import Login from '../pages/discover/login'

import Album from '../pages/discover/album'
import Artist from '../pages/discover/artist'
import DjRadio from '../pages/discover/djRadio'
import PlayList from '../pages/discover/playList'
import TopList from '../pages/discover/topList'

import BusinessError from '../pages/auxiliary/businessError'
import ServerError from '../pages/auxiliary/serverError'
import WebError from '../pages/auxiliary/webError'

import UserHome from '../pages/user/home'
import UserMessage from '../pages/user/message'
import UserLevel from '../pages/user/level'

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Discover} />
        <Route path='/discover' component={HomeCommonent} />
        <LoginRoute path='/login' component={Login} />
        <Route path='/user' component={UserCommonent} />
        <Route path='/error' component={ErrorComponent} />
        <Route path='*' component={WebError} />
      </Switch>
    </div>
  </Router>
)
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
