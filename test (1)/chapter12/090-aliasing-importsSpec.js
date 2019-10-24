import { expect } from 'chai';

import { // <1>
  sine,
  cosine,
  tan,
  trignometry,
} from '../../src/chapter12/070-named-aliased-import';


describe('chapter12', () => {
  describe('070-named-aliased-import', () => {
    it('should define all the objects', () => {
      expect(sine).not.to.be.undefined;
      expect(cosine).not.to.be.undefined;
      expect(tan).not.to.be.undefined;
      expect(trignometry).not.to.be.undefined;
    });
  });
});
