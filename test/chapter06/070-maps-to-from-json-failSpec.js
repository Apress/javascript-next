import {
  expect,
} from 'chai';

import * as toJson from '../../src/chapter06/070-maps-to-from-json-fail';

describe('chapter06', () => {
  describe('070-maps-to-from-json-fail', () => {
    it('should define all the objects', () => {
      expect(toJson.map).to.be.a('map');
      expect(toJson.serialized).to.be.a('string');
      expect(toJson.deserialized).to.be.a('map');
    });

    it('should be serialize correctly', () => {
      expect(toJson.serialized).to.be.equal('[[{"name":"some object"},"value against an object key"]]');
    });

    it('should be deserialize correctly', () => {
      expect(toJson.deserialized).to.be.eql(toJson.map);
    });
  });
});
