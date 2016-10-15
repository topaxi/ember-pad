function pad(len, width, z) {
  let s = z
  let w = width - len

  while (--w) {
    s += z
  }

  return s
}

/**
 * Pad the string at the start.
 *
 * @method padStart
 * @for utils.Pad
 * @param {string} n The string to pad
 * @param {number} width The width to which the string needs to be padded
 * @param {string} [z='0'] The character to pad the string with
 * @return {string} The padded string
 */
export function padStart(n, width, z = '0') {
  let nstr = String(n)
  let len  = nstr.length

  if (len >= width) {
    return nstr
  }

  return pad(len, width, z) + nstr
}

export default padStart

/**
 * Pad the string at the end.
 *
 * @method padEnd
 * @for utils.Pad
 * @param {string} n The string to pad
 * @param {number} width The width to which the string needs to be padded
 * @param {string} [z='0'] The character to pad the string with
 * @return {string} The padded string
 */
export function padEnd(n, width, z = '0') {
  let nstr = String(n)
  let len  = nstr.length

  if (len >= width) {
    return nstr
  }

  return nstr + pad(len, width, z)
}

/*
 * Template literal function for padding the string at the start.
 *
 * padStartTpl`${1}:${2}`(2) === '01:02'
 * padStartTpl(2)`${1}:${2}` === '01:02'
 */
export function padStartTpl(strings, ...values) {
  if (Array.isArray(strings)) {
    return (width, z) =>
      processTpl(strings, values, width, z, padStart)
  }

  let width = strings
  let z     = values[0]

  return (strings, ...values) =>
    processTpl(strings, values, width, z, padStart)
}

export { padStartTpl as padTpl }

/*
 * Template literal function for padding the string at the end.
 *
 * padEndTpl`${1}:${2}`(2) === '10:20'
 * padEndTpl(2)`${1}:${2}` === '10:20'
 */
export function padEndTpl(strings, ...values) {
  if (Array.isArray(strings)) {
    return (width, z) =>
      processTpl(strings, values, width, z, padEnd)
  }

  let width = strings
  let z     = values[0]

  return (strings, ...values) =>
    processTpl(strings, values, width, z, padEnd)
}

function processTpl(strings, values, width, z, pad) {
  let reducer = (str, v, i) =>
    str + strings[i] + pad(v, width, z)
  return values.reduce(reducer, '')
}
