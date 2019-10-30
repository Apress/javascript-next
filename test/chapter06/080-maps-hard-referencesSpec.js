import {
  expect,
} from 'chai';

import * as hardRef from '../../src/chapter06/080-maps-hard-references';

describe('chapter06', () => {
  describe('080-maps-hard-references', () => {
    it('should define all the objects', () => {
      expect(hardRef.obj).not.to.be.ok;
      expect(hardRef.map).to.be.a('map');
    });

    it('should contain the key reference', () => {
      expect(hardRef.map.size).to.be.equal(1);
    });
  });
});
