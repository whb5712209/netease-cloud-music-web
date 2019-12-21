import React, { memo } from 'react'
import style from './text.module.css'
interface ButtonTextProps {
  disabled?: boolean
  size?: string // normal, small, large
  Prefix?: React.ReactElement<any>
  Suffix?: React.ReactElement<any>
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactChild
}
const ButtonText: React.SFC<
  ButtonTextProps
> = memo(({ Prefix, disabled = false, Suffix, className = '', onClick, children, ...props }) => {
  return (
    <button className={`${style.btn_text} ${className}`} onClick={onClick} {...props}>
      {Prefix && <Prefix.type {...Prefix.props} />}
      {children}
      {Suffix && <Suffix.type {...Suffix.props} />}
    </button>
  )
})
export default ButtonText
