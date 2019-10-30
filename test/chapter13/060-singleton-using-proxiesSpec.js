import { expect } from 'chai';

import {
  singletonFactory,
  SuperHeroService,
} from '../../src/chapter13/060-singleton-using-proxies';

describe('chapter13', () => {
  describe('060-singleton-using-proxies', () => {
    it('should define all the objects', () => {
      expect(singletonFactory).not.to.be.undefined;
      expect(singletonFactory).to.be.a('function');
      expect(SuperHeroService).not.to.be.undefined;
      expect(SuperHeroService).to.be.a('function');
    });

    it('should correctly define all the properties', () => {
      const SingletonSuperHeroService = singletonFactory(SuperHeroService);
      const service1 = new SingletonSuperHeroService();
      const service2 = new SingletonSuperHeroService();
      expect(service1 === service2).to.equal(true);
    });
  });
});
