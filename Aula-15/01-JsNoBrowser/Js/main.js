/*
  A IIFE, ela ajuda a nao sobreescrever uma variavel, uma vez que todas sao colocadas no escopo global.
  styled-components, cssmodule trabalha dessa forma,

*/

(function () {
  var myObject = {
    myProperty: 1,
    init: function init() {
      return this; //this.myProperty, ele vai retornar o 1
      //retornar o mesmo objeto, o this é a referencia do objeto.
    },
  };
  console.log(myObject);
  console.log(myObject.init());
})();

/*
Classico, 
  windows do html, que é o escopo global do html.
  no node, chamasse Global

  Eu acho de api nativa. 
*/
