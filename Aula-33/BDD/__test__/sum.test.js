const expect = require("chai").expect;
const sum = require("../BDD/src/sum");

//BDD
//Behaviour Drive Development.
//Desenvolvimento guiado por comportamento.

describe("# SUM", function () {
  //cada it é um test
  //Nota: Embaixo de cada teste eu estou colocando como foi mudada a function Sum
  it("Should SUM module to be a function", function () {
    expect(sum).to.be.a("function");
  });

  it("Should SUM return 10 when i pass 1 and 9", function () {
    expect(sum(1, 9)).to.be.equal(10);

    //   function sum() {
    // return 10;}
    //Busca escrever da forma mais simples possivel para passar nos testes
  });

  it("Should SUM return 5 when i pass 2 and 3", function () {
    expect(sum(2, 3)).to.be.equal(5);
    // function sum(a, b) {
    //   return a + b;
    // }
  });

  it("Should SUM return an error if it receive just one parameters", function () {
    expect(sum(2)).to.be.an("Error");

    // function sum(a, b) {
    //   if (!a || !b) {
    //     return new Error("Passe dois parametros!");
    //   }
    //   return a + b;
    // }
  });

  it("Should SUM return an error if the parameter has not a number", function () {
    expect(sum("a", "b")).to.be.an("Error");

    // function sum(a, b) {
    //   if (!a || !b) {
    //     return new Error("Precisamos de 2 parametros");
    //   }

    //   //Lembra que o type of testa como string
    //   if (typeof a !== "number" || typeof b !== "number") {
    //     return new Error("So aceitamos Numeros");
    //   }
    //   return a + b;
    // }
  });
});
