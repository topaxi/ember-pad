import { padEnd, padEndTpl } from '../../../utils/pad';
import { module, test } from 'qunit';

module('Unit | Utility | pad end', function () {
  test('it works', function (assert) {
    assert.expect(8);

    assert.equal(padEnd(50, 4), '5000');
    assert.equal(padEnd(50, 3), '500');
    assert.equal(padEnd(50, 2), '50');
    assert.equal(padEnd(50, 1), '50');

    assert.equal(padEnd(50, 4, 'a'), '50aa');
    assert.equal(padEnd(50, 3, 'a'), '50a');
    assert.equal(padEnd(50, 2, 'a'), '50');
    assert.equal(padEnd(50, 1, 'a'), '50');
  });

  test('it works as tagged template', function (assert) {
    assert.expect(6);

    assert.equal(padEndTpl(2)`${0}:${0}`, '00:00');
    assert.equal(padEndTpl(2)`${10}:${0}`, '10:00');
    assert.equal(padEndTpl(2)`${100}:${0}`, '100:00');

    assert.equal(padEndTpl(2, ' ')`${0}:${0}`, '0 :0 ');
    assert.equal(padEndTpl(2, ' ')`${10}:${0}`, '10:0 ');
    assert.equal(padEndTpl(2, ' ')`${100}:${0}`, '100:0 ');
  });

  test('it returns a function for tagged templates without param', function (assert) {
    assert.expect(6);

    assert.equal(padEndTpl`${0}:${0}`(2), '00:00');
    assert.equal(padEndTpl`${10}:${0}`(2), '10:00');
    assert.equal(padEndTpl`${100}:${0}`(2), '100:00');

    assert.equal(padEndTpl`${0}:${0}`(2, ' '), '0 :0 ');
    assert.equal(padEndTpl`${10}:${0}`(2, ' '), '10:0 ');
    assert.equal(padEndTpl`${100}:${0}`(2, ' '), '100:0 ');
  });
});
