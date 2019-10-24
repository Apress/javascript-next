import {
  expect,
} from 'chai';

import filter from '../../src/chapter03/080-default-before-required';

describe('filter', () => {
  it('should define all the functions', () => {
    expect(filter).to.be.a('function');
  });

  it('should return the length of the args', () => {
    expect(filter([1, 2, 3], n => n > 2)).to.be.eql([3]);
  });
});
