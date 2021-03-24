/*
Crie um array com 5 items (tipos variados).
*/
const arrTest = [null, true, { color: "blue" }, "Foi", [5, 6]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = (item) => {
  arrTest.push(item);
  return arrTest;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([true, null, { num: 29 }]));
/* 
  Resposta:
  [
  null,
  true,
  { color: 'blue' },
  'Foi',
  [ 5, 6 ],
  [ true, null, { num: 29 } ]
]
*/

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${arrTest[5][1]}`); // null

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O primeiro array tem ${arrTest.length - 1} itens.`); //O primeiro array tem 5 itens.
/*

Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arrTest.length} itens.`); // O segundo array tem 6 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let num = 10;
let restParInArr = [];
while (num <= 20) {
  num % 2 === 0 ? restParInArr.push(num) : "";
  num++;
}
//Esse console tava no index copiado,
console.log(`Números pares entre 10 e 20: ${restParInArr}`); //Números pares entre 10 e 20: 10,12,14,16,18,20

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
num = 10;
let restImparInArr = [];
while (num <= 20) {
  num % 2 === 1 ? restImparInArr.push(num) : "";
  num++;
}
console.log(`Números ímpares entre 10 e 20: ${restImparInArr} `); //Números ímpares entre 10 e 20: 11,13,15,17,19

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
let forParRestZero = [];
for (let index = 100; index <= 120; index++) {
  index % 2 === 0 ? forParRestZero.push(index) : "";
}
console.log(`Números pares entre 100 e 120: ${forParRestZero}`);
//Números pares entre 100 e 120: 100,102,104,106,108,110,112,114,116,118,120

let forImparRestOne = [];
for (let index = 111; index <= 125; index++) {
  index % 2 === 1 ? forImparRestOne.push(index) : "";
}
console.log(`Números ímpares entre 111 e 125: ${forImparRestOne}`);
//Números ímpares entre 111 e 125: 111,113,115,117,119,121,123,125
