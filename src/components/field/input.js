import React from 'react'

export default function Input ({ className, ...props }) {
  return (
    <div className={className}>
      <input type='text' {...props} />
    </div>
  )
}
