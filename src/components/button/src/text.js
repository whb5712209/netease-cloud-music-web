import React from 'react'
import style from './text.module.css'
export default function ({ Prefix = null, disabled = false, Suffix = null, className = '', children, ...props }) {
  return (
    <React.Fragment>
      <button className={`${style.btn_text} ${className}`} {...props}>
        {Prefix && <Prefix.type {...Prefix.props} />}
        {children}
        {Suffix && <Suffix.type {...Suffix.props} />}
      </button>
    </React.Fragment>
  )
}
