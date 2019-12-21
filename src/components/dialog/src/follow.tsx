import React, { memo, SFC } from 'react'
import Modal from './modal'
import style from './follow.module.css'
import noop from '../../../config/constant'
interface props {
  children: React.ReactNode
  isShowMask?: boolean
  level?: string
  vertical?: string
  onClose?: (params: any) => void
  followClass?: string
}
const Flolow: SFC<
  props
> = memo(
  ({
    children = '',
    isShowMask = false,
    level = 'left',
    vertical = 'top',
    onClose = noop,
    followClass = '',
    ...modalProps
  }) => {
    const className: string = `
    ${style.follow} 
    ${level === 'left' ? style.left : style.right} 
    ${vertical === 'top' ? style.top : style.bottom} 
    ${followClass}`
    return (
      <Modal {...modalProps} isShowMask={isShowMask} className={className}>
        <div className={style.close} onClick={onClose} />
        {children}
      </Modal>
    )
  }
)
export default Flolow
