import React, { useContext } from 'react'
import GlobalContext from '../../store/'
import Container from '../../components/container'
import Header from '../../components/header'
import style from './index.module.css'

export default function App () {
  const { userState: { isLogin } } = useContext(GlobalContext)
  return (
    <div>
      <Header.Top />
      <Container>推荐</Container>
    </div>
  )
}
