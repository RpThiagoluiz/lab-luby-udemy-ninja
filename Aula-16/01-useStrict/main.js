//useStric, -> diretiva para flar pro browser, que tudo que ta dentro da funcao vai estar em escopo restrito
//no Delete vc nao consegue deletar obj ou variavel. quando vc usa o console.log(delete var)

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

//🐱‍🚀chartAt, traz letra na possicao passada
let name1 = "thiago";

console.log(name1.charAt(0)); //t

//🐱‍🚀split -> quebra e nao modifca a variavel principal
let fullName = "thiago-luiz";
console.log(fullName.split("-")); //[ 'thiago', 'luiz' ]
console.log(fullName.split("l").join("z")); //thiago-zuiz

console.log("As letras do seu nome:");
const myName = "thiago";
for (let index = 0; index < myName.length; index++) {
  console.log(`${myName[index]} é a ${index + 1}ª letra do meu nome.`);
}
myName
  .split("")
  .forEach((char, index) =>
    console.log(`${char} é a ${index + 1}ª letra do meu nome.`)
  );

//🐱‍🚀 Slice ->Retorna de um certo ponto ate outro - nao modifica o arr principal, igual o concat
//let fullName = "thiago-luiz"; -> esta la em cima ele

const convertFullName = fullName
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(convertFullName); //Thiago Luiz
