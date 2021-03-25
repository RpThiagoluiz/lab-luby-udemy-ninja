let obj = {
  color: "blue",
  size: 12,
};

console.log(Object.keys(obj)); // [ 'color', 'size' ], pegar as props do obj e coloca eles dentro de um arr

obj2 = Object.create(obj);

//O prototipo sempre é o objt principal
console.log(obj.isPrototypeOf(obj2)); //true
console.log(obj2.isPrototypeOf(obj)); //false

let jsonObj = JSON.stringify(obj);
console.log(jsonObj); // {"color":"blue","size":12} -> pegar um return de alguma chamada se utiliza muito isso.

let parseObj = JSON.parse(jsonObj);
console.log(parseObj); // { color: 'blue', size: 12 } -> volta a ser Obj
