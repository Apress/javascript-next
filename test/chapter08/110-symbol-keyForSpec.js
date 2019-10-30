import {
  expect,
} from 'chai';

import {
  global,
  key,
} from '../../src/chapter08/110-symbol-keyFor';

describe('chapter08', () => {
  describe('110-symbol-keyFor', () => {
    it('should define all the objects', () => {
      expect(global).to.be.a('symbol');
      expect(key).to.be.a('string');
    });

    it('should define the behavior correctly', () => {
      expect(key).to.be.equal(Symbol.keyFor(global));
    });
  });
});
