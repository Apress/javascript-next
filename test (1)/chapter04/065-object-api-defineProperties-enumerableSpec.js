import {
  expect,
} from 'chai';

import michelle from '../../src/chapter04/065-object-api-defineProperties-enumerable';

describe('chapter06', () => {
  describe('065-object-api-defineProperties-enumerable', () => {
    it('should define all the objects', () => {
      expect(michelle).to.be.a('object');
    });

    it('should define the properties correctly for michelle', () => {
      expect(michelle.name).to.be.equal('Michelle');
      expect(michelle.hobby).to.be.equal('Gardening');
    });
  });
});
