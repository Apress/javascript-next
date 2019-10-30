/* eslint-disable dot-notation */

import {
  expect,
} from 'chai';

import * as example010 from '../../src/chapter06/010-objects-keys-strings';

describe('chapter06', () => {
  describe('010-objects-keys-strings', () => {
    it('should define all the objects', () => {
      expect(example010.obj1).to.be.a('object');
      expect(example010.obj2).to.be.a('object');
    });

    it('should have the appropriate keys set', () => {
      expect(example010.obj1[true]).to.be.equal('Boolean');
      expect(example010.obj2[true]).to.be.equal('String');
    });
  });
});
