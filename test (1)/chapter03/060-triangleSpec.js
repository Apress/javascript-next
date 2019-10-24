import {
  expect,
} from 'chai';

import triangle from '../../src/chapter03/060-triangle';

describe('triangle', () => {
  it('should define all the functions', () => {
    expect(triangle).to.be.a('function');
  });

  it('should create triangles', () => {
    expect(triangle(6, 4)).to.be.eql([6, 4, Math.hypot(6, 4)]);
    expect(triangle(10)).to.be.eql([10, 10, Math.hypot(10, 10)]);
  });
});
