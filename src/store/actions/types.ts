export interface IUserState extends IIsLoginState, IUserInfo {}

export interface IAjaxRespone {
  code: number
  data: any
}
export interface IAjaxParamsParams {
  ajaxFunc: (params: any) => {}
  params: any
}

export interface IUserInfo {
  userId: string
  nickname: string
}
export interface IIsLoginState {
  isLogin: boolean
}
export interface IAjax {
  response: 0 | 1 | 2
}
export const USER_INFO = 'USER_INFO'
export const USER_LOGIN_TYPE = 'USER_LOGIN_TYPE'

export type userActionTypes = ISetUserInfo | ISetLoginType
export type ajaxActionTypes = ISetAjaxStart | ISetAjaxSuccess | ISetAjaxError | IAjaxSend

export type ActionTypes = userActionTypes | ajaxActionTypes

export interface ISetUserInfo {
  type: typeof USER_INFO
  data: IUserInfo
}
export interface ISetLoginType {
  type: typeof USER_LOGIN_TYPE
  data: boolean
}

export interface ISetAjaxStart {
  type: typeof REQUEST_TYPE
  data: 0
}
export interface ISetAjaxSuccess {
  type: typeof REQUEST_TYPE
  data: 1
}

export interface ISetAjaxError {
  type: typeof REQUEST_TYPE
  data: 2
}

export interface IAjaxSend {
  type: typeof REQUEST_XHR
  data: any
}

export const REQUEST_TYPE = 'REQUEST_START'
export const REQUEST_XHR = 'REQUEST_XHR'

export const URL_MATCH = 'URL_MATCH'

export interface ajaxRespone {
  code: number
  data: object
}
export interface ajaxParamsParams {
  ajaxFunc: (params: any) => {}
  params: object
}
