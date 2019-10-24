import {
  expect,
} from 'chai';

import {
  fibonacci,
} from '../../src/chapter09/060-generator-fibonacci';

describe('chapter09', () => {
  describe('060-generator-fibonacci', () => {
    it('should define all the objects', () => {
      expect(fibonacci()[Symbol.iterator]).not.to.be.undefined;
    });

    it('should define the properties correctly', () => {
      const gen = fibonacci();
      expect(gen.next().value).to.be.equal(0);
      expect(gen.next().value).to.be.equal(1);
      expect(gen.next().value).to.be.equal(1);
      expect(gen.next().value).to.be.equal(2);
    });
  });
});
