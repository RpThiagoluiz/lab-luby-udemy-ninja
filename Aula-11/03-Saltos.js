/*
  Saltos. - pular as instrucoes seguintes.
  Return
  break
  continue

*/
// <-- Switch -->

function MyFunction() {
  let number = 5;
  if (number === 10) {
    return true;
  }
  let number2 = 5;
  let name = "thiago luiz";
  return `${name} ${number2}`;
}
console.log(MyFunction());

//Se o number for = 10 retorna true da function
//Se o number for qlq outra coisa ele retornara -> thiago luiz 5

/*
  A mesma coisa

  function MyFunction() {
  let number = 5;
  let returnVar;
  if (number === 10) {
    returnVar true;
  } else {

    let number2 = 5;
    let name = "thiago luiz";
    returnVar `${name} ${number2}`;
  }
  return returnVar
}
console.log(MyFunction());
*/

// <-- BREAK -->

let number = 10;
switch (number) {
  case 1:
    console.log(`Switch resp ${number}`);
    break;
  case 1:
    console.log(`Switch resp ${number}`);
    break;
  case 10:
    console.log(`Switch resp ${number}`);
    break;
  default:
    console.log(`Default`);
    break;
}

//Switch resp 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let index = 0; index < arr.length; index++) {
  if (index === 5) {
    break;
  }
  console.log(index);
}
// 1, 2, 3, 4

// <-- continue -->

for (let index = 0; index < arr.length; index++) {
  if (index === 5) {
    continue;
  }
  console.log(index);
}
//0,1,2,3,4,6,7,8,9,10   -> Pulou o numero 5 e continuou com o looping!
