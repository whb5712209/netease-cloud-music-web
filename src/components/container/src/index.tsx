import React, { memo } from 'react'

export interface ContainerProps {
  className?: string
  children: React.ReactNode
}
const Container: React.SFC<ContainerProps> = memo(({ children, className = '', ...props }) => {
  return (
    <div className={`ncmw-page-box ${className} `} {...props}>
      {children}
    </div>
  )
})
export default Container
