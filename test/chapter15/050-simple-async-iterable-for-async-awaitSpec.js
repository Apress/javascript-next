import {
  expect,
} from 'chai';

import result from '../../src/chapter15/050-simple-async-iterable-for-async-await';

describe('chapter15', () => {
  describe('050-simple-async-iterable-for-async-await', () => {
    it('should define all the objects', () => {
      expect(result).to.be.a('promise');
    });
  });
});
