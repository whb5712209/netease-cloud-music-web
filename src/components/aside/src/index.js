import React, { memo } from 'react'
import style from './index.module.css'
import useListenerByScrollToTop from '../../../hooks/useListenerByScroll'
export default memo(() => {
  const [ visible ] = useListenerByScrollToTop()
  return <aside className={`${style.m_back} ${visible ? '' : style.none}`}>top</aside>
})
