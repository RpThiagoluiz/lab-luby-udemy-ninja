//NotGood

function notGood(num) {
  return Math.random(num);
  //console.log(num) -< Tambem nao sera pure, esta retornando no windows. >-
}

notGood(5);
//Sempre vai retornar um numero diferente, pelo random nunca vamos adivinhar qual numero sera retornado.
