import {
  expect,
} from 'chai';

import SimpleIterable from '../../src/chapter15/060-simple-async-iterable-return';

describe('chapter15', () => {
  describe('060-simple-async-iterable-return', () => {
    it('should define all the objects', () => {
      expect(SimpleIterable).to.be.a('function');
    });

    it('should define the properties correctly', () => {
      expect(new SimpleIterable()[Symbol.asyncIterator]).to.be.a('function');

      const iterator = new SimpleIterable()[Symbol.asyncIterator]();
      expect(iterator).to.be.a('object');
      const promise = iterator.next();
      expect(promise).to.be.a('promise');
      promise.then((resp) => {
        expect(resp.value).to.be.equal(1);
        expect(resp.done).to.be.equal(false);
      });

      const done = iterator.return();
      expect(done).to.be.a('promise');
      done.then((resp) => {
        expect(resp.done).to.be.equal(true);
      });
    });
  });
});
