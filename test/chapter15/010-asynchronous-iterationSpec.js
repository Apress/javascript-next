import {
  expect,
} from 'chai';

import promiseList from '../../src/chapter15/010-asynchronous-iteration';

describe('chapter15', () => {
  describe('010-asynchronous-iteration', () => {
    it('should define all the objects', () => {
      expect(promiseList).to.be.a('array');
    });
  });
});
