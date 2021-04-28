//Funcional Programming Intro
//Side effects:
const array = [1, 2, 3];

function mutateArray(arr) {
  return arr.pop();
}

function mutateArray2(arr) {
  return arr.forEach((item) => arr.push(1));
}
//The order of the function calls will matter.
//mutateArray(array);
//mutateArray2(array);

//No side effect - nao esta alterando o valor original do array.
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}
console.log(removeLastItem(array)); //[ 1, 2 ]
console.log(multiplyBy2(array)); //[ 2, 4, 6 ]
console.log(array); //[ 1, 2, 3 ]
