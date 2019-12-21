import React, { FC } from 'react'
interface IAppProps {
  code: string
  message: string
}
const App: FC<IAppProps> = ({ code, message }) => {
  return (
    <div>
      业务异常页面{code}
      {message}
    </div>
  )
}
export default App