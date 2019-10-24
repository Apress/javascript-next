import { expect } from 'chai';

import insiduous from '../../src/chapter01/030-var-overwriting';

describe('insiduous', () => {
  it('should return overwrite the outer declared value', () => {
    expect(insiduous()).to.be.equal('Inner declaration');
  });
});
