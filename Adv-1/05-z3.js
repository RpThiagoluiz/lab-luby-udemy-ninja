function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2); //o segunda parametro nao foi passado

console.log(multiplyByTwo(5)); //10
