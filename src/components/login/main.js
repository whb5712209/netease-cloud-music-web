import React, { useState, useContext } from 'react'
import Dialog from '../dialog'
import Button from '../button'
import Phone from './src/phone'
import Email from './src/email'
import Home from './src/home'
import Icon from '../icon'
import API from '../../api/index'

import GlobalContext from '../../store'
import { setUserInfo } from '../../store/actions/user'
import style from './main.module.css'
const titleList = {
  1: '手机号码登录',
  2: '网易账户登录'
}
export default ({ type = 1, onSave, onClose }) => {
  const { dispatch, ajax, history } = useContext(GlobalContext)
  const [ loginType, setLoginType ] = useState(type)
  console.log(history)
  return (
    <Dialog.Global title={loginType === -1 ? '登录' : titleList[loginType]} globalClass={style.box} onClose={onClose}>
      {((_type) => {
        switch (_type) {
          case 1:
            return (
              <Phone
                onSave={({ phone, pwd }) => {
                  ajax(API.loginByPhone, { phone, password: pwd })
                    .then((data) => {
                      dispatch(setUserInfo(data))
                      onClose()
                    })
                    .catch((error) => {
                      console.error(error)
                    })
                }}
              />
            )
          case 2:
            return (
              <Email
                onSave={({ email, pwd }) => {
                  ajax(API.login, { email, password: pwd })
                    .then((data) => {
                      dispatch(setUserInfo(data))
                      onClose()
                    })
                    .catch((error) => {
                      console.error(error)
                    })
                }}
              />
            )
          default:
            return (
              <Home
                onClick={(type) => {
                  setLoginType(type)
                }}
              />
            )
        }
      })(loginType)}
      {loginType !== -1 && (
        <footer className={style.footer}>
          <Button.Text
            className={style.btn_box}
            onClick={() => {
              setLoginType(-1)
            }}>
            <Icon type='back' className={style.icon_back} />
            其他登录方式
          </Button.Text>
        </footer>
      )}
    </Dialog.Global>
  )
}
