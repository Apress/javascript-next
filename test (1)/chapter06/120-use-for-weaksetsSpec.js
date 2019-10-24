import {
  expect,
} from 'chai';

import {
  rootObj,
  replacer,
} from '../../src/chapter06/120-use-for-weaksets';

describe('chapter06', () => {
  describe('120-use-for-weaksets', () => {
    it('should define all the objects', () => {
      expect(rootObj).to.be.a('object');
      expect(replacer).to.be.a('function');
    });

    it('should serialize correctly', () => {
      const s = JSON.stringify(rootObj, replacer);
      expect(s).to.be.ok;
    });
  });
});
