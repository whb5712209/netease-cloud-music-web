import React, { useState } from 'react'
import style from './login.module.css'
import Login from '../../components/login/'
import Container from '../../components/container'
export default () => {
  const [ loginTypeDialog, setLoginTypeDialog ] = useState(0)
  return (
    <Container>
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
          type={loginTypeDialog}
          onClose={() => {
            setLoginTypeDialog(0)
          }}
        />
      )}
    </Container>
  )
}
