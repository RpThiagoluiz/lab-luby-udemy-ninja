//useStric, -> diretiva para flar pro browser, que tudo que ta dentro da funcao vai estar em escopo restrito

(function () {
  "use strict";
  let myName = "Thiago";
  console.log(myName);
})();
//console.log(myName); //Sem o strict ele lanca o erro aq.

(function () {
  let objtCascade = {
    prop1: {
      prop2: {
        prop3: {
          prop31: "prop31 - Value",
          prop32: "prop32 - Value",
          prop33: "prop33 - Value",
        },
      },
    },
  };
  console.log(objtCascade); //{ prop1: { prop2: { prop3: [Object] } } }
  console.log(objtCascade.prop1.prop2.prop3); //{ prop31: 'prop31', prop32: 'prop32', prop33: 'prop33' }
  //'use strict' nao permite o uso disso
  with (objtCascade.prop1.prop2.prop3) {
    console.log(prop31, prop32, prop33);
  } //prop31 - Value prop32 - Value prop33 - Value
})();
