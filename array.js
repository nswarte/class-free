/**
 * @typedef NicoType
 * @property {string} name - my name
 */

/**
 * @param {NicoType} input - the input
 *
 */
function createMyArray (input) {
  const a = [];

  function push (...elements) {
    console.log(`pushing ${elements}`);
    console.log(`pushing ${elements.length}`);
    a.push(...elements);
  }

  const r = Object.create(a);
  r.push = push;
  return Object.freeze(r);
}

const o = createMyArray();
o.push(1, 2, 3);
const a = Object.getPrototypeOf(o);

