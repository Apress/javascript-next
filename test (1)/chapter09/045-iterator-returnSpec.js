import {
  expect,
} from 'chai';

import {
  incrementor,
} from '../../src/chapter09/045-iterator-return';

describe('chapter09', () => {
  describe('045-iterator-return', () => {
    it('should define all the objects', () => {
      expect(incrementor).to.be.a('object');
    });
  });
});
