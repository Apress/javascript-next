import {
  expect,
} from 'chai';

import set from '../../src/chapter06/100-sets-whole-manipulation';

describe('chapter06', () => {
  describe('100-sets-whole-manipulation', () => {
    it('should define all the objects', () => {
      expect(set).to.be.a('set');
    });

    it('should have cleared the keys', () => {
      expect(set.size).to.be.equal(0);
    });
  });
});
