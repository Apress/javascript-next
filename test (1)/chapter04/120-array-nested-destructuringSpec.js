import {
  expect,
} from 'chai';

import {
  ticTacToe,
  cell01,
  cell11,
  cell22,
} from '../../src/chapter04/120-array-nested-destructuring';

describe('111-array-nested-destructuring', () => {
  it('should define all variable', () => {
    expect(ticTacToe).to.be.a('array');
    expect(cell01).to.be.a('string');
    expect(cell11).to.be.a('string');
    expect(cell22).to.be.a('string');
  });

  it('should extract the correct values', () => {
    expect(cell01).to.be.equal('x');
    expect(cell11).to.be.equal('x');
    expect(cell22).to.be.equal('x');
  });
});
