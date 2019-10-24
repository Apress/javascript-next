import {
  expect,
} from 'chai';

import {
  fetchFriends,
  FriendsService,
} from '../../src/chapter15/040-simple-async-iterable';

describe('chapter15', () => {
  describe('040-simple-async-iterable', () => {
    it('should define all the objects', () => {
      expect(fetchFriends).to.be.a('function');
      expect(FriendsService).to.be.a('function');
    });

    it('should define fetchFriends correctly', () => {
      fetchFriends(0)
        .then(resp => expect(resp).to.be.equal('Matt'));
      fetchFriends(4)
        .catch(err => expect(err).not.to.be.undefined);
    });

    it('should define the properties correctly', () => {
      expect(new FriendsService()[Symbol.asyncIterator]).to.be.a('function');

      const iterator = new FriendsService()[Symbol.asyncIterator]();
      expect(iterator).to.be.a('object');
      const promise = iterator.next();
      expect(promise).to.be.a('promise');
      promise.then((resp) => {
        expect(resp.value).to.be.equal('Matt');
        expect(resp.done).to.be.equal(false);
      });
    });
  });
});
