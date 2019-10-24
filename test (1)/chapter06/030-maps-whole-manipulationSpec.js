import {
  expect,
} from 'chai';

import map from '../../src/chapter06/030-maps-whole-manipulation';

describe('chapter06', () => {
  describe('030-maps-whole-manipulation', () => {
    it('should define all the objects', () => {
      expect(map).to.be.a('map');
    });

    it('should have cleared the keys', () => {
      expect(map.size).to.be.equal(0);
    });
  });
});
