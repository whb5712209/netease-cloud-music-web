import React from 'react'
import noop, { getDialogZindex } from '../../../config/constant'
import style from './modal.module.css'
/**
 * 基础弹框组件说明
 * @param  {Object}  props
 * @param  {Boolean} [props.isShowMask] - 背景显示隐藏 true显示/false隐藏
 * @param  {String}  [props.maskClass] - 背景样式
 * @param  {String} [props.className] - 内容样式
 * @param  {String} [props.boxClass] - 内容样式
 */
function Modal ({
  isShowMask = true,
  boxClass = '',
  contentStyle = {},
  className = '',
  maskClass = '',
  children,
  clickMask = noop
}) {
  let maskStyle = {}
  let _contentStyle = { ...contentStyle }
  if (isShowMask) {
    maskStyle = {
      zIndex: getDialogZindex()
    }
  }
  _contentStyle = {
    zIndex: getDialogZindex()
  }
  return (
    <div className={`${style.modal} ${boxClass}`}>
      {isShowMask ? <div className={`${style.modal_mask} ${maskClass}`} onClick={clickMask} style={maskStyle} /> : null}
      <div className={`${style.modal_content} ${className}`} style={_contentStyle}>
        {children}
      </div>
    </div>
  )
}

export default Modal
