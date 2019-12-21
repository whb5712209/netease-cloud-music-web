import { Dispatch } from 'redux'

import {
  IAjaxRespone,
  IAjaxSend,
  ISetAjaxStart,
  ISetAjaxSuccess,
  ISetAjaxError,
  REQUEST_TYPE,
  REQUEST_XHR
} from './types'
import Message from '../../components/dialog/message'

export const URL_MATCH = 'URL_MATCH'

interface IAjaxParams {
  (
    ajaxFunc: (params: any) => Promise<IAjaxRespone>,
    params?: any,
    sucCallback?: (params: object) => void,
    failCallback?: (params: object) => void
  ): any
}
const ajax: IAjaxParams = (ajaxFunc, params, sucCallback, failCallback) => {
  return (dispatch: Dispatch) => {
    return ajaxFunc(params).then(
      (data) => {
        sucCallback && sucCallback(data)
        dispatch({
          type: REQUEST_TYPE,
          data: 1
        })
        return data
      },
      (data) => {
        dispatch({
          type: REQUEST_TYPE,
          data: 2
        })
        failCallback && failCallback(data)
        Message.error(data.message)
        return Promise.reject(data)
      }
    )
  }
}
export default ajax

export function xhr (params: any): IAjaxSend {
  return {
    type: REQUEST_XHR,
    data: params
  }
}

export function setAjaxStart (): ISetAjaxStart {
  return {
    type: REQUEST_TYPE,
    data: 0
  }
}

export function setAjaxSuccess (): ISetAjaxSuccess {
  return {
    type: REQUEST_TYPE,
    data: 1
  }
}

export function setAjaxError (): ISetAjaxError {
  return {
    type: REQUEST_TYPE,
    data: 2
  }
}
