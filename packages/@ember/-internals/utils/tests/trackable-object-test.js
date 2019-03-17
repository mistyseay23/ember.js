import { TRACKABLE_OBJECT, isTrackableObject } from '..';
import { moduleFor, AbstractTestCase } from 'internal-test-helpers';

moduleFor(
  '@ember/-internals/utils Trackable Object',
  class extends AbstractTestCase {
    ['@test arrays'](assert) {
      assert.equal(isTrackableObject([]), true);
    }

    ['@test classes'](assert) {
      class Test {}
      Test.prototype[TRACKABLE_OBJECT] = true;

      let instance = new Test();

      assert.equal(isTrackableObject(instance), true);
    }
  }
);
