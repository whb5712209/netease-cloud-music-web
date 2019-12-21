import React, { memo } from 'react'
import style from './input.module.css'
const defaultProps = { props: {} as { [name: string]: any } }
type DefaultProps = typeof defaultProps
export interface FieldProps {
  Prefix?: React.ReactElement<any>
  Suffix?: React.ReactElement<any>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type: string
  disabled?: boolean
  className?: string
}
const Field: React.SFC<
  FieldProps
> = memo(({ Prefix = null, disabled = false, Suffix = null, onChange, type = 'text', className = '', ...props }) => {
  return (
    <div className={`${style.inputBox} ${className}`}>
      {Prefix && <Prefix.type {...Prefix.props} />}
      <input type='text' {...props} onChange={onChange} className={style.input} />
      {Suffix && <Suffix.type {...Suffix.props} />}
    </div>
  )
})

export default Field
