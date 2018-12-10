import React from 'react'

export default function Button ({ className, children, ...props }) {
  return (
    <div className={className}>
      <button type='text' {...props}>
        {children}
      </button>
    </div>
  )
}
