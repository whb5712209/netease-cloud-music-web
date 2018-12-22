import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import style from './top.module.css'

export default memo(() => {
  return (
    <div className={`${style.box}`}>
      <div className='ncmw-wrap'>
        <ul className={`${style.ul} `}>
          <li className={`${style.li} ${style.active}`}>
            <Link to='/discover' className={style.a}>
              <em className={style.em}>推荐</em>
            </Link>
          </li>
          <li className={style.li}>
            <Link to='/discover/toplist' className={style.a}>
              <em className={style.em}>排行榜</em>
            </Link>
          </li>
          <li className={style.li}>
            <Link to='/discover/playlist' className={style.a}>
              <em className={style.em}>歌单</em>
            </Link>
          </li>
          <li className={style.li}>
            <Link to='/discover/djradio' className={style.a}>
              <em className={style.em}>主播电台</em>
            </Link>
          </li>
          <li className={style.li}>
            <Link to='/discover/artist' className={style.a}>
              <em className={style.em}>歌手</em>
            </Link>
          </li>
          <li className={style.li}>
            <Link to='/discover/album' className={style.a}>
              <em className={style.em}>新碟上架</em>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
})
