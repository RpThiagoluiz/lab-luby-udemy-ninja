(function () {
  "use strict";
  function sum() {
    return Array.prototype.reduce.call(arguments, (acc, atual) => acc + atual);
  }
  console.log(sum(1, 21, 25, 264)); //311

  const arrFood = [
    { item: "Arroz", price: "R$ 10.151" },
    { item: "Feijao", price: "R$ 10.785" },
    { item: "Pao", price: "R$ 10.87" },
    { item: "Macarrao", price: "R$ 10.15" },
    { item: "Inhoque", price: "R$ 199.90" },
  ];

  console.table(arrFood); //monstar em uma tabela .
})();

//console -> tipo de debugger
// debuger -> ele funciona como um breakpoint do bronwser
