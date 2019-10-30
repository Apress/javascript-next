import {
  expect,
} from 'chai';

import neo from '../../src/chapter02/140-knowing-what-this-arrow-functions';

describe('neo', () => {
  it('should be an object', () => {
    expect(neo).to.be.a('object');
    expect(neo.friends).to.be.an('array');
  });

  it('should add new friends', () => {
    neo.addFriends('Michelle', 'Mason');
    expect(neo.friends).to.be.eql([
      'Morpheus',
      'Brian',
      'Switch',
      'Niobe',
      'Tank',
      'Michelle',
      'Mason',
    ]);
  });
});
