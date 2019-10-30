import {
  expect,
} from 'chai';

import doubleIt from '../../src/chapter02/040-fat-arrow-syntax';

describe('doubleIt', () => {
  it('should not throw an error', () => {
    expect(doubleIt).to.be.a('function');
  });

  it('should return the doubled average', () => {
    expect(doubleIt(8)).to.be.equal(16);
  });
});
