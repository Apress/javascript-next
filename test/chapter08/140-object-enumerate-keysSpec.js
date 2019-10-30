import {
  expect,
} from 'chai';

import {
  obj,
} from '../../src/chapter08/140-object-enumerate-keys';

describe('chapter08', () => {
  describe('140-object-enumerate-keys', () => {
    it('should define all the objects', () => {
      expect(obj).to.be.a('object');
    });

    it('should define the behavior correctly', () => {
      expect(Object.keys(obj).length).to.be.equal(1);
      expect(Object.getOwnPropertyNames(obj).length).to.be.equal(2);
    });
  });
});
