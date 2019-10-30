import {
  expect,
} from 'chai';

import {
  friedmanBooks,
  hoyteBook,
} from '../../src/chapter07/080-trailing-comma-arrays-objects';

describe('chapter07', () => {
  describe('080-trailing-comma-arrays-objects', () => {
    it('should define all the objects', () => {
      expect(friedmanBooks).to.be.a('array');
      expect(hoyteBook).to.be.a('object');
    });

    it('should correctly initialize the object', () => {
      expect(friedmanBooks.length).to.be.equal(3);
      expect(hoyteBook.author).to.be.equal('Doug Hoyte');
    });
  });
});
