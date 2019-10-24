/* eslint-disable no-console */
// tag::symbol-splitter[]
const passwordObfuscator = { // <1>
  regex: /\w+:\w+/,
  [Symbol.match](str) { // <2>
    const creds = str.match(this.regex);
    if (creds) {
      const [username] = creds[0].split(':'); // <3>
      return [
        `${username}:***********`, // <4>
      ];
    }
    return creds;
  },
};

const url = 'https://admin:supersecret@gitlab.com/looselytyped/sample-repo.git';
const credentials = url.match(passwordObfuscator); // <5>
// prints 'obfuscated credentials [ 'admin:***********' ]'
console.log('obfuscated credentials', credentials);

// end::symbol-splitter[]
export {
  passwordObfuscator,
  credentials,
};

