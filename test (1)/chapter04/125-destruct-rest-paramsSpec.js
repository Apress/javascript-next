import {
  expect,
} from 'chai';

import distanceAndSlope from '../../src/chapter04/121-multiple-returns';

describe('121-multiple-returns', () => {
  it('should define all functions', () => {
    expect(distanceAndSlope).to.be.a('function');
  });

  it('should extract the correct values', () => {
    const [d, s] = distanceAndSlope([15, 2], [5, 9]);
    expect(Number.parseFloat(d.toFixed(2))).to.be.equal(12.21);
    expect(s).to.be.equal(-0.7);
  });
});
