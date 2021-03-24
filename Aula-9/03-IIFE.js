/*
  Immediately invoked function expression

  funccao que se auto ativa. useEffect da vida.

*/

const obj = {
  prop: function () {
    return 1 + 2;
  },
};
console.log(obj); //{ prop: [Function: prop] }
console.log(obj.prop()); //3

//funcao anonima nao há como evocar ela, sem a mesma estar atribuida a uma variavel, ou um propriedade de um obj

// IFE, funcao auto executavel
(function () {
  return 8 + 2;
})(); //10 -> no browser, o auto runner nao rodou.
