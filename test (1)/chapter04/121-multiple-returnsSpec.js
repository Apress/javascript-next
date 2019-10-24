import {
  expect,
} from 'chai';

import flatten from '../../src/chapter04/125-destruct-rest-params';

describe('125-destruct-rest-params', () => {
  it('should define all functions', () => {
    expect(flatten).to.be.a('function');
  });

  it('should flatten an array', () => {
    const result = flatten([
      [1, 2],
      [3], 4, 5, [6, 7],
    ]);
    expect(result).to.be.eql([1, 2, 3, 4, 5, 6, 7]);
  });
});
