const obj = {
  two: function () {},
};

//Es6
const objEs6 = {
  two() {},
};

//Function Construtora
const objfour = new Function("num", "return num");
console.log(objfour(4)); //4

//Especial Obj
function whoohoo() {
  console.log("whoooooo");
}

whoohoo.yell = "ahhhhhhh";

//Same think
const specialObj = {
  yell: "ahhhhhh",
  name: "woohoooo",
  // (): console.log('woohooo')
};

//Methodos
// Call, aply, build

//Function is special type of object.
// He have special methods.

//Remenber Function is first class citizens in JS

const stuff = function () {};

function a(fn) {
  fn();
}
//Function can have a args, and this args can be a function
a(function () {
  console.log(`hi there`); //hi there
});
function b() {
  return function c() {
    console.log("bye");
  };
}
//b(); -> bye

const d = b();
d(); //bye;
