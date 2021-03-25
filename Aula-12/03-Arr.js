//push colocar - pop para tirar - length tamanho do arr -

let arr = ["arroz", "feijao", "lasanha", "abacate"];

console.log(arr);

arr.join(" ");
console.log(arr);

console.log(`Meu almoco sera, ${arr.join(", ")}`); //junta items de um array, e transforma em uma string

//OS dois metodos modificam o arr principal.

console.log(`Meu almoco sera, ${arr.reverse()}`); //inverter o array
arr.reverse();

arr.sort(); //ordenar por ordem alfabetica
console.log(`Meu almoco sera, ${arr}`);
