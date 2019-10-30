import {
  expect,
} from 'chai';

import add from '../../src/chapter03/090-using-arguments';

describe('using arguments', () => {
  it('should define the add function', () => {
    expect(add).to.be.a('function');
  });

  it('add should add all the numbers', () => {
    expect(add(5, 4, -1)).to.be.equal(8);
  });
});
