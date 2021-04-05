const months = [
  "Janeiro",
  "fevereiro",
  "marco",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const year = 2021;
const month = 4; //mes comeca com 0
const day = 5;
const hour = 11;
const min = 12;
const sec = 5;
const milliseconds = 150;

const date = new Date(year, month, day, hour, min, sec, milliseconds);
// new Date, ele é um construtor, logo quando ele passar do valor de dias de um mes ele vai virar o mes.

console.log(date); //2021-05-05T14:12:05.150Z

console.log(Date.now()); //numero em milissegundos 1617632243749

const dateHj = new Date();
console.log(dateHj.getDate()); //Dia de agora 0 - 31
console.log(dateHj.getDay());
console.log(dateHj.getFullYear());
console.log(dateHj.getYear()); // tem mais uma renca a fora ai 0 a 99 de 1900 a 1999 - 0 a 100 2000 + 15
