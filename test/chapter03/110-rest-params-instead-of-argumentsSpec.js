import {
  expect,
} from 'chai';

import {
  boardPlane,
} from '../../src/chapter03/110-rest-params-instead-of-arguments';

describe('rest params', () => {
  let silver;
  let platinum;
  let otherSilver;
  let passengers;
  beforeEach('set up', () => {
    silver = {
      status: 'silver',
    };
    platinum = {
      status: 'platinum',
    };
    otherSilver = {
      status: 'silver',
    };
    passengers = [
      silver,
      platinum,
      otherSilver,
    ];
  });

  it('should define all the functions', () => {
    expect(boardPlane).to.be.a('function');
  });

  describe('boardPlane', () => {
    it('should board plane by status', () => {
      const pilot = 'raju';
      const crew = 'michelle';
      const result = boardPlane(pilot, crew, ...passengers);
      expect(result).to.be.an('array');
      expect(result[0]).to.be.equal(pilot);
      expect(result[1]).to.be.equal(crew);
      expect(result[2]).to.be.an('array');
      expect(result[2][0]).to.be.equal(platinum);
      expect(result[2][1]).to.be.equal(silver);
      expect(result[2][2]).to.be.equal(otherSilver);
    });
  });
});
