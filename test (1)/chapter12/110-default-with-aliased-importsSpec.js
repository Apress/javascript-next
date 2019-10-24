import { expect } from 'chai';

import {
  myTrignometry,
  sine,
  cosine,
  tan,
} from '../../src/chapter12/110-default-with-aliased-imports';


describe('chapter12', () => {
  describe('110-default-with-aliased-imports', () => {
    it('should define all the objects', () => {
      expect(myTrignometry).not.to.be.undefined;
      expect(sine).not.to.be.undefined;
      expect(cosine).not.to.be.undefined;
      expect(tan).not.to.be.undefined;
    });
  });
});
