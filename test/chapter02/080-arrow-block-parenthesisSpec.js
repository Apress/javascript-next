import {
  expect,
} from 'chai';

import {
  confuserOne,
  confuserTwo,
} from '../../src/chapter02/080-arrow-block-parenthesis';

describe('arrow single line block body', () => {
  it('should define the confuser', () => {
    expect(confuserOne).to.be.a('function');
    expect(confuserTwo).to.be.a('function');
  });

  it('should return an object', () => {
    expect(confuserOne()).to.eql({ profession: 'JS Ninja' });
    expect(confuserTwo()).to.eql({ profession: 'JS Ninja' });
  });
});
