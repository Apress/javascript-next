import {
  expect,
} from 'chai';

import michelle from '../../src/chapter04/067-object-api-defineProperties-enumerable';

describe('chapter06', () => {
  describe('067-object-api-defineProperties-enumerable', () => {
    it('should define all the objects', () => {
      expect(michelle).to.be.a('object');
    });

    it('should define the name property correctly for michelle', () => {
      expect(michelle.name).to.be.equal('Michelle');
      expect(Object.prototype.hasOwnProperty.call(michelle, 'name')).to.be.equal(true);
    });

    it('should define the hobby property correctly for michelle', () => {
      expect(michelle.hobby).to.be.equal('Gardening');
      expect(Object.prototype.propertyIsEnumerable.call(michelle, 'hobby')).to.be.equal(false);
    });
  });
});
