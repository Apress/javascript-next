import {
  expect,
} from 'chai';

import {
  r,
  g,
  b,
  a,
  nonExistent,
  blue,
  blueAgain,
} from '../../src/chapter04/070-array-destructuring';

describe('070-array-destructuring', () => {
  it('should define all variables', () => {
    expect(r).to.be.a('number');
    expect(g).to.be.a('number');
    expect(b).to.be.a('number');
    expect(a).to.be.a('number');
    expect(nonExistent).not.to.be.ok;
    expect(blue).to.be.a('number');
  });

  it('should set the right values', () => {
    // 239, 15, 255, 0.9
    expect(r).to.be.equal(239);
    expect(g).to.be.equal(15);
    expect(b).to.be.equal(255);
    expect(a).to.be.equal(0.9);
    expect(blue).to.be.equal(b);
    expect(blueAgain).to.be.equal(b);
  });
});
