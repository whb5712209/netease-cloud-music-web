import React, { memo } from 'react'
import style from './index.module.css'
export interface ButtonProps {
  type?: 'default' | 'primary'
  disabled?: 'normal' | 'small' | 'large'
  size: string // normal, small, large
  Prefix?: React.ReactElement<any>
  Suffix?: React.ReactElement<any>
  className?: string
  placeholder?: string
  children: React.ReactNode | string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button: React.SFC<
  ButtonProps
> = memo(
  ({
    type = 'default', // default, primary
    disabled = false,
    size = 'normal', // normal, small, large
    Prefix,
    Suffix,
    className = '',
    children,
    onClick,
    ...props
  }) => {
    const classNameList: string[] = [ `btn__${type}`, `btn__${size}` ]
    if (disabled) {
      classNameList.push('is_disabled')
    }
    const classNames = classNameList.map((item) => style[item]).join(' ')
    return (
      <button className={`${style.btn} ${classNames} ${className}`} onClick={onClick} {...props}>
        {Prefix && <Prefix.type />}
        {children}
        {Suffix && <Suffix.type />}
      </button>
    )
  }
)
export default Button
