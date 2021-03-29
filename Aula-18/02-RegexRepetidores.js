/*
{n,m}
intervalo, utem anterior ao menos n vezes, e no maximo m vezes.

o Intervalor aberto, vc nao coloca o m na equecao
{n}

/? -> fica opcional
\s\d?

/s+ -> seguida da repeticao da msm letra.
/s* -> 0 ou mais ocorrencias do item anterior

*/
//🐱‍🚀Intervalo
let text =
  "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de O Centauro de Luvas, foi um militar, político, abolicionista e monarquista brasileiro.";

const regexInterval = /\d{2,4}/g; // a|e|i|o|u -> msm coisa so que selecionando
const regexOp = /\s\d?/g;

console.log(text.match(regexInterval), "༼ つ ◕_◕ ༽つ"); //[ '13', '1804', '18', '1875' ] //pega de 2 ate 4
console.log(text.match(regexOp), "༼ つ ◕_◕ ༽つ");

const siteGoogle = "http://www.google.com.br";
const siteGeneric = "hpt://chinleo";
const siteGeneric2 = "https://google.com";
const siteGeneric3 = "hhtp://www.globo.org";
const regexHttp = /http:\/\/\w+\.\w+\.\w{3}\.\w{2}/g; //Selecionar somente o google
const regexValidSite = /https?:\/\/w+[.\w]+/;

const regexCheckEmail = /[\w+]+@\w+\.\w+([.\w]+)?/g; // /[\w+]+@\w+\.\w+.?([\w]{2})/g
const emailGeneric1 = "thiago@gmail.com";
const emailGeneric2 = "jhonDoe@hotmail.com";
const emailGeneric3 = "mary@csJ.com.br";

// Requisicao de pesquisa de um site

const regexCheckQueries = /[?&](\w+)=(\w+)/g; //vai ter chave e o valor por match, checar o regex101
const querie = "?slala&b=bebe&c=cece";

console.log(
  querie.replace(regexCheckQueries, (arg, key, value) => `${key} ${value}`) //?slalab bebec cece os avlores das chaves.
);

//Trabalhar a requisicao no corpo da function com if, ou switch case.

console.log(
  querie.replace(regexCheckQueries, (arg, key, value) => {
    if (key === "s") {
      `o resultado de buscara para ${value}:`;
    }
    return;
  }) //?slalaundefinedundefined
);
