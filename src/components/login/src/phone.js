import React, { useState } from 'react'
import Button from '../../button'
import Input from '../../field/input'

import style from './phone.module.css'

export default ({ onSave }) => {
  const [ phone, setPhone ] = useState('')
  const [ pwd, setPwd ] = useState('')
  return (
    <div className={style.box}>
      <div className={style.context}>
        <div className={style.item}>
          <Input
            type='text'
            placeholder='请输入手机号'
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <div className={style.item}>
          <Input
            type='password'
            placeholder='请输入密码'
            onChange={(e) => {
              setPwd(e.target.value)
            }}
          />
        </div>
        <div className={style.item}>
          <Button
            size='large'
            type='primary'
            onClick={() => {
              onSave({ phone, pwd })
            }}>
            登录
          </Button>
        </div>
      </div>
    </div>
  )
}
