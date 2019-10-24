import {
  expect,
} from 'chai';

import buildUrl from '../../src/chapter03/030-function-default-args';

describe('default checks', () => {
  it('should define all the functions', () => {
    expect(buildUrl).to.be.a('function');
  });

  describe('buildUrl', () => {
    it('should return a new url', () => {
      expect(buildUrl('www.example.com', 'http'))
        .to.be.equal('http://www.example.com');
    });

    it('should default protocol', () => {
      expect(buildUrl('www.example.com', 'http'))
        .to.be.equal('http://www.example.com');
    });

    it('should error if site is not passed', () => {
      expect(() => buildUrl()).to.throw();
    });
  });
});
