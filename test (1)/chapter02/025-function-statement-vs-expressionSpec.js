import {
  expect,
} from 'chai';

import {
  fnStatement,
  fnExpression,
} from '../../src/chapter02/025-function-statement-vs-expression';

describe('025-function-statement-vs-expression', () => {
  it('should not throw an error', () => {
    expect(fnStatement).to.be.a('function');
    expect(fnExpression).to.be.a('function');
  });
});
