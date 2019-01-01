import React, { useState, memo } from 'react'
import Button from '../../button'
import Input from '../../field/input'
import style from './email.module.css'
export default memo(({ onSave }) => {
  const [ email, setEmail ] = useState('')
  const [ pwd, setPwd ] = useState('')
  return (
    <div className={style.box}>
      <div className={style.context}>
        <div className={style.item}>
          <Input
            type='text'
            placeholder='请输入账户号'
            onChange={(e) => {
              setEmail(e.target.value)
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
            type='primary'
            size='large'
            onClick={() => {
              onSave({ email, pwd })
            }}>
            登录
          </Button>
        </div>
      </div>
    </div>
  )
})
