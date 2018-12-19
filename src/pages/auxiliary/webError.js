import React from 'react'

export default ({ code = '', message = '找不到该页面' }) => {
  return (
    <div>
      web异常页面{code}
      {message}
    </div>
  )
}
