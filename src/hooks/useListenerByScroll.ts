import { useState, useEffect } from 'react'
import { getScrollingElement } from '../utils/dom'
import { throttle } from '../utils/func'
const body = getScrollingElement()

export default function useListenerByScrollToTop () {
  const [ visible, setVisible ] = useState(false)
  useEffect(() => {
    function scrollToTop () {
      if (body.scrollTop) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    const onScrollToTop = throttle(scrollToTop)
    window.addEventListener('scroll', onScrollToTop)
    return () => {
      window.removeEventListener('scroll', onScrollToTop)
    }
  }, [])
  return [ visible ]
}
