import {
  expect,
} from 'chai';

import union from '../../src/chapter06/050-maps-from-other-maps';

describe('chapter06', () => {
  describe('050-maps-from-other-maps', () => {
    it('should define all the objects', () => {
      expect(union).to.be.a('map');
    });

    it('should have the right size', () => {
      expect(union.size).to.be.equal(3);
    });
  });
});
