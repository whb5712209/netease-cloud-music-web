import React, { useCallback, memo } from 'react'
import * as Button from '../../button'
import Input from '../../field/input'
import useInputValue from '../../../hooks/useInputValue'

import style from './phone.module.css'

export interface IOnSavePhone {
  (params: { phone: string; pwd: string }): void
}
export interface IPhonePros {
  onSave: IOnSavePhone
}

const Phone: React.SFC<IPhonePros> = memo(({ onSave }) => {
  const [phone, setPhone] = useInputValue('')
  const [pwd, setPwd] = useInputValue('')
  const onLogin = useCallback(() => {
    onSave({ phone, pwd })
  }, [phone, pwd, onSave])
  return (
    <div className={style.box}>
      <div className={style.context}>
        <div className={style.item}>
          <Input type='text' placeholder='请输入手机号' onChange={setPhone} />
        </div>
        <div className={style.item}>
          <Input type='password' placeholder='请输入密码' onChange={setPwd} />
        </div>
        <div className={style.item}>
          <Button.Index size='large' type='primary' onClick={onLogin}>
            登录
          </Button.Index>
        </div>
      </div>
    </div>
  )
})
export default Phone
