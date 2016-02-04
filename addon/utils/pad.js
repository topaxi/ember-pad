/**
 * String pad function
 *
 * @method pad
 * @for utils.Pad
 * @param {string} n The string to pad
 * @param {number} width The width to which the string needs to be padded
 * @param {string} [z='0'] The character to pad the string with
 * @return {string} The padded string
 */
export default function pad(n, width, z = '0') {
  let nstr = String(n)
  return nstr.length >= width ? nstr : new Array(width - nstr.length + 1).join(z) + nstr
}

/*
 * Template literal function
 *
 * padTpl`${0}:${0}`(2)   === '00:00'
 * padTpl(2)`${0}:${0}(2) === '00:00'
 */
export function padTpl(strings, ...values) {
  if (Array.isArray(strings)) {
    return (width, z) =>
      processTpl(strings, values, width, z)
  }

  let width = strings
  let z     = values[0]

  return (strings, ...values) =>
    processTpl(strings, values, width, z)
}

function processTpl(strings, values, width, z) {
  let reducer = (str, v, i) =>
    str + strings[i] + pad(v, width, z)
  return values.reduce(reducer, '')
}
