import React, { useState, useEffect, useContext } from 'react'
import style from './index.module.css'
import { HeaderList } from '../../config/constant'
import GlobalContext from '../../store/'
import { setLoginType } from '../../store/actions/user'
import API from '../../api/index'
import Input from '../field/input'
import Button from '../button'
import Dialog from '../dialog'
import Login from '../login'

function login (type) {
  console.log(type)
}
export default function Header () {
  const [ count, setCount ] = useState(1)
  const [ isShowLoginTypeDialog, setLoginDialogType ] = useState(false)
  const [ isShowLoginDialog, setLoginDialog ] = useState(false)
  const { userState: { isLogin, userInfo }, dispatch, ajax } = useContext(GlobalContext)
  useEffect(() => {
    ajax(API.getSearch, '海阔天空')
    // ajax(API.getUserSubcount)
    // eslint-disable-next-line no-undef
  }, [])
  return (
    <React.Fragment>
      <div className={`${style.box} nmsp-range`}>
        <div className={style.top}>
          <div className={style.wrap}>
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
                <React.Fragment>
                  <Button
                    className={style.login_btn}
                    onClick={() => {
                      setLoginDialogType(!isShowLoginTypeDialog)
                    }}>
                    登录
                  </Button>
                  {isShowLoginTypeDialog && (
                    <Dialog.Follow>
                      <Login.List
                        onClick={(type) => {
                          if (type === 0) {
                            setLoginDialog(!isShowLoginDialog)
                            setLoginDialogType(!isShowLoginTypeDialog)
                          }
                        }}
                      />
                    </Dialog.Follow>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={style.subnav} />
      <button
        onClick={() => {
          setCount(count + 1)
          dispatch(setLoginType(!isLogin))
          // getUserSubcount
        }}>
        Click me{count}
      </button>
      {isShowLoginDialog && (
        <Dialog.Global>
          <Login
            onClick={(type) => {
              login()
            }}
          />
        </Dialog.Global>
      )}
    </React.Fragment>
  )
}
