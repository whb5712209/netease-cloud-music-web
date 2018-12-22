import React, { memo } from 'react'
import Modal from './modal'
import noop from '../../../config/constant'
import style from './global.module.css'
import Icon from '../../icon'
import Button from '../../button'
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

export default memo(
  ({
    children = '',
    isShowMask = true,
    level = 'left',
    vertical = 'top',
    onClose = noop,
    globalClass = '',
    title = '',
    ...modalProps
  }) => {
    return (
      <Modal
        {...modalProps}
        isShowMask={isShowMask}
        className={`${style.global} ${level === 'left' ? style.left : level === 'right' ? style.right : style.center} 
        ${vertical === 'top' ? style.top : vertical === 'bottom' ? style.bottom : style.center} ${globalClass}`}>
        <div className={style.close}>
          <span className={style.title}>{title}</span>
          <Button.Text onClick={onClose}>
            <Icon type='close' className={style.icon_close} />
          </Button.Text>
        </div>
        {children}
      </Modal>
    )
  }
)
