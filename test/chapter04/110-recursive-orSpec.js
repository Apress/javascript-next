import {
  expect,
} from 'chai';

import or from '../../src/chapter04/110-recursive-or';

describe('110-recursive-or', () => {
  it('should define all function', () => {
    expect(or).to.be.a('function');
  });

  it('should return truthy for even a single truthy', () => {
    const val = or(true, false);
    expect(val).to.be.ok;
    expect(val).to.be.equal(true);
  });

  it('should return falsey for ALL falseys', () => {
    const val = or(undefined, false, null, 0);
    expect(val).not.to.be.ok;
  });
});
