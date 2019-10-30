import {
  expect,
} from 'chai';

import promiseList from '../../src/chapter15/020-asynchronous-generator-async-await';

describe('chapter15', () => {
  describe('020-asynchronous-generator-async-await', () => {
    it('should define all the objects', () => {
      expect(promiseList).to.be.a('array');
    });
  });
});
