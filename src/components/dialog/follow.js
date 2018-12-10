import React from 'react'
import Modal from './modal'
import style from './follow.module.css'
import noop from '../../config/constant'
export default ({
  children = '',
  isShowMask = false,
  level = 'left',
  vertical = 'top',
  onClose = noop,
  ...modalProps
}) => {
  return (
    <Modal
      {...modalProps}
      isShowMask={isShowMask}
      className={`${style.follow} ${level === 'left' ? style.left : style.right} ${vertical === 'top'
        ? style.top
        : style.bottom}`}>
      <div className={style.close} onClick={onClose} />
      {children}
    </Modal>
  )
}
