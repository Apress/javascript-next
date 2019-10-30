import {
  expect,
} from 'chai';

import {
  symbol1,
  symbol2,
  symbol3,
} from '../../src/chapter08/040-symbols-are-unique';

describe('chapter08', () => {
  describe('040-symbols-are-unique', () => {
    it('should define all the objects', () => {
      expect(symbol1).to.be.a('symbol');
      expect(symbol2).to.be.a('symbol');
      expect(symbol3).to.be.a('symbol');
    });

    it('should define the behavior correctly', () => {
      expect(symbol1 === symbol2).to.be.false;
      expect(symbol3 === symbol2).to.be.false;
    });
  });
});
