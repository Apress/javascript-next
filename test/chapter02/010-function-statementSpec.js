import {
  expect,
} from 'chai';

import identity from '../../src/chapter02/010-function-statement';

describe('identity statement', () => {
  it('should not throw an error', () => {
    expect(identity).to.be.a('function');
  });

  it('should be the identity function', () => {
    expect(identity(2)).to.be.equal(2);
  });
});
