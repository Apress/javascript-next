import { expect } from 'chai';

import {
  myTrignometry,
  sin,
  cos,
  tan,
} from '../../src/chapter12/100-default-import';


describe('chapter12', () => {
  describe('100-default-import', () => {
    it('should define all the objects', () => {
      expect(myTrignometry).not.to.be.undefined;
      expect(sin).not.to.be.undefined;
      expect(cos).not.to.be.undefined;
      expect(tan).not.to.be.undefined;
    });
  });
});
