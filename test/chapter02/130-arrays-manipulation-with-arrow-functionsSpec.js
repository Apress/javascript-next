import {
  expect,
} from 'chai';

import arrayManipulation from '../../src/chapter02/130-arrays-manipulation-with-arrow-functions';

describe('arrayManipulation', () => {
  it('should not throw an error', () => {
    expect(arrayManipulation).to.be.a('function');
  });

  it('should return the doubled average', () => {
    expect(arrayManipulation()).to.be.equal(18);
  });
});
