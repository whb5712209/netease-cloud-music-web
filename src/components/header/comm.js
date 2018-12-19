import React, { useState, useContext } from 'react'
import style from './comm.module.css'
import { HeaderList } from '../../config/constant'
import GlobalContext from '../../store'
import Input from '../field/input'
import Button from '../button'
import Dialog from '../dialog'
import Login from '../login'

function login (type) {
  console.log(type)
}
export default function Header () {
  const [ isShowLoginTypeDialog, setLoginDialogType ] = useState(false)
  const [ loginTypeDialog, setLoginTypeDialog ] = useState(0)
  const { userState: { isLogin, userInfo } } = useContext(GlobalContext)
  return (
    <React.Fragment>
      <div className={`${style.box} nmsp-range`}>
        <div className={style.top}>
          <div className='ncmw-wrap'>
            <h1 className={style.logo}>
              <a href='/#' hidefocus='true' className={style.a}>
                网易云音乐
              </a>
            </h1>
            <ul className={style.nav}>
              {HeaderList.map((item, index) => (
                <li className={index === 0 ? style.fst : ''} key={index}>
                  <span>
                    <a href={item.link} className={index === 0 ? style.slt : ''}>
                      <em>{item.name}</em>
                      <sub className={style.cor}>&nbsp;</sub>
                    </a>
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <Input type='text' className={style.input} />
            </div>
            <a href='./#' className={style.link_video}>
              视频征集
            </a>
            <div>
              {isLogin && <div className={style.nickname}>{userInfo.profile.nickname}</div>}
              {!isLogin && (
                <div
                  onMouseEnter={() => {
                    console.log(isShowLoginTypeDialog)
                    !isLogin && !isShowLoginTypeDialog && setLoginDialogType(true)
                  }}
                  onMouseLeave={() => {
                    !isLogin && isShowLoginTypeDialog && setLoginDialogType(false)
                  }}>
                  <Button.Text
                    className={style.login_btn}
                    onClick={() => {
                      setLoginDialogType(!isShowLoginTypeDialog)
                    }}>
                    登录
                  </Button.Text>
                  {!isLogin &&
                  isShowLoginTypeDialog && (
                    <Dialog.Follow followClass={style.follow}>
                      <Login.List
                        onClick={(type) => {
                          setLoginTypeDialog(type)
                          setLoginDialogType(!isShowLoginTypeDialog)
                        }}
                      />
                    </Dialog.Follow>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={style.subnav} />

      {!isLogin &&
      loginTypeDialog && (
        <Login.Main
          type={loginTypeDialog}
          onClose={() => {
            setLoginTypeDialog(0)
          }}
          onClick={(type) => {
            login()
          }}
        />
      )}
    </React.Fragment>
  )
}
