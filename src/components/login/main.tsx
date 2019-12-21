import React, { useState, useCallback, useMemo } from 'react'
import * as Dialog from '../dialog'
import * as Button from '../button'
import Phone, { IOnSavePhone } from './src/phone'
import Email, { IOnSaveEmail } from './src/email'
import Home from './src/home'
import Icon from '../icon'
import API from '../../api/index'
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ActionTypes } from '../../store/actions/types'
import { setUserInfo } from '../../store/actions/user'
import ajax from '../../store/actions/ajax'
import * as H from 'history';
import style from './main.module.css'


interface MainProps {
  type?: number
  dispatch: Dispatch
  onClose: () => void
  history: H.History
}
interface IStore {
  dispatch: Dispatch
}
interface IOnLoginByPhone {
  phone: string
  pwd: string
}
interface IOnLoginByEmail {
  email: string
  pwd: string
}

type TMainProps = MainProps & IStore

const Main: React.SFC<MainProps> = ({ type = 1, onClose, dispatch, history }) => {
  const [loginType, setLoginType] = useState(type)
  const onLoginByPhone: IOnSavePhone = useCallback(({ phone, pwd }: IOnLoginByPhone) => {
    dispatch(ajax(API.loginByPhone, { phone, password: pwd }))
      .then((data: any) => {
        dispatch(setUserInfo(data))
        onClose()
        history.push({ pathname: '/discover' })
      })
      .catch((error: Error) => {
        console.error(error)
      })
  }, [history, onClose, dispatch])
  const onLoginByEmail: IOnSaveEmail = useCallback(({ email, pwd }: IOnLoginByEmail) => {
    dispatch(ajax(API.login, { email, password: pwd }))
      .then((data: any) => {
        dispatch(setUserInfo(data))
        onClose()
        history.push({ pathname: '/discover' })
      })
      .catch((error: Error) => {
        console.error(error)
      })
  }, [history, onClose, dispatch])
  const LoginContainer = useMemo(() => {
    const LoginElement = ((type) => {
      switch (type) {
        case 1:
          return <Phone onSave={onLoginByPhone} />
        case 2:
          return <Email onSave={onLoginByEmail} />
        default:
          return (
            <Home
              onClick={(type) => {
                setLoginType(type)
              }}
            />
          )
      }
    })(loginType)
    return (
      <React.Fragment>
        {LoginElement}
        {loginType !== -1 && (
          <footer className={style.footer}>
            <Button.Text
              className={style.btn_box}
              onClick={() => {
                setLoginType(-1)
              }}>
              <React.Fragment>
                <Icon type='back' className={style.icon_back} />
                其他登录方式
                </React.Fragment>
            </Button.Text>
          </footer>
        )}
      </React.Fragment>
    )
  },
    [loginType, onLoginByEmail, onLoginByPhone]
  )
  return (
    <Dialog.Global title={loginType === -1 ? '登录' : loginType === 1 ? '手机号码登录' : '网易账户登录'} globalClass={style.box} onClose={onClose}>
      {LoginContainer}
    </Dialog.Global>
  )
}
export default connect((dispatch: Dispatch<ActionTypes>) => {
  return {
    dispatch
  }
})(Main)

