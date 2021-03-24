const arrTest = [null, true, { color: "blue" }, "Foi", [5, 6]];
console.log(arrTest.length); //6

arrTest.push({ carro: "BMW" });
console.log(arrTest.length); //7

arrTest.push(function soma(x, y) {
  return x + y;
});

console.log(arrTest[6](1, 2)); //3
