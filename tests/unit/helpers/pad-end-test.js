import { padEnd } from '../../../helpers/pad-end'
import { module, test } from 'qunit'

module('Unit | Helper | pad end')

test('it works', function(assert) {
  assert.expect(8)

  assert.equal(padEnd([ 50, 4 ]), '5000')
  assert.equal(padEnd([ 50, 3 ]), '500')
  assert.equal(padEnd([ 50, 2 ]), '50')
  assert.equal(padEnd([ 50, 1 ]), '50')

  assert.equal(padEnd([ 50, 4, 'a' ]), '50aa')
  assert.equal(padEnd([ 50, 3, 'a' ]), '50a')
  assert.equal(padEnd([ 50, 2, 'a' ]), '50')
  assert.equal(padEnd([ 50, 1, 'a' ]), '50')
})
