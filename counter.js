// with some this 
function Counter () {
  let size=0;

  function increment () {
    return `${this.name ?? 'no name'} ${++size}`;
  }

  return Object.freeze({
    increment
  });
}

function DoubleCounter (name) {
  const counter = Counter();

  function increment () {
    counter.increment.apply(this);
    return counter.increment.apply(this);
  }

  return Object.freeze({
    name,
    increment
  });
}

console.log(DoubleCounter('nico').increment());

// without the this: preferred
function woCounter (name) {
  let size=0;

  function increment () {
    return `${name ?? 'no name'} ${++size}`;
  }

  return Object.freeze({
    increment
  });
}

function woDoubleCounter (name) {
  const counter = woCounter(`${name} de Swarte`);

  function increment () {
    counter.increment();
    return counter.increment();
  }

  return Object.freeze({
    increment
  });
}

console.log(woDoubleCounter('nico').increment());
