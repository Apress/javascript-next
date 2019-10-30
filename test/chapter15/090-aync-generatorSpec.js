import {
  expect,
} from 'chai';

import asyncGenerator from '../../src/chapter15/090-aync-generator';

describe('chapter15', () => {
  describe('090-aync-generator', () => {
    it('should define all the objects', () => {
      expect(asyncGenerator()[Symbol.asyncIterator]).not.to.be.undefined;
      expect(asyncGenerator()[Symbol.asyncIterator]).to.be.a('function');
    });

    it('should define the properties correctly', async () => {
      const gen = asyncGenerator();
      expect((await gen.next()).value).to.be.equal('My value is 10 at index: 1');
      expect((await gen.next()).value).to.be.equal('My value is 20 at index: 2');
      expect((await gen.next()).done).to.be.equal(true);
    });
  });
});
