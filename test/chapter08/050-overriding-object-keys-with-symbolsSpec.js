import {
  expect,
} from 'chai';

import {
  ITERATOR,
  iterableObject,
  objWithExistingKey,
} from '../../src/chapter08/050-overriding-object-keys-with-symbols';

describe('chapter08', () => {
  describe('050-overriding-object-keys-with-symbols', () => {
    it('should define all the objects', () => {
      expect(ITERATOR).to.be.a('symbol');
      expect(iterableObject).to.be.a('object');
      expect(objWithExistingKey).to.be.a('object');
    });

    it('should define the properties correctly', () => {
      expect(iterableObject.name).to.be.equal('iterable');
      expect(iterableObject[ITERATOR]).to.be.a('function');

      expect(objWithExistingKey[ITERATOR]).to.be.a('function');
      expect(objWithExistingKey[ITERATOR]()).to.be.equal('Works!');
    });
  });
});
