import React, { FC, useState } from 'react'
import { RouteChildrenProps } from 'react-router'
import style from './login.module.css'
import * as Login from '../../components/login'
import * as Container from '../../components/container'

const App: FC<RouteChildrenProps> = ({ history }) => {
  const [loginTypeDialog, setLoginTypeDialog] = useState(0)
  return (
    <Container.Comm>
      <h1 className={style.hd}>请用你的云音乐帐号登录</h1>
      <div className={style.lg}>
        <Login.Home
          onClick={(type) => {
            setLoginTypeDialog(type)
          }}
        />
      </div>
      {!!loginTypeDialog && (
        <Login.Main
          history={history}
          type={loginTypeDialog}
          onClose={() => {
            setLoginTypeDialog(0)
          }}
        />
      )}
    </Container.Comm>
  )
}
export default App