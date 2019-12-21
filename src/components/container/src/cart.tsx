import React, { memo } from 'react'
import style from './cart.module.css'
interface CartProps {
  title?: string | React.ReactElement<any>
  className?: string
  children: React.ReactNode
}
const Cart: React.SFC<CartProps> = memo(({ children, title = '', className = '', ...props }) => {
  return (
    <div className={`${style.cart} ${className}`}>
      <div className={style.title_box}>{title as string ? <p className={style.title}>{title}</p> : { title }}</div>
      <div className={style.main}>{children}</div>
    </div>
  )
})
export default Cart
