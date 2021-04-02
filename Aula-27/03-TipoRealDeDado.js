console.log([1, 2, 3, 3, 4].toString()); //return do array em formato de string

console.log({ prop1: 1, prop2: 2 }.toString()); //[object Object]

const arr = [1, 2, 3];
function myFunc() {}

console.log(Object.prototype.toString.call(arr)); //[object Array] -> q ele é um tipo array.

console.log(typeof arr); //object
console.log(typeof myFunc); //function

function is(obj) {
  return Object.prototype.toString.call(obj);
}
function isArray(obj) {
  return is(obj) === "[object Array]";
}

function isObj(obj) {
  return is(obj) === "[object Object]";
}
function isNumber(obj) {
  return is(obj) === "[object Number]";
}

console.log(is(myFunc)); //[object Function]
console.log(isObj(myFunc)); //false
console.log(is(arr)); //[object Array]
console.log(isArray(arr)); //true
console.log(isNumber(1)); //true
console.log(isNumber("A")); //false
