//Novamente o This e o escope.

//use strict

const obj = {
  name: "thiago",
  sing: function () {
    return "lalala" + this.name;
  },
  //sms sintaxe da de baixo.
  singAgain() {
    // return "alalal" + this.name + "!"; a msm coisa que
    return this.sing() + "!";
  },
};

console.log(obj.sing()); //lalalathiago
//Lembrao que quando vc acessa um function dentro de um objeto. vc esta acessado o metodo dentro daquele obj.

console.log(obj.singAgain());
