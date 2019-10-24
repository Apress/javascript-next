import { expect } from 'chai';

import { // <1>
  sine,
  cosine,
  trignometry,
} from '../../src/chapter12/090-aliasing-imports';


describe('chapter12', () => {
  describe('090-aliasing-imports', () => {
    it('should define all the objects', () => {
      expect(sine).not.to.be.undefined;
      expect(cosine).not.to.be.undefined;
      expect(trignometry).not.to.be.undefined;
    });
  });
});
