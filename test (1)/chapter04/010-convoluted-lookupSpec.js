import {
  expect,
} from 'chai';

import convolutedLookup from '../../src/chapter04/010-convoluted-lookup';

describe('110-rest-params-instead-of-arguments', () => {
  it('should define all the functions', () => {
    expect(convolutedLookup).to.be.a('function');
  });

  it('convolutedLookup should do the right thing', () => {
    const [z1, z2] = convolutedLookup();
    expect(z1).to.be.equal('95014-1234');
    expect(z2).to.be.equal('95014-1234');
  });
});
