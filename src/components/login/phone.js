import React, { useState, useEffect, useContext } from 'react'
import Button from '../button'
import Input from '../field/input'
import GlobalContext from '../../store/'
import API from '../../api/index'
import { setUserInfo } from '../../store/actions/user'

import style from './phone.module.css'

// function login (ajax, params = {}) {
//   return ajax(API.login, params)
// }
export default ({ onLogin }) => {
  const { userState: { userInfo }, dispatch, ajax } = useContext(GlobalContext)

  const [ phone, setPhone ] = useState('')
  const [ pwd, setPwd ] = useState('')
  return (
    <div className={style.box}>
      <div>
        <Input
          type='text'
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        />
      </div>
      <div>
        <Input
          type='password'
          onChange={(e) => {
            setPwd(e.target.value)
          }}
        />
      </div>
      <div>
        <Button
          onClick={() => {
            ajax(API.login, { phone, password: pwd })
              .then((res) => {
                console.log(res)
                // res.result
                dispatch(setUserInfo(res.result))
              })
              .catch((error) => {
                console.error(error)
              })
          }}>
          登录
        </Button>
      </div>
    </div>
  )
}
