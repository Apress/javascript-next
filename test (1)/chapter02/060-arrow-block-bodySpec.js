import {
  expect,
} from 'chai';

import reducer from '../../src/chapter02/060-arrow-block-body';

describe('arrow block body', () => {
  it('should return define all the functions', () => {
    expect(reducer).to.be.a('function');
  });

  it('should push on to array', () => {
    expect(reducer([2, 3], 1)).to.eql([2, 3, 1]);
  });
});
