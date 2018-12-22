import React, { memo } from 'react'
import style from './index.module.css'
export default memo(({ children, className = '', ...props }) => {
  return (
    <div className={`ncmw-page-box ${className} `} {...props}>
      {children}
    </div>
  )
})
