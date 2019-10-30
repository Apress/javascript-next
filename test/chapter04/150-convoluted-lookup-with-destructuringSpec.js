import {
  expect,
} from 'chai';

import final from '../../src/chapter04/150-convoluted-lookup-with-destructuring';

describe('150-convoluted-lookup-with-destructuring', () => {
  it('should define all the functions', () => {
    expect(final).to.be.a('string');
  });

  it('should look up the zip code', () => {
    expect(final).to.be.equal('95014-1234');
  });
});
