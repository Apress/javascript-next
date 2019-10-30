import {
  expect,
} from 'chai';

import arrayList from '../../src/chapter09/030-simple-iterable';

describe('chapter09', () => {
  describe('030-simple-iterable', () => {
    it('should define all the objects', () => {
      expect(arrayList).to.be.a('object');
    });

    it('should define the properties correctly', () => {
      expect(arrayList[Symbol.iterator]).to.be.a('function');
      const iterator = arrayList[Symbol.iterator]();
      expect(iterator).to.be.a('object');
      expect(iterator.next()).to.be.eql({
        done: false,
        value: 1,
      });
    });
  });
});
