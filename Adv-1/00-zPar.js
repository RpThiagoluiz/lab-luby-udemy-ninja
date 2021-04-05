function ParOuImpar(number) {
  return number % 2 === 0 ? "Par" : "impar";
}

console.log(ParOuImpar(5));
console.log(ParOuImpar(4));
console.log(ParOuImpar(515965));

const numbers = [];
for (let index = 0; index <= 20; index++) {
  //index % 2 === 0 ? numbers.push(index) : ""; -> Daria o mesmo resultado
  if (index % 2 !== 0) {
    continue;
  }

  numbers.push(index);
}
console.log(`Pares de 0 a 20: ${numbers}`);

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
