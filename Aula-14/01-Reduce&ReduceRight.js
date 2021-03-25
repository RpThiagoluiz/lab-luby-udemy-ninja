let arrNum = [5, 15, 30, 41, 52];
let arrString = ["T", "h", "i", "a", "g", "o"];

/*
  Vai passar por cada item do array, pegar todo valor acumulado e somar mais o atual.
*/

let reduceNum = arrNum.reduce(function (acumulado, atual, index, array) {
  return acumulado + atual;
}, 0);

console.log(reduceNum); //143
/* 
Primeira Posicao - ValorAcumulado + Valor Da Prop = new Valor Acumulado
Segunda Posicao - new Valor Acumulado + Valor Da Prop = new Valor Acumulado
...
ate o final do array

1ª - 0 + 5 = 5
2ª - 5 + 15 = 20
3ª - 20 + 30 = 50
4ª - 50 + 41 = 91
5ª - 91 + 52 = 143
*/

let reduceString = arrString.reduce(function (acumulado, atual, index, array) {
  return acumulado + atual;
}); //removi o 0, se nao o retorno seria 0Thiago

console.log(reduceString);

//🐱‍🚀Reduce Right -> comeca da direita para a esquerda, do ultimo ate o primeiro

let reduceNumRight = arrNum.reduceRight(function (
  acumulado,
  atual,
  index,
  array
) {
  return acumulado + atual;
},
0);

console.log(reduceNumRight); //143

let reduceStringRight = arrString.reduceRight(function (
  acumulado,
  atual,
  index,
  array
) {
  return acumulado + atual;
});

console.log(reduceStringRight); //ogaihT
