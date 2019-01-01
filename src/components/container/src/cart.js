import React, { memo } from 'react'
import style from './cart.module.css'
export default memo(({ children, title = '', className = '', ...props }) => {
  return (
    <div className={`${style.cart} ${className}`}>
      <div className={style.title_box}>
        {typeof title === 'string' ? <p className={style.title}>{title}</p> : { title }}
      </div>
      <div className={style.main}>{children}</div>
    </div>
  )
})
