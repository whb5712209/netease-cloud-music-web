import React, { memo, useEffect } from 'react'
import styles from './toast.module.css'

function getClassNames (prefixCls) {
  const obj = {}
  if (prefixCls) {
    obj.box = prefixCls + '-tosat'
    obj.closable = prefixCls + '-closable'
    obj.content = prefixCls + '-content'
    obj.close = prefixCls + '-close'
    obj.icon = prefixCls + '-x-close'
  } else {
    obj.box = styles['nc-toast']
    obj.closable = styles['nc-toast-closable']
    obj.content = styles['nc-toast-content']
    obj.close = styles['nc-toast-close']
    obj.icon = styles['nc-toast-x-close']
  }
  return obj
}
export default memo(
  ({ closable = true, duration = 1.5, prefixCls, onClose, children, closeIcon, toastId, onClick }) => {
    useEffect(
      () => {
        restartCloseTimer()
      },
      [ duration ]
    )
    let closeTimer = ''
    const clearCloseTimer = () => {
      if (closeTimer) {
        clearTimeout(closeTimer)
        closeTimer = ''
      }
    }
    const startCloseTimer = () => {
      if (duration) {
        closeTimer = setTimeout(() => {
          close()
        }, duration * 1000)
      }
    }
    const close = () => {
      clearCloseTimer()
      onClose(toastId)
    }
    const restartCloseTimer = () => {
      clearCloseTimer()
      startCloseTimer()
    }
    const classNames = getClassNames(prefixCls)
    return (
      <div
        onMouseEnter={clearCloseTimer}
        onMouseLeave={startCloseTimer}
        onClick={onClick}
        className={`${classNames.box}  ${closable ? classNames.closable : ''}`}>
        <div className={`${classNames.content}`}>{children}</div>
        {closable ? (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a tabIndex='0' onClick={close} className={`${classNames.close}`}>
            {closeIcon || <span className={`${classNames.icon}`} />}
          </a>
        ) : null}
      </div>
    )
  }
)
