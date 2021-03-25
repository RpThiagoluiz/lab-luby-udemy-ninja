let arrNum = [5, 15, 30, 41, 52];
let arrString = ["T", "h", "i", "a", "g", "o"];

//Procura se um valor exite dentro do indice do arr.
console.log(arrNum.indexOf(15)); // esta no indice 1
console.log(arrString.indexOf("a")); // esta no indice 3 - posicao 3
//segundo parametro, e apartir de onde ele vai procurar aquele valor
console.log(arrString.indexOf("T", 2) > -1); //-1, no caso false - se passar 0 ele da 1

//🐱‍🚀lasIndexOf, ele faz msm coisa comecando do final, direita. -> ele nao inverte as posicoes/index
let lastIndex = arrNum.lastIndexOf(5);
console.log(lastIndex); //0
