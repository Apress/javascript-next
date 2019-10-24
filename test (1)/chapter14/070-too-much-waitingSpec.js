/* eslint-disable */
import {
  expect
} from 'chai';

import {
  redundantWaits,
  synchronousCalls,
} from '../../src/chapter14/070-too-much-waiting';

describe('chapter14', () => {
  describe('070-too-much-waiting', () => {
    it('should define all the objects', () => {
      expect(redundantWaits).not.to.be.undefined;
      expect(synchronousCalls).not.to.be.undefined;
    });

    it('should correctly define all the properties', () => {
      const url = 'https://my-json-server.typicode.com/typicode/demo/posts';

      redundantWaits
        .then(json => {
          expect(json).to.be.a('object');
          return [json.posts, json.comments];
        }).then(([posts, comments]) => {
          expect(posts).to.be.a('array');
          expect(comments).to.be.a('array');
        });

      synchronousCalls
        .then(json => {
          expect(json).to.be.a('object')
          return [json.posts, json.comments];
        }).then(([posts, comments]) => {
          expect(posts).to.be.a('array');
          expect(comments).to.be.a('array');
        });
    });
  });
});
