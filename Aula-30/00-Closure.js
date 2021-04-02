(function () {
  "use strict";

  let scope = "global scope da function no caso";

  function checkScope() {
    let scope = "local scope";

    function myfc() {
      return scope;
    }
    return myfc();
  }
  console.log(scope); //global scope da function no caso
  console.log(checkScope()); //local scope

  let counter = 0;
  function increment() {
    return counter++;
  }
  function otherFunction() {
    return (counter = 150);
  }
  otherFunction(); //aq vc chama o valor e ele ja muda totalmente a variavel de 0 para 150
  console.log(increment()); //150
  console.log(increment()); //151
  console.log(increment());
  console.log(increment());
})();

//Com arrow function, nda mais é q um closure. Q vai prender dentro daquela variavel a function.

let increment = (function () {
  let counter = 0;

  return function () {
    return counter++;
  };
})();

function incrementNewValue() {
  return (counter = 150);
}
incrementNewValue();
//Assim, quando vc fecha pelo ife, ela nao consegue alterar o
//valor daquela function. Arrow Function praticamente, aodne o this sempre refrencia o objt da function.
console.log(increment()); //0
console.log(increment()); //1
console.log(increment()); //2
console.log(increment()); //3
