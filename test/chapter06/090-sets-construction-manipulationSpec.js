import {
  expect,
} from 'chai';

import * as example090 from '../../src/chapter06/090-sets-construction-manipulation';

describe('chapter06', () => {
  describe('090-sets-construction-manipulation', () => {
    it('should define all the objects', () => {
      expect(example090.set).to.be.a('set');
    });

    it('should have the appropriate keys set', () => {
      expect(example090.set.has(true)).to.be.equal(true);
      expect(example090.set.has(1)).to.be.equal(true);
      expect(example090.set.has(example090.obj)).to.be.equal(true);

      expect(example090.set.has('string')).not.to.be.ok;
    });
  });
});
