import {
  expect,
} from 'chai';

import {
  GLOBAL_OBJECT,
  returnMe,
} from '../../src/chapter02/120-arrow-expression-and-this';

describe('arrow functions', () => {
  it('should define the returnMe function', () => {
    expect(returnMe).to.be.a('function');
  });

  it('function invocation should return GLOBAL_OBJECT', () => {
    expect(returnMe()).to.equal(GLOBAL_OBJECT);
  });

  it('method invocation should return GLOBAL_OBJECT', () => {
    const obj = {
      m: returnMe,
    };
    expect(obj.m()).to.equal(GLOBAL_OBJECT);
  });

  it('call invocation should return GLOBAL_OBJECT', () => {
    const obj = {
    };
    expect(returnMe.apply(obj)).to.equal(GLOBAL_OBJECT);
  });
});
