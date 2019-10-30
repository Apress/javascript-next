import {
  expect,
} from 'chai';

import confuser from '../../src/chapter02/070-arrow-block-confusing';

describe('arrow single line block body', () => {
  it('should define the confuser', () => {
    expect(confuser).to.be.a('function');
  });

  it('should return undefined', () => {
    expect(confuser()).not.be.ok;
  });
});
