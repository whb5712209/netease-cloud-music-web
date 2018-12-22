import React, { memo } from 'react'
import '../../assets/font/iconfont.css'
import style from './index.module.css'
export default memo(({ type, className }) => <i className={`iconfont icon-${type} ${style.iconfont} ${className}`} />)
