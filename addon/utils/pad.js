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
