import React, { useState, useContext, useEffect } from 'react'
import Container from '../../components/container'
import Header from '../../components/header'
import API from '../../api/index'
import ajax from '../../store/actions/ajax'
import GlobalContext from '../../store'

import style from './home.module.css'
export default function App () {
  const { dispatch } = useContext(GlobalContext)
  const [ personalizeList, setPersonalizeList ] = useState([])
  const [ topAlbumList, setTopAlbumList ] = useState([])
  useEffect(() => {
    dispatch(ajax(API.getPersonalized, { limit: 8 })).then((res) => {
      setPersonalizeList(res)
    })
    dispatch(ajax(API.getTopAlbum, { limit: 5 })).then((res) => {
      setTopAlbumList(res.albums)
    })
  }, [])
  return (
    <div>
      <Header.Top />
      <Container className={style.box}>
        <div className={style.main}>
          <Container.Cart title='热门推荐'>
            <ul className={style.item_box}>
              {personalizeList.map((item) => {
                return (
                  <li className={style.item} key={item.id}>
                    <img className={style.img} src={item.picUrl} alt='' />
                    <p className={style.tit}>{item.name}</p>
                  </li>
                )
              })}
            </ul>
          </Container.Cart>
          <Container.Cart title='新碟上架'>
            <ul className={style.disk}>
              {topAlbumList.map((item) => (
                <li className={style.disk_item} key={item.picId}>
                  <img className={style.disk_img} src={item.blurPicUrl} alt='垂直活着，水平留恋着。' />
                  <p className={style.f_thide}>{item.company}</p>
                  <p className={style.f_thide}>{item.artists[0].name}</p>
                </li>
              ))}
            </ul>
          </Container.Cart>

          <Container.Cart title='榜单'>
            <ul className={style.bill}>
              <li>
                <div className={style.bill_tit}>
                  <p>云音乐飙升榜</p>
                </div>
              </li>
              <li>
                <div className={style.bill_tit}>
                  <p>云音乐新歌榜</p>
                </div>
              </li>
              <li>
                <div className={style.bill_tit}>
                  <p>云音乐原创歌曲榜</p>
                </div>
              </li>
            </ul>
          </Container.Cart>
        </div>
        <div className={style.assistant} />
      </Container>
    </div>
  )
}
