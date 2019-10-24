import {
  expect,
} from 'chai';

import * as exp from '../../src/chapter04/140-object-destructuring-all';

describe('140-object-destructuring-all', () => {
  it('should define all variables', () => {
    expect(exp.config).to.be.a('object');
    expect(exp.size).to.be.a('number');
    expect(exp.transitionMs).to.be.a('number');
    expect(exp.w).to.be.a('number');
    expect(exp.height).to.be.a('number');
    expect(exp.drawChart).to.be.a('function');
  });

  it('should set the right values', () => {
    expect(exp.size).to.be.equal(exp.config.size);
    expect(exp.transitionMs).to.be.equal(exp.config.transitionMs);
    expect(exp.w).to.be.equal(exp.config.clip.width);
    expect(exp.height).to.be.equal(100);
  });

  describe('drawChart', () => {
    it('should use the defaults', () => {
      const [s, t, w, h] = exp.drawChart();
      expect(s).to.be.equal(200);
      expect(t).to.be.equal(1000);
      expect(w).to.be.equal(100);
      expect(h).to.be.equal(100);
    });
  });
});
