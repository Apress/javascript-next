import {
  expect,
} from 'chai';

import rectangle from '../../src/chapter03/050-rectangle';

describe('rectangle', () => {
  it('should define all the functions', () => {
    expect(rectangle).to.be.a('function');
  });

  it('should create rectangles', () => {
    expect(rectangle(2, 3)).to.be.eql([2, 3]);
    expect(rectangle(2)).to.be.eql([2, 2]);
  });
});
