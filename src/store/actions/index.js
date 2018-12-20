export const REQUEST_TYPE = 'REQUEST_START'

export default function ajax (ajaxFunc, params, sucCallback, failCallback) {
  return (dispatch) => {
    return ajaxFunc(params).then(
      (data) => {
        sucCallback && sucCallback(data)
        return data
      },
      (data) => {
        failCallback && failCallback(data)
        return data
      }
    )
  }
}

export function setAjaxStart () {
  return {
    type: REQUEST_TYPE,
    data: 1
  }
}

export function setAjaxSuccess () {
  return {
    type: REQUEST_TYPE,
    data: 2
  }
}

export function setAjaxError () {
  return {
    type: REQUEST_TYPE,
    data: 3
  }
}
