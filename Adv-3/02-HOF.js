//Criar uma Generic Mult function

const multiply = (num1) => {
  return function (num2) {
    return num1 * num2;
  };
};

//Msm coisa que
//const multiply = (num1) => (num2) => num1 * num2

const multByTwo = multiply(2);
const multByTenn = multiply(10);

console.log(multByTwo(5));
console.log(multByTenn(8));

//Seta os va;pres da primeira, recebendo somente os valores da segunda.
