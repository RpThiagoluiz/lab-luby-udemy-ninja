/*
  Retorna o valor inteiro resto da divisao
  3 / 3 = 1 - Resto 0
  3 % 3 = 0, que é o resto da divisao
  5 % 2 = 1, resto 1

*/

const resto = 31 % 2;

console.log(resto); //2

/*
  Todos os numero pares, são numero dividos por 2 cujo resto seja 0

  Todo numero impar, tem resto 1 na divisao por 2.

  <-- Imprimir todos os numero entre 0 e 20 que sao pares -->
*/

let num = 0;

while (num <= 20) {
  num % 2 === 0 ? console.log(num) : "";
  num++;
}
