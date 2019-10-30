import {
  expect,
} from 'chai';

import song from '../../src/chapter07/010-object-literal-getters-setters';

describe('chapter07', () => {
  describe('010-object-literal-getters-setters', () => {
    it('should define all the objects', () => {
      expect(song).to.be.a('object');
    });

    it('should define the properties correctly', () => {
      expect(song.name).to.be.equal('Yellow Submarine');
      expect(song.duration).to.be.a('number');
      song.name = 'some';
      expect(song.name).to.be.equal('some');
      song.duration = 3.00;
      expect(song.duration).to.be.equal(3.00);
      expect(song.getName).to.be.a('function');
    });

    it('duration of the song cannot be less than 0 min', () => {
      try {
        song.duration = -1;
      } catch (e) {
        expect(e).not.to.be.undefined;
        song.duration = 3.00;
      }
    });
  });
});
