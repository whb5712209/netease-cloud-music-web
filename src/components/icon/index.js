import React from 'react'
import '../../assets/font/iconfont.css'
import style from './index.module.css'
export default ({ type, className }) => {
  return <i className={`iconfont icon-${type} ${style.iconfont} ${className}`} />
}
