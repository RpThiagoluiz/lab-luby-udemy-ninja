(function () {
  "use strict";
  function myFunc(a, b, c) {
    console.log(this.lastName, a, b, c);
  }

  const obj = {
    lastName: "luiz",
  };

  const obj2 = {
    lastName: "gonasalves",
  };

  console.log(myFunc.length); // Vai contar quantos parametros a function pode receber. no caso retorna 3

  myFunc.call(obj, 1, 2, 3); //luiz 1 2 3
  myFunc.call(obj2, 1); //gonasalves 1 undefined undefined
  //myFunc.call(null, 1); //null 1 undefined undefined
  myFunc.call(myFunc, 1); //passar um call e nao tem um this especifico

  let arr = [1, 2, 3, 4];

  myFunc.call(obj, arr); //luiz [ 1, 2, 3, 4 ] undefined undefined Array, e colocar no primeiro parametro da function
  myFunc.apply(obj2, arr); //gonasalves 1 2 3 ele vai pegar o array de itens e colocar cada um dentro da sua prop.

  //O .call permite vc referenciar um objt que esta fora da function. assim o this daquela fuction passar a ser o passado dentro do parametro

  function MyFunc2(name, lastName, version) {
    this.name = name;
    this.lastName = lastName;
    this.version = "1.0.0";
  }

  MyFunc2.prototype.fullname = function () {
    return this.name + " " + this.lastName;
  };

  let thiago = new MyFunc2("thiago", "luiz"); //undefined sem o new

  console.log(thiago.fullname()); //Thiago luiz
  //Extendendo pelo prototype, da funcion, colocando um age dentro dela.
  //caso o this.age= nao existe dentro da function, se vc passar ele passa aceitar a propriedade de age como o valor passado.
  MyFunc2.prototype.age = 30;
  console.log(thiago.age); //30

  MyFunc2.prototype.version = "20";
  console.log(thiago.version); //1.0.0 -> ela nao sobreescreve o valor padrao passado.
})();

//prototype,  notion ta mais completo
