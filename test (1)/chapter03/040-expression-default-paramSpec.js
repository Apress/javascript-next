import {
  expect,
} from 'chai';

import {
  getDefaultConn,
  query,
} from '../../src/chapter03/040-expression-default-param';

describe('expression as defaults', () => {
  it('should define all the functions', () => {
    expect(getDefaultConn).to.be.a('function');
    expect(query).to.be.a('function');
  });

  describe('getDefaultConn', () => {
    it('should return a new obj', () => {
      expect(getDefaultConn()).to.be.a('object');
    });
  });
});
