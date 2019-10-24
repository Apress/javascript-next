import {
  expect,
} from 'chai';

import asyncGenerator from '../../src/chapter15/030-simple-sync-generator';

describe('chapter15', () => {
  describe('030-simple-sync-generator', () => {
    it('should define all the objects', () => {
      expect(asyncGenerator()[Symbol.iterator]).not.to.be.undefined;
    });

    it('should define the properties correctly', () => {
      const gen = asyncGenerator();
      expect(gen.next().value).to.be.a('promise');
      expect(gen.next().value).to.be.a('promise');
      expect(gen.next().value).to.be.undefined;
    });
  });
});
