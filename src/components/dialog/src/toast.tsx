import React, { memo, useCallback } from 'react'
import { useToastTime } from '../../../hooks/useTimeOut'
import styles from './toast.module.css'

function getClassNames(
  prefixCls: string
): {
  box: string
  closable: string
  content: string
  close: string
  icon: string
} {
  const obj = {
    box: '',
    closable: '',
    content: '',
    close: '',
    icon: ''
  }
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
interface ToastProps {
  closable?: boolean
  duration?: number
  prefixCls: string
  onClose: (toastId: string) => void
  children: React.ReactNode
  closeIcon?: string
  toastId: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
const Toast: React.SFC<
  ToastProps
> = memo(({ closable = true, duration = 1.5, prefixCls, onClose, children, closeIcon, toastId, onClick }) => {
  const [startCloseTimer, clearCloseTimer] = useToastTime(() => {
    close()
  }, duration)
  const close = useCallback(() => {
    clearCloseTimer()
    onClose(toastId)
  }, [clearCloseTimer, onClose, toastId])
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
        <a tabIndex={0} onClick={close} className={`${classNames.close}`} >
          {closeIcon || <span className={`${classNames.icon}`} />}
        </a>
      ) : null}
    </div>
  )
})
export default Toast
