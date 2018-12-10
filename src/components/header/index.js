import React, { useState, useEffect, useContext } from 'react'
import style from './index.module.css'
import './index.css'
import { HeaderList } from '../../config/constant'
import GlobalContext from '../../store/'
import { setLoginType } from '../../store/actions/user'
import API from '../../api/index'
import Input from '../field/input'
import Button from '../button'
import Dialog from '../dialog/follow'

// function login () {}
export default function Header () {
  const [ count, setCount ] = useState(1)
  const [ isShowLoginDialog, setLoginDialogType ] = useState(false)
  const { userState: { isLogin }, dispatch, ajax } = useContext(GlobalContext)
  useEffect(() => {
    ajax(API.getSearch, '海阔天空')
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
              <Button
                className={style.login_btn}
                onClick={() => {
                  // login.apply(this)
                  setLoginDialogType(!isShowLoginDialog)
                }}>
                登录
              </Button>
              {isShowLoginDialog && <Dialog>登录</Dialog>}
            </div>
          </div>
        </div>
      </div>
      <div className={style.subnav} />
      <button
        onClick={() => {
          setCount(count + 1)
          dispatch(setLoginType(!isLogin))
        }}>
        Click me{count}
      </button>
    </React.Fragment>
  )
}
