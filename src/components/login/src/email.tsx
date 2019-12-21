import React, { memo, useCallback } from 'react'
import * as Button from '../../button'
import Input from '../../field/input'
import style from './email.module.css'
import useInputValue from '../../../hooks/useInputValue'

export interface IOnSaveEmail {
  (params: { email: string; pwd: string }): void
}
interface EmailProps {
  onSave: IOnSaveEmail
}

const Email: React.SFC<EmailProps> = memo(({ onSave }) => {
  const [email, setEmail] = useInputValue('')
  const [pwd, setPwd] = useInputValue('')
  const onLogin = useCallback(() => {
    onSave({ email, pwd })
  }, [email, pwd, onSave])
  return (
    <div className={style.box}>
      <div className={style.context}>
        <div className={style.item}>
          <Input type='text' placeholder='请输入账户号' onChange={setEmail} />
        </div>
        <div className={style.item}>
          <Input type='password' placeholder='请输入密码' onChange={setPwd} />
        </div>
        <div className={style.item}>
          <Button.Index type='primary' size='large' onClick={onLogin}>
            登录
          </Button.Index>
        </div>
      </div>
    </div>
  )
})
export default Email
