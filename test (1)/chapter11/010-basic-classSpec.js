import {
  expect,
} from 'chai';

import {
  Person,
  raju,
  venkat,
} from '../../src/chapter11/010-basic-class';

describe('chapter11', () => {
  describe('010-basic-class', () => {
    it('should define all the objects', () => {
      expect(Person).not.to.be.undefined;

      expect(raju).not.to.be.undefined;
      expect(venkat).not.to.be.undefined;
    });

    it('should define all properties for Person correctly', () => {
      expect(raju.getName).not.to.be.undefined;
      expect(raju.sayHello).not.to.be.undefined;
      expect(raju.age).to.be.undefined;
      expect(raju.warCry).to.be.undefined;
    });
  });
});
