//Sao expressoes regulares, um tipo primitivo.

//  /M/; //-> formato literal de js
// /w -> caracteres alfanumericos
// /d -> digitos

const text = `t is a long established lookinghas a al dis, as opposed to 1875 using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search`;

//!important, minusculo. O maisculo faz o inverso
const regex = /m/g;
const regexN = /\d/g; //esse G e de global, ele vai pegar o texto todo, se nao ele para no primeiro
const regex1 = /\w/g; //null porq nao tem numeros nesse texto
const regexS = /\s/g; //Pegar todos os espacos, que nao sejam quebras de linha
const regexDot = /./g; //pegar todas as quebras de linhas
const regexT = /\t/g; //pegar a tabulacao

console.log(text.match(regex)); // Array, com os M no texto
console.log(text.match(regexN)); // Array, com os M no texto
console.log(text.match(regex1)); //todo texto, separado retornado em array.
/*
[
  't', 'i', 's', 'a', 'l', 'o', 'n', 'g', 'e', 's', 't', 'a',
  'b', 'l', 'i', 's', 'h', 'e', 'd', 'l', 'o', 'o', 'k', 'i',
  'n', 'g', 'h', 'a', 's', 'a', 'a', 'l', 'd', 'i', 's', 'a',
  's', 'o', 'p', 'p', 'o', 's', 'e', 'd', 't', 'o', 'u', 's',
  'i', 'n', 'g', 'C', 'o', 'n', 't', 'e', 'n', 't', 'h', 'e',
  'r', 'e', 'c', 'o', 'n', 't', 'e', 'n', 't', 'h', 'e', 'r',
  'e', 'm', 'a', 'k', 'i', 'n', 'g', 'i', 't', 'l', 'o', 'o',
  'k', 'l', 'i', 'k', 'e', 'r', 'e', 'a', 'd', 'a', 'b', 'l',
  'e', 'E', 'n', 'g',
  ... 99 more items
]
*/

//Sempre que o regex nao encontrar oq esta procurando ele retorna null
