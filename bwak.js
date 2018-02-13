const { curry, compose, pipe, mapWith } = require('./dtipson-utils');

const all = Promise.all.bind(Promise); // aka "traverse"

const flip = (fn) => (y, x) => fn(x, y);  

// Then is kind of like a Fold...
const fold = (g, h) => (p) => p.then(g, h);

const map = curry((fp, xsp) => all([fp, ...xsp]).then(([f, ...xs]) => xs.map(f)));
const ap = curry(flip(map));

module.exports = { all, fold, ap, map, curry, pipe };

// Super weird pipelined versions...
const unwrap = (fn) => ([f, ...xs]) => fn(f, xs);

const ap_pipeline = pipe([
  all,
  fold(unwrap(mapWith)),
]);