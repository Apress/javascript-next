import { expect } from 'chai';

import { // <1>
  degreesToRadians,
  gradiansToRadians,
  sine,
  cosine,
  tan,
  trignometry,
} from '../../src/chapter12/050-alias-exports';


describe('chapter12', () => {
  describe('050-alias-exports', () => {
    it('should define all the objects', () => {
      expect(degreesToRadians).not.to.be.undefined;
      expect(gradiansToRadians).not.to.be.undefined;
      expect(sine).not.to.be.undefined;
      expect(cosine).not.to.be.undefined;
      expect(tan).not.to.be.undefined;
      expect(trignometry).not.to.be.undefined;
    });

    it('should correctly implement degreesToRadians', () => {
      expect(degreesToRadians(0)).to.be.equal(0);
      expect(degreesToRadians(180)).to.be.equal(Math.PI);
      expect(degreesToRadians(360)).to.be.equal(2 * Math.PI);
    });

    it('should correctly implement gradiansToRadians', () => {
      expect(gradiansToRadians(0)).to.be.equal(0);
      expect(gradiansToRadians(1)).to.be.closeTo(0.016, 0.001);
      expect(gradiansToRadians(3)).to.be.closeTo(0.047124, 0.001);
    });

    it('should correctly implement tan', () => {
      expect(tan(0)).to.be.equal(0);
      expect(tan(45)).to.be.closeTo(0.999, 0.001);

      expect(tan(180, 'radians')).to.be.closeTo(1.338, 0.001);
      expect(tan(45, 'radians')).to.be.closeTo(1.619, 0.001);

      expect(tan(0, 'gradians')).to.be.closeTo(0, 0.001);
      expect(tan(45, 'gradians')).to.be.closeTo(0.854, 0.001);
    });

    it('should correctly implement sine', () => {
      expect(sine(0)).to.be.equal(0);
      expect(sine(45)).to.be.closeTo(0.707, 0.001);

      expect(sine(180, 'radians')).to.be.closeTo(-0.8011, 0.001);
      expect(sine(45, 'radians')).to.be.closeTo(0.8509, 0.001);

      expect(sine(0, 'gradians')).to.be.closeTo(0, 0.001);
      expect(sine(45, 'gradians')).to.be.closeTo(0.6494, 0.001);
    });

    it('should correctly implement cos', () => {
      expect(cosine(0)).to.be.equal(1);
      expect(cosine(45)).to.be.closeTo(0.707, 0.001);

      expect(cosine(180, 'radians')).to.be.closeTo(-0.5984, 0.001);
      expect(cosine(45, 'radians')).to.be.closeTo(0.525, 0.001);

      expect(cosine(0, 'gradians')).to.be.equal(1);
      expect(cosine(45, 'gradians')).to.be.closeTo(0.760, 0.001);
    });
  });
});
