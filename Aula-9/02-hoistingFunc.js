/*
- Function de expressão não recebe elevação
- Const sayMyName = function () {}... Vc não pode chamar ela antes da sua declaração

Mas uma funcao literal ela ta isada acima de todos e ela passa dnado check na suas acoes.

function myFunct() {
  let numberOne = 1;
  let numberTwo = 2;
  var sum = undefined

  return sum();
  var sum = function sum() {
    return numberOne + numberTwo;
  }
}

*/

function myFunct() {
  let numberOne = 1;
  let numberTwo = 2;

  return sum();
  function sum() {
    return numberOne + numberTwo;
  }
}

console.log(myFunct()); //3

function hostFunc() {
  console.log(`Antes de Declarar, ${number1}`); //Antes de Declarar, undefined
  var number1 = 10;
  console.log(`depois de decalrar ${number1}`); //depois de decalrar 10
}

hostFunc();

/*A msm coisa dele isar a var number1 pra cima da function sem ter um valor atribuido, 
e quando ele chama ele da undefine, depois ele pega o valor salva na memoria e passa ela na segunda chamada
*/
