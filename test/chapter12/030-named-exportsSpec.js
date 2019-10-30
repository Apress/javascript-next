import { expect } from 'chai';

import {
  degreesToRadians,
  gradiansToRadians,
  sin,
  cos,
  tan,
  trig,
} from '../../src/chapter12/030-named-exports';


describe('chapter12', () => {
  describe('030-named-exports', () => {
    it('should define all the objects', () => {
      expect(degreesToRadians).not.to.be.undefined;
      expect(gradiansToRadians).not.to.be.undefined;
      expect(sin).not.to.be.undefined;
      expect(cos).not.to.be.undefined;
      expect(tan).not.to.be.undefined;

      expect(trig).not.to.be.undefined;
      expect(trig.degreesToRadians).not.to.be.undefined;
      expect(trig.gradiansToRadians).not.to.be.undefined;
      expect(trig.sin).not.to.be.undefined;
      expect(trig.cos).not.to.be.undefined;
      expect(trig.tan).not.to.be.undefined;
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

    it('should correctly implement sin', () => {
      expect(sin(0)).to.be.equal(0);
      expect(sin(45)).to.be.closeTo(0.707, 0.001);

      expect(sin(180, 'radians')).to.be.closeTo(-0.8011, 0.001);
      expect(sin(45, 'radians')).to.be.closeTo(0.8509, 0.001);

      expect(sin(0, 'gradians')).to.be.closeTo(0, 0.001);
      expect(sin(45, 'gradians')).to.be.closeTo(0.6494, 0.001);
    });

    it('should correctly implement cos', () => {
      expect(cos(0)).to.be.equal(1);
      expect(cos(45)).to.be.closeTo(0.707, 0.001);

      expect(cos(180, 'radians')).to.be.closeTo(-0.5984, 0.001);
      expect(cos(45, 'radians')).to.be.closeTo(0.525, 0.001);

      expect(cos(0, 'gradians')).to.be.equal(1);
      expect(cos(45, 'gradians')).to.be.closeTo(0.760, 0.001);
    });
  });
});
