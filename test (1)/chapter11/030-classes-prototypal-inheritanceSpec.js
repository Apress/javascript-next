import {
  expect,
} from 'chai';

import {
  SuperHero,
  thor,
} from '../../src/chapter11/030-classes-prototypal-inheritance';

describe('chapter11', () => {
  describe('030-classes-prototypal-inheritance', () => {
    it('should define all the objects', () => {
      expect(SuperHero).not.to.be.undefined;

      expect(thor).not.to.be.undefined;
    });

    it('should define all properties for SuperHero correctly', () => {
      expect(thor.getName).not.to.be.undefined;
      expect(thor.sayHello).not.to.be.undefined;
      expect(thor.superpower).not.to.be.undefined;
      expect(thor.warCry).not.to.be.undefined;
    });
  });
});
