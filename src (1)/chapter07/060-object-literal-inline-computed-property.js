/* eslint-disable no-console */

// tag::object-literal-inline-computed-property[]
const getterFor = (prop) => { // <1>
  const capitalized = prop.charAt(0).toUpperCase() + prop.slice(1); // <2>
  return `get${capitalized}`;
};

const song = {
  name: 'All You Need Is Love',
  album: 'Yellow Submarine',
  [getterFor('name')]() { // <3>
    return song.name;
  },
  [getterFor('album')]() {
    return song.album;
  },
};

console.assert(song.getName() === song.name);
console.assert(song.getAlbum() === song.album);
// end::object-literal-inline-computed-property[]

export default song;
