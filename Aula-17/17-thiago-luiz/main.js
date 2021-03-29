(function () {
  "use strict";
  /*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

  /*
Em todos os exercícios desse desafio, nós vamos utilizar expressões
regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
variável chamada `text`:
"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
*/
  let text =
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de O Centauro de Luvas, foi um militar, político, abolicionista e monarquista brasileiro.";

  /*
Vamos começar com umas brincadeiras fáceis :D
Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
no console:
*/
  console.log("Adicionando seu nome no texto:");
  const regexCatchName = /Manuel Marques de Sousa/g;
  const myName = "Thiago Luiz Goncalves";
  console.log(text.replace(regexCatchName, myName));

  /*
Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
console.
Ex: Se você for da São Paulo, substitua por "paulista".
*/
  console.log("\nTrocando naturalidade:");
  const regexCatchCityOfBirth = /brasileiro/g;
  const myCityOfBirth = "anapolino";
  console.log(text.replace(regexCatchCityOfBirth, myCityOfBirth));

  /*
Substitua todos os números por um traço `-`. Cada caractere de número deve
ser um traço. Mostre o resultado no console:
*/
  console.log("\nTrocando números por -:");
  const regexCatchNumber = /[0-9]/g;
  console.log(text.replace(regexCatchNumber, "-"));

  /*
Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
minúsculo por "0" (número zero). Mostre o resultado no console:
*/
  console.log('\nTrocando de "D" a "h" por "0":');
  const regexCatchDH = /[D-h]/g;
  console.log(text.replace(regexCatchDH, "0"));

  /*
Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
Mostre o resultado no console:
*/
  console.log('\nTrocando "A" e "a" por "4":');
  const regexCatchAa = /[Aa]/g;
  console.log(text.replace(regexCatchAa, "4"));

  /*
Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
o método `toUpperCase()`. Mostre o resultado no console:
*/
  console.log('\n"O Centauro de Luvas" em caixa alta:');
  const regexCatchPhrase1 = /O Centauro de Luvas/g;
  console.log(
    text.replace(regexCatchPhrase1, (letter) => letter.toUpperCase())
  );

  /*
Agora iremos substituir as datas no formato "13 de junho de 1804" para
"13/06/1804". A primeira coisa a fazer é criar uma função chamada
`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
retornar o número correspondente a esse mês.
Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
Números com menos de dois dígitos devem ter um zero na frente.
Crie então a função e mostre no console os retornos para os meses de março,
setembro e dezembro.
Use um console.log para cada mês, usando a frase:
"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
*/
  console.log("\nMeses representados por números:");
  const getMonthNumber = (mounth) => {
    switch (mounth) {
      case "Janeiro":
      case "janeiro":
        return "01";
      case "Feveiro":
      case "feveiro":
        return "02";
      case "Março":
      case "março":
        return "03"; //`O mês de ${mounth} é representado pelo número 03`; Seria melhor, contudo ele pediu o retorno do numero na function
      case "Abril":
      case "abril":
        return "04";
      case "Maio":
      case "maio":
        return "05";
      case "Junho":
      case "junho":
        return "06";
      case "Julho":
      case "julho":
        return "07";
      case "Agosto":
      case "agosto":
        return "08";
      case "Setembro":
      case "setembro":
        return "09";
      case "Outubro":
      case "outubro":
        return "10";
      case "Novembro":
      case "novembro":
        return "11";
      case "Dezembro":
      case "dezembro":
        return "12";
      default:
        break;
    }
  };

  const enterMount = (mounth) =>
    `O mês de ${mounth} é representado pelo número ${getMonthNumber(mounth)}`;

  console.log(enterMount("março"));
  console.log(enterMount("setembro"));
  console.log(enterMount("dezembro"));

  /*
Agora, declare uma variável chamada `regexDate` que irá receber a expressão
regular que irá fazer o match com as datas. Crie grupos de captura para o
dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
meses que estão no texto, não precisa adicionar todos.
Com o que vimos até agora, você consegue fazer :D
Mostre a regex no console.
*/
  console.log("\nRegex que vai fazer o match com as datas do texto:");
  const regexMatchDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;

  console.log(text.match(regexMatchDate));

  /*
Agora crie a função que irá fazer o replace dos dados. A função será chamada
de `replaceDate`. Ela deve retornar a data no formato:
"[DIA]/[MÊS]/[ANO]"
Após criar a função, faça o replace das datas no texto, mostrando no
console o resultado.
*/
  console.log("\nReplace de datas:");
  // const replaceDate = (day, mounth, year) =>
  //   `${day}/${getMonthNumber(mounth)}/${year}`;
  const replaceDate = (arg, day, mounth, year) =>
    `${day}/${getMonthNumber(mounth)}/${year}`;

  console.log(text.replace(regexMatchDate, replaceDate));
})();
