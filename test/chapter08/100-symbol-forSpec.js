import {
  expect,
} from 'chai';

import {
  global,
  otherGlobal,
} from '../../src/chapter08/100-symbol-for';

describe('chapter08', () => {
  describe('100-symbol-keyFor', () => {
    it('should define all the objects', () => {
      expect(global).to.be.a('symbol');
      expect(otherGlobal).to.be.a('symbol');
    });

    it('should define the behavior correctly', () => {
      expect(global).to.be.equal(otherGlobal);
    });
  });
});
