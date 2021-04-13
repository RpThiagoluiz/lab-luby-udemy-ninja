//Referencia
let obj1 = { name: "yao", passaword: "123" };
let obj2 = obj1;

obj2.passaword = "easypeasy";
console.log(obj1);
console.log(obj2);
//ambos serao { name: 'yao', passaword: 'easypeasy' }

//Value
const a = 5;
const b = a;
//b++;
console.log(a);
console.log(b);

//Exemplo salvando memoria
const c = [1, 2, 3, 4, 5];
const d = c;

d.push(1234545);
console.log(c); //[ 1, 2, 3, 4, 5, 1234545 ]

const objt1 = { a: "a", b: "b", c: "c" };

const cloneobjt1 = Object.assign({}, objt1);

objt1.c = 5;
console.log(cloneobjt1);

const objt3 = { a: "a", b: "b", c: "c", d: 8 };
const cloneobjt3 = { ...objt3 };
objt3.a = 80;

console.log(cloneobjt3); //{ a: 'a', b: 'b', c: 'c', d: 8 }

///BRABO!

const objk = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me!",
  },
};

const elf = { ...objk };
objk.c = 5;
console.log(elf); // { a: 'a', b: 'b', c: { deep: 'try and copy me!' } }
objk.c.deep = "hahahha";
const superCloneObjk = JSON.parse(JSON.stringify(objk));
console.log(superCloneObjk); //{ a: 'a', b: 'b', c: { deep: 'try and copy me!' } }
