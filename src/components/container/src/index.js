import React from 'react'
import style from './index.module.css'
export default ({ children, className = '', ...props }) => {
  return (
    <div className={`ncmw-page-box ${className} `} {...props}>
      {children}
    </div>
  )
}
