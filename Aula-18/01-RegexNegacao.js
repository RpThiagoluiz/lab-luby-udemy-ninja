/*
  /[^abc/  //pegar qlq menos o abc

*/

let text =
  "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de O Centauro de Luvas, foi um militar, político, abolicionista e monarquista brasileiro.";

const regexNotVogal = /[^aeiou]/g; // a|e|i|o|u -> msm coisa so que selecionando
const regexNotAlfaNumber = /\W/g;
const regexNotNumber = /\D/g;
const regexNotEmptSpace = /\S/g; // se vc quiser pegar todos os caracteres, /[\S\s]/

console.log(text.match(regexNotVogal));
console.log(text.match(regexNotAlfaNumber));
console.log(text.match(regexNotNumber));
