import { padStart, padStartTpl } from '../../../utils/pad'
import { module, test } from 'qunit'

module('Unit | Utility | pad start')

test('it works', function(assert) {
  assert.expect(8)

  assert.equal(padStart(50, 4), '0050')
  assert.equal(padStart(50, 3), '050')
  assert.equal(padStart(50, 2), '50')
  assert.equal(padStart(50, 1), '50')

  assert.equal(padStart(50, 4, 'a'), 'aa50')
  assert.equal(padStart(50, 3, 'a'), 'a50')
  assert.equal(padStart(50, 2, 'a'), '50')
  assert.equal(padStart(50, 1, 'a'), '50')
})

test('it works as tagged template', function(assert) {
  assert.expect(6)

  assert.equal(padStartTpl(2)`${0}:${0}`,    '00:00')
  assert.equal(padStartTpl(2)`${10}:${0}`,   '10:00')
  assert.equal(padStartTpl(2)`${100}:${0}`, '100:00')

  assert.equal(padStartTpl(2, ' ')`${0}:${0}`,    ' 0: 0')
  assert.equal(padStartTpl(2, ' ')`${10}:${0}`,   '10: 0')
  assert.equal(padStartTpl(2, ' ')`${100}:${0}`, '100: 0')
})

test('it returns a function for tagged templates without param', function(assert) {
  assert.expect(6)

  assert.equal(padStartTpl`${0}:${0}`(2),    '00:00')
  assert.equal(padStartTpl`${10}:${0}`(2),   '10:00')
  assert.equal(padStartTpl`${100}:${0}`(2), '100:00')

  assert.equal(padStartTpl`${0}:${0}`(2, ' '),    ' 0: 0')
  assert.equal(padStartTpl`${10}:${0}`(2, ' '),   '10: 0')
  assert.equal(padStartTpl`${100}:${0}`(2, ' '), '100: 0')
})
