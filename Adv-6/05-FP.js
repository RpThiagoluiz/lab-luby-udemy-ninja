//HOF - high order funciton.
const hof = () => () => 5; // -> function que retornar uma function
hof()();

//const hof = (fn) => fn(5)
//hof(function a (x){return x}) -> 5

//Closure
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const incrementFn = closure();
console.log(incrementFn());
