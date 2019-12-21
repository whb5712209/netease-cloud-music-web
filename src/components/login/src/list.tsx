import React, { memo } from 'react'
import * as   Button from '../../button'

import style from './list.module.css'

interface ListProps {
  onClick: (params: number) => void
}
const List: React.SFC<ListProps> = memo(({ onClick }) => {
  return (
    <div className={style.box}>
      <div className='inner'>
        <ul className='f_cb'>
          <li className={style.ltb}>
            <Button.Text
              className={style.text_btn}
              onClick={() => {
                onClick(1)
              }}>
              手机登录
            </Button.Text>
          </li>
          <li className={style.ltb}>
            <Button.Text
              className={style.text_btn}
              onClick={() => {
                onClick(2)
              }}>
              网易邮箱登录
            </Button.Text>
          </li>
        </ul>
      </div>
    </div>
  )
})
export default List
