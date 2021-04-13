//function() + lexical scope()

function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

console.log(a()); //[Function: b]
console.log(a()()); //[Function: c]
console.log(a()()()); //grandpa > father > son

function boo(string) {
  return function (name) {
    return function (name2) {
      console.log(`${string} ${name} ${name2}`);
    };
  };
}

const booString = boo("hi");
const booName = booString("jhon");
const booNameTwo = booName("tiao");

boo("hi")("jhon")("tiao"); //hi jhon tiao
booName(); //hi jhon undefined
