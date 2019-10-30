import {
  expect,
} from 'chai';

import SimpleRejectingIterable from '../../src/chapter15/070-simple-async-iterable-try-catch';

describe('chapter15', () => {
  describe('070-simple-async-iterable-try-catch', () => {
    it('should define all the objects', () => {
      expect(SimpleRejectingIterable).to.be.a('function');
    });

    it('should define the properties correctly', () => {
      expect(new SimpleRejectingIterable()[Symbol.asyncIterator]).to.be.a('function');

      const iterator = new SimpleRejectingIterable()[Symbol.asyncIterator]();
      expect(iterator).to.be.a('object');

      iterator.next().catch(e => expect(e).not.to.be.undefined);
    });
  });
});
