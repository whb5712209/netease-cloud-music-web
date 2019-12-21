import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux';
import { RootState } from '../store'
import { IUserState } from '../store/actions/types'

import * as Header from '../components/header'
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
const RouterMap: FC = () => {
  return (
    <Router basename='/'>
      <Route
        path='/'
        render={({ ...props }) => {
          const { location } = props
          return (
            <React.Fragment>
              <Header.Comm {...props} />
              <Aside />
              <TransitionGroup className='router-box'>
                <CSSTransition key={location.key} classNames='router' timeout={1000}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Switch location={location}>
                      <Route exact path='/' component={Discover} />
                      <Route path='/discover' component={HomeCommonent} />
                      <LoginRouteByStore path='/login' Component={Login} />
                      <Route path='/user' component={UserCommonent} />
                      <Route path='/error' component={ErrorComponent} />
                      <Route path='*' render={(props) => <WebError {...props} />} />
                    </Switch>
                  </Suspense>
                </CSSTransition>
              </TransitionGroup>
            </React.Fragment>
          )
        }}
      />
    </Router>
  )
}
export default connect((state: RootState) => ({ user: state.user }))(RouterMap)
/**
 * 用户私有路由
 */
const PrivateUserRoute: FC<IUserRoute> = ({ Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return user.isLogin ? <Component {...props} /> : <Redirect to='/login' />
      }}
    />
  )
}
const PrivateUserRouteByStore = connect((state: RootState) => ({ user: state.user }))(PrivateUserRoute)

interface IUserRoute extends RouteProps {
  Component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  user: IUserState
}
/**
 * 登录路由,已登录用户无法进入
 */
const LoginRoute: FC<IUserRoute> = ({ Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return user.isLogin ? <Redirect to='/' /> : <Component {...props} />
      }}
    />
  )
}
const LoginRouteByStore = connect((state: RootState) => ({ user: state.user }))(LoginRoute)
/**
 * 错误中心
 * @param {Object} match 嵌套路由参数
 */
const ErrorComponent: FC<RouteComponentProps> = ({ match }) => {
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
const UserCommonent: FC<RouteComponentProps> = ({ match }) => {
  return (
    <React.Fragment>
      <Route path={`${match.path}/home/:id`} component={UserHome} />
      <PrivateUserRouteByStore path={`${match.path}/msg/:type`} Component={UserMessage} />
      <PrivateUserRouteByStore path={`${match.path}/level`} Component={UserLevel} />
      <Route exact path={match.path} component={WebError} />
    </React.Fragment>
  )
}

const HomeCommonent: FC<RouteComponentProps> = ({ match }) => {
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
