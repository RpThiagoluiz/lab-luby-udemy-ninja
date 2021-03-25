//🐱‍🚀toString
let arr = [1, 2, 3, 4];
console.log(arr.toString()); //string.

//🐱‍🚀Join
console.log(arr.join(" - "));

//🐱‍🚀conCat
console.log(arr.concat(6)); //msm coisa do push, so q ele nao altera o arr principal

let arr2 = [5, 9, 7];
let arr3 = [10, 11, 12];
console.log(arr.concat(arr2, arr3)); //Juntou todos os arrays em um so

//!important ✨ Um arr multimencional, um arr com outro arr dentro, ele mantem o arr secundario.
let arr4 = ["primeira", ["segunda"]];
console.log(arr.concat(arr4)); //[ 1, 2, 3, 4, 'primeira', [ 'segunda' ] ]

//🐱‍🚀unshift -> adiciona no inicio, lembra q o pop adciona no final
console.log(arr.unshift(0)); //retornando o tamanho do arr. que agora é 5
console.log(`Arr com adc no inicio ${arr}`); // Arr com adc no inicio 0,1,2,3,4
0;

//🐱‍🚀shift -> remove o primeiro item do arr e retorna o item removido
console.log(arr.shift()); //Retorna o item removido do arr 0
