import React, { memo } from 'react'
import '../../assets/font/iconfont.css'
import style from './index.module.css'
interface IconProps {
  type: string
  className?: string
}
const Icon: React.SFC<IconProps> = memo(({ type, className }) => (
  <i className={`iconfont icon-${type} ${style.iconfont} ${className}`} />
))
export default Icon
