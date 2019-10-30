/* eslint-disable no-console */
/* eslint-disable no-undef */
import asyncRequest from './020-promisify-xhr';

// tag::030-promise-all[]
const p = asyncRequest('GET', 'https://my-json-server.typicode.com/typicode/demo/posts'); // <1>
const c = asyncRequest('GET', 'https://my-json-server.typicode.com/typicode/demo/comments'); // <2>

Promise.all([p, c]) // <3>
  .then(([posts, comments]) => ({ // <4>
    posts: JSON.parse(posts),
    comments: JSON.parse(comments),
  }))
  .then(obj => console.log(obj))
  .catch(err => console.log(err));
// end::030-promise-all[]

export default asyncRequest;
