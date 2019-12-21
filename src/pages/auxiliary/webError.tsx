import React, { FC } from 'react'
import { RouteChildrenProps } from 'react-router-dom'

interface IWebError extends RouteChildrenProps {
  code?: string
  message?: string
}
const WebError: FC<IWebError> = ({ code = '', message = '找不到该页面' }) => {
  return (
    <div>
      web异常页面{code}
      {message}
    </div>
  )
}
export default WebError