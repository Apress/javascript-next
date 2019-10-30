import {
  expect,
} from 'chai';

import union from '../../src/chapter06/110-sets-from-other-set';

describe('chapter06', () => {
  describe('110-sets-from-other-set', () => {
    it('should define all the objects', () => {
      expect(union).to.be.a('set');
    });

    it('should have the right size', () => {
      expect(union.size).to.be.equal(3);
    });
  });
});
