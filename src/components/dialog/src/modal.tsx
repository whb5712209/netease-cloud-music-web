import React, { memo, SFC } from 'react'
import noop, { zIndex } from '../../../config/constant'
import style from './modal.module.css'
/**
 * 基础弹框组件说明
 * @param  {Object}  props
 * @param  {Boolean} [props.isShowMask] - 背景显示隐藏 true显示/false隐藏
 * @param  {String}  [props.maskClass] - 背景样式
 * @param  {String} [props.className] - 内容样式
 * @param  {String} [props.boxClass] - 内容样式
 */
interface ModalInterface {
  isShowMask?: boolean
  boxClass?: string
  contentStyle?: object
  className?: string
  maskClass?: string
  clickMask?: (param: any) => void
  children?: React.ReactNode
}
const Modal: SFC<
  ModalInterface
> = memo(
  ({
    isShowMask = true,
    boxClass = '',
    contentStyle = {},
    className = '',
    maskClass = '',
    children,
    clickMask = noop
  }) => {
    let maskStyle = {}
    let _contentStyle = { ...contentStyle }
    if (isShowMask) {
      maskStyle = {
        zIndex: zIndex.getZIndex()
      }
    }
    _contentStyle = {
      zIndex: zIndex.getZIndex()
    }
    return (
      <div className={`${style.modal} ${boxClass}`}>
        {isShowMask ? (
          <div className={`${style.modal_mask} ${maskClass}`} onClick={clickMask} style={maskStyle} />
        ) : null}
        <div className={`${style.modal_content} ${className}`} style={_contentStyle}>
          {children}
        </div>
      </div>
    )
  }
)
export default Modal
