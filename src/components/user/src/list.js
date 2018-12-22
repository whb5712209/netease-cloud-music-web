import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import style from './list.module.css'
import Button from '../../button'

export default memo(({ id = '' }) => {
  return (
    <div className={style.box}>
      <div className='inner'>
        <ul className='f_cb'>
          <li className={style.ltb}>
            <Link to={`/user/home/${id}`} className={style.link}>
              我的主页
            </Link>
          </li>
          <li className={style.ltb}>
            <Link to='/user/msg/at' className={style.link}>
              我的消息
            </Link>
          </li>
          <li className={style.ltb}>
            <Link to='/user/level' className={style.link}>
              我的等级
            </Link>
          </li>
          <li className={style.ltb}>
            <Link to='/' className={style.link}>
              个人设置
            </Link>
          </li>
          <li className={style.ltb}>
            <Button.Text className={style.text_btn} onClick={() => {}}>
              退出
            </Button.Text>
          </li>
        </ul>
      </div>
    </div>
  )
})
