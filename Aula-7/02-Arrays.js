/*
  lenght = tamanho do arr

*/

const arrTest = [null, true, { color: "blue" }, "Foi", [5, 6]];
console.log(arrTest.length); //6

let qtdInArr = arrTest.length;

while (qtdInArr >= 0) {
  console.log(arrTest[qtdInArr--]);
  if (qtdInArr === 2) {
    console.log(arrTest[qtdInArr].color);
  }
}
