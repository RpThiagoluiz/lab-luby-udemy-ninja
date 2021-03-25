let newObject = new Object();
console.log("newObject", newObject); //{}

function MyConstructor() {
  this.prop1 = "prop1";
  this.prop2 = "prop2";
}

console.log(MyConstructor()); //undefined sem retorno

let objConstructor = new MyConstructor();

console.log("MyConstructor", objConstructor); // MyConstructor MyConstructor { prop1: 'prop1', prop2: 'prop2' }
//Nesse caso o this faz referencia ao objeto instanciado.
