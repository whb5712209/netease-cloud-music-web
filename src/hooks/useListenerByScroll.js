import { useState, useEffect } from 'react'
import { getScrollingElement } from '../utils/dom'
import { throttle } from '../utils/func'
const body = getScrollingElement()
function scrollToTop (setVisible) {
  if (body.scrollTop) {
    setVisible(true)
  } else {
    setVisible(false)
  }
}

export default function useListenerByScrollToTop (fn) {
  const [ visible, setVisible ] = useState(false)
  useEffect(() => {
    const _scrollToTop = throttle(scrollToTop).bind(this, setVisible)
    window.addEventListener('scroll', _scrollToTop)
    return () => {
      window.removeEventListener('scroll', _scrollToTop)
    }
  }, [])
  return [ visible ]
}
