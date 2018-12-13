export const REQUEST_TYPE = 'REQUEST_START'

export function ajax (dispatch, ajaxFunc, params, sucCallback, failCallback) {
  dispatch(setAjaxStart())
  return ajaxFunc(params).then(
    (data) => {
      dispatch(setAjaxSuccess())
      if (sucCallback) sucCallback(data)
      else return data
    },
    (data) => {
      dispatch(setAjaxError())
      if (failCallback) failCallback(data)
      else return Promise.reject(data)
    }
  )
}
export default new Proxy(ajax, {
  apply: (target, ctx, [ dispatch, ...other ]) => {
    return (ajaxFunc, params, sucCallback, failCallback) => {
      return target(dispatch, ajaxFunc, params, sucCallback, failCallback)
    }
  }
})

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
