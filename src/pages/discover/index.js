import React, { useContext } from 'react'
import GlobalContext from '../../store/'

export default function App () {
  const { userState: { isLogin } } = useContext(GlobalContext)
  return <div className='discover'>discover</div>
}
