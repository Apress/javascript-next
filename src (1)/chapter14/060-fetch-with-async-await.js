/* eslint-disable no-restricted-syntax, no-console */
import fetch from 'node-fetch';
// tag::060-fetch-with-async-await[]
const getWithPromises = url => fetch(url).then(resp => resp.json()); // <1>
const getWithAsyncAwait = async (url) => { // <2>
  const resp = await fetch(url); // <3>
  return resp.json(); // <4>
};

const url = 'https://my-json-server.typicode.com/typicode/demo/comments';

getWithPromises(url) // <5>
  .then((json) => {
    console.log(json);
    return json;
  });

getWithAsyncAwait(url) // <6>
  .then((json) => {
    console.log(json);
    return json;
  });

// alternatively
(async () => {
  // either one works just the same
  // const json = await getWithPromises(url);
  const json = await getWithAsyncAwait(url); // <7>
  console.log(json);
})();
// end::060-fetch-with-async-await[]
export {
  getWithPromises,
  getWithAsyncAwait,
};
