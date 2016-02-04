import { helper } from 'ember-helper'
import { default as stringPad } from 'ember-pad/utils/pad'

export function pad(params) {
  return stringPad(params[0], params[1], params[2])
}

export default helper(pad)
