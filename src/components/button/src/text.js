import React, { memo } from 'react'
import style from './text.module.css'
export default memo(({ Prefix = null, disabled = false, Suffix = null, className = '', children, ...props }) => {
  return (
    <button className={`${style.btn_text} ${className}`} {...props}>
      {Prefix && <Prefix.type {...Prefix.props} />}
      {children}
      {Suffix && <Suffix.type {...Suffix.props} />}
    </button>
  )
})
