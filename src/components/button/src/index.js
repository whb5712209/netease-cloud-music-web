import React from 'react'
import style from './index.module.css'
export default function ({
  type = 'default', // default, primary
  disabled = false,
  size = 'normal', // normal, small, large
  nativeType,
  Prefix,
  Suffix,
  className = '',
  children,
  ...props
}) {
  let classNames = [ `btn__${type}`, `btn__${size}` ]
  disabled && classNames.push('is_disabled')
  classNames = classNames.map((item) => style[item]).join(' ')
  return (
    <button className={`${style.btn} ${classNames} ${className}`} {...props}>
      {Prefix && <Prefix.type />}
      {children}
      {Suffix && <Suffix.type />}
    </button>
  )
}

// export Button.Text = text
