import {
  expect,
} from 'chai';

import {
  inner,
  outer,
} from '../../src/chapter09/090-yield-generator';

describe('chapter09', () => {
  describe('090-yield*-generator', () => {
    it('should define all the objects', () => {
      expect(inner()[Symbol.iterator]).not.to.be.undefined;
      expect(outer()[Symbol.iterator]).not.to.be.undefined;
    });
  });
});
