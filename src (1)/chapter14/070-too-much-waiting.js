/* eslint-disable no-restricted-syntax, no-console */
import fetch from 'node-fetch';
// tag::070-too-much-waiting[]
const redundantWaits = (async () => {
  const url = 'https://my-json-server.typicode.com/typicode/demo';
  const fetchPosts = await fetch(`${url}/posts`); // <1>
  const posts = await fetchPosts.json();

  const fetchComments = await fetch(`${url}/comments`);
  const comments = await fetchComments.json();

  return {
    posts,
    comments,
  };
})();

redundantWaits
  .then(obj => console.log('From redundantWaits', obj));

const synchronousCalls = (async () => {
  const getJson = url => fetch(url).then(resp => resp.json()); // <2>

  const url = 'https://my-json-server.typicode.com/typicode/demo';
  const [posts, comments] = await Promise.all([ // <3>
    getJson(`${url}/posts`),
    getJson(`${url}/comments`),
  ]);

  return {
    posts,
    comments,
  };
})();

synchronousCalls
  .then(obj => console.log('From synchronousCalls', obj));
// end::070-too-much-waiting[]
export {
  redundantWaits,
  synchronousCalls,
};
