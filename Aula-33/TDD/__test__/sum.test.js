const assert = require("assert");
const sum = require("../src/sum");

//BDD
//Behaviour Drive Development.
//Desenvolvimento guiado por comportamento.

describe("# SUM", function () {
  it("Assert", function () {
    //Assert vai receber a funcao, o resultado esperado dessa funcao e a messagem.
    assert.strictEqual(sum(20, 30), 50, "Message");
    //BDD do codigo acima.
    // expect(sum(20,30).to.be.equal(50))
  });
});

//Documentacao do CHAI,MOcha e do ASSERT
