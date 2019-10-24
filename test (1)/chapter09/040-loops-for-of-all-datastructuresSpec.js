import {
  expect,
} from 'chai';

import {
  array,
  set,
  map,
  string,
} from '../../src/chapter09/040-loops-for-of-all-datastructures';

describe('chapter09', () => {
  describe('040-loops-for-of-all-datastructures', () => {
    it('should define all the objects', () => {
      expect(array).to.be.a('array');
      expect(set).to.be.a('set');
      expect(map).to.be.a('map');
      expect(string).to.be.a('string');
    });
  });
});
