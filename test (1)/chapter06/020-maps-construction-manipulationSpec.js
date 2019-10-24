import {
  expect,
} from 'chai';

import * as example020 from '../../src/chapter06/020-maps-construction-manipulation';

describe('chapter06', () => {
  describe('020-maps-construction-manipulation', () => {
    it('should define all the objects', () => {
      expect(example020.map).to.be.a('map');
    });

    it('should have the appropriate keys set', () => {
      expect(example020.map.get(true)).to.be.equal('is a boolean');
      expect(example020.map.get(1)).to.be.equal('overrides first');
      expect(example020.map.get(example020.obj)).to.be.equal('is an object');

      expect(example020.map.get('string')).not.to.be.ok;
    });
  });
});
