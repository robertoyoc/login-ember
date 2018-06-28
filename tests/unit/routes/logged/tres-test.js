import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | logged/tres', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:logged/tres');
    assert.ok(route);
  });
});
