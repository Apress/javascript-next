import { expect } from 'chai';

import { // <1>
  sin,
  cos,
  tan,
} from '../../src/chapter12/060-named-imports';


describe('chapter12', () => {
  describe('060-named-imports', () => {
    it('should define all the objects', () => {
      expect(sin).not.to.be.undefined;
      expect(cos).not.to.be.undefined;
      expect(tan).not.to.be.undefined;
    });
  });
});
