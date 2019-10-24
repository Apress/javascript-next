/* eslint-disable no-new */
import {
  expect,
} from 'chai';

import SuperHero from '../../src/chapter11/040-classes-static-methods';

describe('chapter11', () => {
  describe('040-classes-static-methods', () => {
    it('should define all the objects', () => {
      expect(SuperHero).not.to.be.undefined;
    });

    it('should define all properties for SuperHero correctly', () => {
      new SuperHero('raju', 'talking');
      new SuperHero('nate', 'slides');
      // we create two inside the file itself
      expect(SuperHero.count()).to.be.equal(4);
    });
  });
});
