let arr = ["🐱‍🏍", "🐱‍👤", "🤳", "🎂", "😜", "🌹", "💋"];
let arrNum = [1, 2, 3, 4, 5, 6, 7];
//🐱‍🚀 forEach

// for (let index = 0; index < Object.keys(books).length; index++) {
//   console.log(
//     `For: -> Livro ${books[index].name}, tem ${books[index].pages} paginas`
//   );
// }

// arr.forEach(function (item, index) {
//   console.log(item, index);
// });

//Cart somar o valor dos items dentro
let sum = 0;
arrNum.forEach((item) => (sum += item));
console.log(sum); //28
/*
arrNum.forEach(function(item) {
  return  (sum += item)
});

*/

//🐱‍🚀every() -> sempre retornar true ou false

const everyMinFive = arrNum.every((item) => item < 5);
console.log(`Item do arr sao menor que cinco: ${everyMinFive}`); //false
const everyMinFiveminEight = arrNum.every((item) => item < 8);
console.log(`Item maiores que oito: ${everyMinFiveminEight}`); //true

//🐱‍🚀some() -> faz msm coisa que o every, so q para alguns elementos. tipo um ou. Se um der certo tudo true
const someModTwo = arrNum.some((item) => item % 2 === 0);
console.log(
  `Alguem item do array é dividido por 2 tem resto 0 ? ${someModTwo}`
); //true
const someHight = arrNum.some((item) => item > 8);
console.log(`Alguem item do array é maior que oito ? ${someHight}`); //false
