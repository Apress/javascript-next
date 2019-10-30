import {
  expect,
} from 'chai';

import {
  generatorWithPushDemo,
} from '../../src/chapter09/070-simple-generator-push';

describe('chapter09', () => {
  describe('070-simple-generator-push', () => {
    it('should define all the objects', () => {
      expect(generatorWithPushDemo()[Symbol.iterator]).not.to.be.undefined;
    });
  });
});
