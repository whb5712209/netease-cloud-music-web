import React, { useState, FC, useEffect } from 'react'
import * as Container from '../../components/container'
import * as Header from '../../components/header'
import API from '../../api/index'
import ajax from '../../store/actions/ajax'
import { ActionTypes } from '../../store/actions/types'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import style from './home.module.css'

interface IHomeProps {
  dispatch: Dispatch
}
interface IPersonalize {
  picUrl: string
  id: string | number
  name: string
}



interface IAlbum {
  picId: string
  blurPicUrl: string
  company: string | number
  artists: { name: string }[]
}

interface ITop {
  playlist: {
    coverImgUrl: string
    tracks: any[]
    name: string
  },
  privileges: any[]
}
const App: FC<IHomeProps> = ({ dispatch }) => {
  const [personalizeList, setPersonalizeList] = useState<IPersonalize[]>([])
  const [topAlbumList, setTopAlbumList] = useState<IAlbum[]>([])

  const [topFast, setTopFast] = useState<ITop>({ playlist: { coverImgUrl: '', name: '', tracks: [] }, privileges: [] })
  const [topNew, setTopNew] = useState<ITop>({ playlist: { coverImgUrl: '', name: '', tracks: [] }, privileges: [] })
  const [topOriginal, setTopOriginal] = useState<ITop>({ playlist: { coverImgUrl: '', name: '', tracks: [] }, privileges: [] })

  useEffect(() => {
    dispatch(ajax(API.getPersonalized, { limit: 8 })).then((res: []) => {
      setPersonalizeList(res)
    })
    dispatch(ajax(API.getTopAlbum, { limit: 5 })).then((res: { albums: [] }) => {
      setTopAlbumList(res.albums)
    })
    dispatch(ajax(API.getTopList, { idx: 3 })).then((res: ITop) => {
      res.playlist.tracks.length = 10
      setTopFast(res)
    })
    dispatch(ajax(API.getTopList, { idx: 0 })).then((res: ITop) => {
      res.playlist.tracks.length = 10
      setTopNew(res)
    })
    dispatch(ajax(API.getTopList, { idx: 2 })).then((res: ITop) => {
      res.playlist.tracks.length = 10
      setTopOriginal(res)
    })
  }, [dispatch])

  return (
    <div>
      <Header.Top />
      <Container.Comm className={style.box}>
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
              <li className={style.bill_itme}>
                <div className={style.bill_tit_box}>
                  <img src={topFast.playlist.coverImgUrl} alt='' className={style.bill_img} />
                  <p>{topFast.playlist.name}</p>
                </div>
                <ul>
                  {topFast.playlist.tracks.map((item, index) => (
                    <li className={style.fast_item} key={item.id}>
                      <p className={style.bill_order}>{index + 1}.</p>
                      <p className={style.bill_name}>{item.name}</p>
                    </li>
                  ))}
                  <li className={`${style.more} ${style.original_item}`}>查看全部</li>
                </ul>
              </li>
              <li className={style.bill_itme}>
                <div className={style.bill_tit_box}>
                  <img src={topNew.playlist.coverImgUrl} alt='' className={style.bill_img} />
                  <p>{topNew.playlist.name}</p>
                </div>
                <ul>
                  {topNew.playlist.tracks.map((item, index) => (
                    <li className={style.news_item} key={item.id}>
                      <p className={style.bill_order}>{index + 1}.</p>
                      <p className={style.bill_name}>{item.name}</p>
                    </li>
                  ))}
                  <li className={`${style.more} ${style.original_item}`}>查看全部</li>
                </ul>
              </li>
              <li className={style.bill_itme}>
                <div className={style.bill_tit_box}>
                  <img src={topOriginal.playlist.coverImgUrl} alt='' className={style.bill_img} />
                  <p>{topOriginal.playlist.name}</p>
                </div>
                <ul>
                  {topOriginal.playlist.tracks.map((item, index) => (
                    <li className={style.original_item} key={item.id}>
                      <p className={style.bill_order}>{index + 1}.</p>
                      <p className={style.bill_name}>{item.name}</p>
                    </li>
                  ))}
                  <li className={`${style.more} ${style.original_item}`}>查看全部</li>
                </ul>
              </li>
            </ul>
          </Container.Cart>
        </div>
        <div className={style.assistant} />
      </Container.Comm>
    </div>
  )
}
// export default App

export default connect((dispatch: Dispatch<ActionTypes>) => {
  return {
    dispatch
  }
})(App)