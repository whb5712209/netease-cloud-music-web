import { useState } from 'react'
interface IUseInputValue {
  (initialValue: string): [string, (e: { target: HTMLInputElement | HTMLTextAreaElement }) => void]
}
const useInputValue: IUseInputValue = (initialValue) => {
  const [ value, setValue ] = useState(initialValue)
  return [
    value,
    (e) => {
      setValue(e.target.value || e.target.innerText)
    }
  ]
}
export default useInputValue
