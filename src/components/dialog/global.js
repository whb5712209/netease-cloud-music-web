import React from 'react'
import Modal from './modal'
import noop from '../../config/constant'
import style from './global.module.css'

/**
 * @module components/dialog/global
 * @desc 相对全局弹框
 * @param {String} [level='center'] - 水平方向:left right center
 * @param {String} [vertical='center'] - 垂直方向:top bottom center
 * @param {Boolean} [hasMask=true] - 是否包含蒙层
 * @param {Boolean} [mask=React.componment] - 是否包含蒙层
 * @example
 * 
 */

export default ({
  children = '',
  isShowMask = true,
  level = 'left',
  vertical = 'top',
  onClose = noop,
  ...modalProps
}) => {
  return (
    <Modal
      {...modalProps}
      isShowMask={isShowMask}
      className={`${style.global} ${level === 'left' ? style.left : style.right} ${vertical === 'top'
        ? style.top
        : style.bottom}`}>
      <div className={style.close} onClick={onClose} />
      {children}
    </Modal>
  )
}
