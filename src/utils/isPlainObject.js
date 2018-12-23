const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag (value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

function isObjectLike (value) {
  return typeof value == 'object' && value !== null
}

function isPlainObject (value) {
  if (!isObjectLike(value) || getTag(value) != '[object Object]') {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}

export default isPlainObject
