import {
  expect,
} from 'chai';

import {
  arr,
} from '../../src/chapter09/010-for-in-loop-arrays';

describe('chapter09', () => {
  describe('010-for-in-loop-arrays', () => {
    it('should define all the objects', () => {
      expect(arr).to.be.a('array');
    });
  });
});
