/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

var carro = {
  marca: "BMW",
  modelo: "M1",
  placa: "Null-010",
  ano: 2021,
  cor: "Roxo",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,
};

carro.adcPessoas = function (numberPeopleWillGetInCar) {
  var passengers = carro.quantidadePessoas + numberPeopleWillGetInCar;

  if (
    carro.quantidadePessoas === carro.assentos &&
    passengers >= carro.assentos
  ) {
    return `O carro já está lotado!`;
  }

  if (passengers > carro.assentos) {
    var maxSeats = carro.assentos - carro.quantidadePessoas;
    var checkWord = maxSeats === 1 ? "pessoa" : "pessoas";
    return `Só cabem mais ${maxSeats} ${checkWord}!`;
  }

  carro.quantidadePessoas += numberPeopleWillGetInCar;

  return `Já temos ${carro.quantidadePessoas} pessoas no carro!`;
};
console.log(carro.adcPessoas(3));
console.log(carro.adcPessoas(1));
console.log(carro.adcPessoas(8));
console.log(carro.adcPessoas(1));
console.log(carro.adcPessoas(2));
