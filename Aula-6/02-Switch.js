/*
  Switch, operador strict ` === `


  

*/
function myFunc(x) {
  switch (x) {
    case 1:
      console.log(`x é ${x}`);
      break;
    case 2:
      console.log(`x é ${x}`);
      break;
    case 3:
      console.log(`x é ${x}`);
      break;
    default:
      console.log(`x é ${x}, no default no switch`);
      break;
  }
}

myFunc(4);
