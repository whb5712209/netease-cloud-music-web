import React, { memo, useState, useEffect } from 'react'
import style from './index.module.css'
import { getScrollingElement } from '../../../utils/dom'
import { throttle } from '../../../utils/func'
const body = getScrollingElement()
function scrollToTop (visible, setVisible) {
  if (body.scrollTop) {
    if (!visible) {
      setVisible(true)
    }
  } else {
    if (visible) {
      setVisible(false)
    }
  }
}
export default memo(() => {
  const [ visible, setVisible ] = useState(false)
  useEffect(
    () => {
      const _scrollToTop = throttle(scrollToTop.bind(this, visible, setVisible))
      window.addEventListener('scroll', _scrollToTop)
      return () => {
        window.removeEventListener('scroll', _scrollToTop)
      }
    },
    [ visible ]
  )

  return <aside className={`${style.m_back} ${visible ? '' : style.none}`}>top</aside>
})
