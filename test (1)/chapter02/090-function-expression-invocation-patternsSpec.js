import {
  expect,
} from 'chai';

import returnsThis from '../../src/chapter02/090-function-expression-invocation-patterns';

describe('function expression invocation pattern', () => {
  it('should define the returnMe function', () => {
    expect(returnsThis).to.be.a('function');
  });

  it('function invocation should return undefined', () => {
    expect(returnsThis()).to.be.undefined;
  });

  it('method invocation should return the object', () => {
    const obj = {
      m: returnsThis,
    };
    expect(obj.m()).to.equal(obj);
  });

  it('call invocation should return the object', () => {
    const obj = {
    };
    expect(returnsThis.apply(obj)).to.equal(obj);
  });
});
