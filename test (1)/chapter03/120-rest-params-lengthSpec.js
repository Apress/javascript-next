import {
  expect,
} from 'chai';

import {
  fnExpression,
  fnArrow,
} from '../../src/chapter03/120-rest-params-length';

describe('rest params length property', () => {
  it('should define all the functions', () => {
    expect(fnExpression).to.be.a('function');
    expect(fnArrow).to.be.a('function');
  });

  it('should have the right lengths', () => {
    expect(fnExpression.length).to.be.equal(2);
    expect(fnArrow.length).to.be.equal(2);
  });
});
