import React from 'react'
import Button from '../button'

import style from './list.module.css'

export default ({ onClick }) => {
  return (
    <div className={style.box}>
      <div className='inner'>
        <ul className='f_cb'>
          <li className={style.ltb}>
            <Button
              onClick={() => {
                onClick(0)
              }}>
              手机登录
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}
