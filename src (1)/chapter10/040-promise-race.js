/* eslint-disable no-console */
/* eslint-disable no-undef */
// DUPLICATED IN 020-promisify-xhr.js!!
import asyncRequest from './020-promisify-xhr';

// tag::040-promise-race[]
const p = asyncRequest('GET', 'https://my-json-server.typicode.com/typicode/demo/posts'); // <1>
const timer = new Promise((_, reject) => setTimeout(reject, 1000)); // <2>

Promise.race([p, timer]) // <3>
  .then(posts => ({ // <4>
    posts: JSON.parse(posts),
  }))
  .catch(() => ({ // <5>
    posts: [],
  }))
  .then(obj => console.log(obj));
// end::040-promise-race[]

export default asyncRequest;
