/* eslint-disable no-console */
/* eslint-disable dot-notation, func-names */
// tag::object-literal-computed-property[]
const getterFor = (prop) => { // <1>
  const capitalized = prop.charAt(0).toUpperCase() + prop.slice(1); // <2>
  return `get${capitalized}`;
};

const song = {
  name: 'All You Need Is Love',
  album: 'Yellow Submarine',
};

song[getterFor('name')] = function () { // <3>
  return song['name'];
};

song[getterFor('album')] = function () {
  return song['album'];
};

console.assert(song.getName() === song.name);
console.assert(song.getAlbum() === song.album);
// end::object-literal-computed-property[]

export default song;
