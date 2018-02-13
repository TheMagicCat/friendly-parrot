
// ES6 style FP utilities from @dtipson : https://medium.com/@dtipson/functional-lenses-d1aba9e52254
const pipe = (fn, ...fns) => (...args) => fns.reduce((acc, f) => f(acc), fn(...args));
const compose = (...fns) => pipe(...fns.reverse());

//simple auto currying 
//(does NOT separately handle f.length == args.length or f.length < args.length cases)
const curry = (f, ...args) => (f.length <= args.length)
  ? f(...args)
  : (...more) => curry(f, ...args, ...more);

const mapWith = curry((f, xs) => xs.map(f));

module.exports = {
  pipe,
  compose,
  curry,
  mapWith,
}