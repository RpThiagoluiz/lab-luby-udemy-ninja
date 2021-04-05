const buttonMegaSena = document.querySelector('[data-js="button-mega"]');
const buttonLoto = document.querySelector('[data-js="button-loto"]');
const buttonQuina = document.querySelector('[data-js="button-quina"]');

buttonMegaSena.onclick = megaSenaRandomSwitchTest;
buttonLoto.onclick = lotofacilRandomSwitchTest;
buttonQuina.onclick = quinaRandomSwitchTest;

function megaSenaRandomSwitchTest() {
  allSort("megasena");
}

function lotofacilRandomSwitchTest() {
  allSort("lotofacil");
}

function quinaRandomSwitchTest() {
  allSort("quina");
}

function allSort(type) {
  switch (type) {
    case "megasena":
      game(6, 60);
      break;
    case "lotofacil":
      game(15, 25);
      break;
    case "quina":
      game(5, 70);
      break;
    default:
      break;
  }
}

function sorteia() {
  return Math.round(Math.random() * 100);
}

function game(qnt, range) {
  let resulArray = [];
  let numero = 1;

  while (numero <= qnt) {
    let randomNumber = sorteia();
    let achou = false;

    if (randomNumber !== 0 && randomNumber <= range) {
      for (posicao = 0; posicao < resulArray.length; posicao++) {
        if (resulArray[posicao] == randomNumber) {
          achou = true;
          break;
        }
      }

      if (achou == false) {
        resulArray.push(randomNumber);
        numero++;
      }
    }
  }

  function crecs(pr1, pr2) {
    return pr1 - pr2;
  }

  const resultDesc = resulArray;

  alert("Os números da megasena são: " + resultDesc.sort(crecs));
}
