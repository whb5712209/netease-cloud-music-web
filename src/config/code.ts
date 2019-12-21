interface codeType {
  readonly [index: number]: string
}
const codeObj: codeType = {
  404: '无效地址',
  500: '服务端崩溃了',
  301: '请登录账户',
  0: '请检查网络'
}
// const onCodeToMsg = (code: string | number) => {}
// export default function
export default codeObj
