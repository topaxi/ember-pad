import { padStart } from '../../../helpers/pad-start'
import { module, test } from 'qunit'

module('Unit | Helper | pad start')

test('it works', function(assert) {
  assert.expect(8)

  assert.equal(padStart([ 50, 4 ]), '0050')
  assert.equal(padStart([ 50, 3 ]), '050')
  assert.equal(padStart([ 50, 2 ]), '50')
  assert.equal(padStart([ 50, 1 ]), '50')

  assert.equal(padStart([ 50, 4, 'a' ]), 'aa50')
  assert.equal(padStart([ 50, 3, 'a' ]), 'a50')
  assert.equal(padStart([ 50, 2, 'a' ]), '50')
  assert.equal(padStart([ 50, 1, 'a' ]), '50')
})
