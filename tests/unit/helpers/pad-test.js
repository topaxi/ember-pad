import { pad } from '../../../helpers/pad'
import { module, test } from 'qunit'

module('Unit | Helper | pad')

test('it works', function(assert) {
  assert.expect(8)

  assert.equal(pad([ 50, 4 ]), '0050')
  assert.equal(pad([ 50, 3 ]), '050')
  assert.equal(pad([ 50, 2 ]), '50')
  assert.equal(pad([ 50, 1 ]), '50')

  assert.equal(pad([ 50, 4, 'a' ]), 'aa50')
  assert.equal(pad([ 50, 3, 'a' ]), 'a50')
  assert.equal(pad([ 50, 2, 'a' ]), '50')
  assert.equal(pad([ 50, 1, 'a' ]), '50')
})
