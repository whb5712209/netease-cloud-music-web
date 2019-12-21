import React, { useState, useEffect, useMemo, SFC } from 'react'
import ReactDOM from 'react-dom'
import Toast from './src/toast'
import { getUuid } from '../../utils/uuid'
import { getDom } from '../../utils/dom'
import noop, { zIndex } from '../../config/constant'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './message.css'
interface MessageBoxProps {
  style: React.CSSProperties;
  list: IMessageItem[];
  callback(params: any): void
}
const MessageBox: SFC<MessageBoxProps> = ({ style, list, callback }) => {
  const [toastList, setToast] = useState(list)
  useEffect(() => {
    callback(setToast)
  }, [callback])

  const toastStyle = useMemo(
    () => {
      if (toastList.length === 0) {
        return {
          ...style
        }
      }
      return {
        ...style,
        zIndex: zIndex.getZIndex()
      }
    },
    [style, toastList.length]
  )
  return (
    <div className='message-box' style={toastStyle}>
      <TransitionGroup>
        {toastList.map(({ key, onClose, type, content, ...props }) => (
          <CSSTransition key={key} timeout={500} classNames='fade'>
            <Toast onClose={onClose} {...props} prefixCls={type} key={key} toastId={key}>
              {content}
            </Toast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

interface IMessageItem {
  key: string
  type: string;
  content: any;
  onClose: (toastId: string) => void
}


interface IMessage {
  list: IMessageItem[]
  div: Element
  setToastFn(list: IMessageItem[]): void
  style: React.CSSProperties
  render(): void
  add(params: IMessageItem): string
  onClose(toastId: string): Promise<void>
  remove(toastId: string): Promise<void>
}

export default class Message implements IMessage {
  list: IMessageItem[] = [];
  div = getDom('message');
  style = {};
  setToastFn(list: IMessageItem[]) { }

  callback(setToast: (list: IMessageItem[]) => void): void {
    this.setToastFn = setToast
  }
  async onClose(toastId: string) {
    const item = this.list.filter((item) => item.key === toastId)
    if (!item) return
    this.list = this.list.filter((item) => item.key !== toastId)
    await this.setToastFn(this.list)
  }
  add(params: Partial<IMessageItem>): string {
    const { type = 'success', content, onClose = noop, ...props } = params
    const key = getUuid()
    const messageItem: IMessageItem = {
      key,
      type,
      content,
      onClose: (key) => {
        this.onClose(key)
        onClose(key)
      },
      ...props
    }
    this.list.push(messageItem)
    this.setToastFn(this.list)
    return key
  }
  async remove(toastId: string) {
    const item = this.list.filter((item) => item.key === toastId)
    if (!item) return
    this.list = this.list.filter((item) => item.key !== toastId)
    await this.setToastFn(this.list)
  }
  render(): void {
    ReactDOM.render(<MessageBox list={this.list} style={this.style} callback={this.callback.bind(this)} />, this.div, () => { })
  }

  static error: (params: Partial<IMessageItem>) => string
  static success: (params: Partial<IMessageItem>) => string
  static warn: (params: Partial<IMessageItem>) => string
  static info: (params: Partial<IMessageItem>) => string
  static getMessage() {
    let instance: Message | null = null
    return () => {
      if (!instance) {
        instance = new Message()
        instance.div = getDom('message')
        instance.style = {}
        instance.render()
      }
      return instance
    }
  }
}

export const ToastMsg = Message.getMessage()
const toastMsg = ToastMsg()
Message.success = (options) => {
  if (typeof options === 'string') {
    return toastMsg.add({
      type: 'success',
      content: options
    })
  } else {
    return toastMsg.add({
      type: 'success',
      ...options
    })
  }
}
Message.warn = (options) => {
  if (typeof options === 'string') {
    return toastMsg.add({
      type: 'warn',
      content: options
    })
  } else {
    return toastMsg.add({
      type: 'warn',
      ...options
    })
  }
}
Message.info = (options) => {
  if (typeof options === 'string') {
    return toastMsg.add({
      type: 'info',
      content: options
    })
  } else {
    return toastMsg.add({
      type: 'info',
      ...options
    })
  }
}
Message.error = (options) => {
  if (typeof options === 'string') {
    return toastMsg.add({
      type: 'error',
      content: options
    })
  } else {
    return toastMsg.add({
      type: 'error',
      ...options
    })
  }
}

