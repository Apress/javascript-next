import {
  expect,
} from 'chai';

import * as toJson from '../../src/chapter06/060-maps-to-from-json';

describe('chapter06', () => {
  describe('060-maps-to-from-json', () => {
    it('should define all the objects', () => {
      expect(toJson.nihar).to.be.a('map');
      expect(toJson.serialized).to.be.a('string');
      expect(toJson.deserialized).to.be.a('map');
    });

    it('should be serialize correctly', () => {
      expect(toJson.serialized).to.be.equal('[["car","mazda"],["residence","apartment"]]');
    });

    it('should be deserialize correctly', () => {
      expect(toJson.deserialized).to.be.eql(toJson.nihar);
    });
  });
});
