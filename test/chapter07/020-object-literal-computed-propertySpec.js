import {
  expect,
} from 'chai';

import song from '../../src/chapter07/020-object-literal-computed-property';

describe('chapter07', () => {
  describe('020-object-literal-computed-property', () => {
    it('should define all the objects', () => {
      expect(song).to.be.a('object');
    });

    it('should define the properties correctly', () => {
      expect(song.getName()).to.be.equal(song.name);
      expect(song.getAlbum()).to.be.equal(song.album);
    });
  });
});
