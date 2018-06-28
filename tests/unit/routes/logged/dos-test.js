import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | logged/dos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:logged/dos');
    assert.ok(route);
  });
});
