import { helper } from 'ember-helper'
import { padEnd as stringPad } from 'ember-pad/utils/pad'

export function padEnd(params) {
  return stringPad(params[0], params[1], params[2])
}

export default helper(padEnd)
