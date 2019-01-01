import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import Toast from './src/toast'
import { getUuid } from '../../utils/uuid'
import { getDom } from '../../utils/dom'
import noop, { zIndex } from '../../config/constant'
import './message.css'

export default class Message {
  constructor () {
    this.list = []
    this.div = null
    this.setToastFn = noop
  }
  static getMessage (getContainer) {
    let instance = null
    return () => {
      if (!instance) {
        instance = new Message()
        instance.div = getContainer('message')
        instance.style = {}
        instance.render()
      }
      return instance
    }
  }

  callback (setToast, setToastStyle) {
    this.setToastFn = setToast
  }
  async onClose (key) {
    const item = this.list.filter((item) => item.key === key)
    if (!item) return
    this.list = this.list.filter((item) => item.key !== key)
    await this.setToastFn(this.list)
  }
  add ({ type, content, onClose = noop, ...props }) {
    const key = getUuid()
    this.list.push({
      key,
      type,
      content,
      onClose: (key) => {
        this.onClose(key)
        onClose(key)
      },
      ...props
    })
    this.setToastFn(this.list)
    return key
  }

  async remove (key) {
    const item = this.list.filter((item) => item.key === key)
    if (!item) return
    this.list = this.list.filter((item) => item.key !== key)
    await this.setToastFn(this.list)
  }
  render () {
    ReactDOM.render(<MessageBox list={this.list} callback={this.callback.bind(this)} />, this.div, () => {})
  }
}
let index = 0
function MessageBox ({ style, list, callback }) {
  const [ toastList, setToast ] = useState(list)
  useEffect(() => {
    callback(setToast)
  }, [])

  const toastStyle = useMemo(
    () => {
      if (toastList.length === 0) {
        index = 0
        return {
          ...style
        }
      }
      if (toastList.length > index) {
        index = toastList.length
        return {
          ...style,
          zIndex: zIndex.getZIndex()
        }
      } else {
        index = toastList.length
        return {
          ...style,
          zIndex: zIndex.getCurZIndex()
        }
      }
    },
    [ toastList.length ]
  )
  return (
    <div className='message-box' style={toastStyle}>
      {toastList.map(({ key, onClose, type, content, ...props }) => (
        <Toast onClose={onClose} {...props} prefixCls={type} key={key} toastId={key}>
          {content}
        </Toast>
      ))}
    </div>
  )
}
export const ToastMsg = Message.getMessage(getDom)
;[ 'success', 'warn', 'info', 'error' ].forEach((item) => {
  const toastMsg = ToastMsg()
  Message[item] = (options) => {
    if (typeof options === 'string') {
      return toastMsg.add({
        type: item,
        content: options
      })
    } else {
      return toastMsg.add({
        type: item,
        ...options
      })
    }
  }
})
