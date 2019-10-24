import {
  expect,
} from 'chai';

import arr from '../../src/chapter09/035-for-of-loop-array';

describe('chapter09', () => {
  describe('035-for-of-loop-array', () => {
    it('should define all the objects', () => {
      expect(arr).to.be.a('array');
    });
  });
});
