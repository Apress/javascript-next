import {
  expect,
} from 'chai';

import song from '../../src/chapter07/050-object-literal-method-shorthand';

describe('chapter07', () => {
  describe('050-object-literal-method-shorthand', () => {
    it('should define all the objects', () => {
      expect(song).to.be.a('object');
    });

    it('should define the properties correctly', () => {
      expect(song.name).to.be.equal('All You Need Is Love');
    });
  });
});
