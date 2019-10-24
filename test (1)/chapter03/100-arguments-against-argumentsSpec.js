import {
  expect,
} from 'chai';

import {
  byStatus,
  boardPlane,
} from '../../src/chapter03/100-arguments-against-arguments';

describe('arguments against arguments', () => {
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
    expect(byStatus).to.be.a('function');
    expect(boardPlane).to.be.a('function');
  });

  describe('byStatus', () => {
    it('should sort by status', () => {
      const sorted = passengers.sort(byStatus);
      expect(sorted[0]).to.be.equal(platinum);
      expect(sorted[1]).to.be.equal(silver);
      expect(sorted[2]).to.be.equal(otherSilver);
    });
  });

  describe('boardPlane', () => {
    it('should board plane by status', () => {
      const pilot = 'raju';
      const crew = 'michelle';
      const plane = boardPlane(pilot, crew, ...passengers);
      expect(plane).to.be.an('array');
      expect(plane[0]).to.be.equal(pilot);
      expect(plane[1]).to.be.equal(crew);
      expect(plane[2]).to.be.an('array');
      expect(plane[2][0]).to.be.equal(platinum);
      expect(plane[2][1]).to.be.equal(silver);
      expect(plane[2][2]).to.be.equal(otherSilver);
    });
  });
});
