/**
 * experiment class free reuse w/ or w/o prototyping
 *
 */

function createMyObject (secret) {

  function displayTheSecret() {
    console.log(secret)
  }
  return Object.freeze({
    displayTheSecret
  });
}

// create an empty literal object (
let o = {};
Object.assign(o, createMyObject('nico'));

console.log(Object.getPrototypeOf(o));

o = Object.create(null);
console.log(Object.getPrototypeOf(o));

// create an object setting the MyObject instance as a prototype
o = Object.create(createMyObject('nico'));

console.log(Object.getPrototypeOf(o));
o.displayTheSecret('toto');
