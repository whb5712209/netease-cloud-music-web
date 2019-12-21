import React, { memo } from 'react'
import * as Button from '../../button'
import Icon from '../../icon'
import style from './home.module.css'
interface HomeProps {
  onClick: (params: number) => void
}
const Home: React.SFC<HomeProps> = memo(({ onClick }) => {
  return (
    <div className={style.main}>
      <div className={style.principal}>
        <div className={style.logo_login} />
        <div className={style.btn_box}>
          <Button.Index
            size='large'
            type='primary'
            className={style.main_btn}
            onClick={() => {
              onClick(1)
            }}>
            手机号登录
          </Button.Index>
          <Button.Index size='large' className={style.main_btn}>
            注册
          </Button.Index>
        </div>
      </div>
      <div />
      <ul className={style.auxiliary}>
        <li>
          <Button.Text
            className={`${style.main_btn_text}`}
            Prefix={<Icon type='weixin-disabled' className={`${style.main_iocn}`} />}>
            微信登录
          </Button.Text>
        </li>
        <li>
          <Button.Text
            className={`${style.main_btn_text}`}
            Prefix={<Icon type='qq-disabled' className={`${style.main_iocn}`} />}>
            QQ登录
          </Button.Text>
        </li>
        <li>
          <Button.Text
            className={`${style.main_btn_text}`}
            Prefix={<Icon type='weibo-disabled' className={`${style.main_iocn}`} />}>
            微博登录
          </Button.Text>
        </li>
        <li>
          <Button.Text
            onClick={() => {
              onClick(2)
            }}
            className={`${style.main_btn_text}`}
            Prefix={<span className={`${style.main_iocn} ${style.icon_yi}`}>易</span>}>
            网易邮箱登录
          </Button.Text>
        </li>
      </ul>
    </div>
  )
})
export default Home
