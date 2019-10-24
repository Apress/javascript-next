// tag::040-simple-async-iterable[]
// let us pretend this array is on the backend
const fetchFriends = (index) => { // <1>
  const friends = [
    'Matt',
    'Neal',
    'Ken',
  ];
  const timeout = Math.floor(Math.random() * Math.floor(42));
  if (index < friends.length) {
    return new Promise(res => setTimeout(res, timeout, friends[index])); // <2>
  }
  return Promise.reject(new Error('No more records'));
};

class FriendsService { // <3>
  constructor() {
    this.index = 0;
  }

  [Symbol.asyncIterator]() { // <4>
    return { // <5>
      next: async () => { // <6>
        // Make an async call to the backend to retrieve the current
        try {
          const friend = await fetchFriends(this.index);
          this.index += 1;
          return { value: friend, done: false }; // <7>
        } catch (e) {
          this.index = 0;
          return { done: true }; // <8>
        }
      },
    };
  }
}
// end::040-simple-async-iterable[]
export {
  fetchFriends,
  FriendsService,
};
