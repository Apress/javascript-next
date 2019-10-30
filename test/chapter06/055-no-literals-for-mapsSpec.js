import {
  expect,
} from 'chai';

import {
  kiran,
  favFruits,
  numbersInHindi,
} from '../../src/chapter06/055-no-literals-for-maps';

describe('chapter06', () => {
  describe('055-no-literals-for-maps', () => {
    it('should define all the objects', () => {
      expect(kiran).to.be.a('object');
      expect(favFruits).to.be.a('array');
      expect(numbersInHindi).to.be.a('map');
    });

    it('should have the right attributes', () => {
      expect(kiran.name).to.be.equal('kiran');
      expect(favFruits.length).to.be.equal(3);
      expect(numbersInHindi.get(3)).to.be.equal('teen');
    });
  });
});
