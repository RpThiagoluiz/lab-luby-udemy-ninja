/*
  Objetos sao mutaveis e manipulados por referencia
  criacao de objetos.

  ✨literais 
    let obj = {
      color: "blue",
      }
  
  ✨Constructor - da api do JS
    let newObj = new Object()

  ✨Prototype - Notion explicacao do Js pagina1 do Maikao.
      Object.create()

*/

let obj = {
  color: "blue",
  size: 12,
};
console.log(obj);

//Por mais q ele seja um obj vazio ele herda as props do pai,
obj2 = Object.create(obj);
console.log(obj2); //{}
console.log(obj2.color); //blue

//Troquei as cores do obj2. contudo o pai permanece imutavel. Isso é horrivel pro js, vc pode mudar muitos dados de boas.
obj2.color = "red";
console.log(obj.color); //blue
console.log(obj2.color); //red

console.log(obj === obj2); //false

for (const key in obj2) {
  console.log(key); //color, size. herdou isso do obj pai
}

//Como eu redeclarei a cor, ele passou a ter ela.
//Como eu nao fiz isso com o size ele tem ela herdada do pai,
//contuno essa props n'ao é dele
console.log(obj2.hasOwnProperty("color")); //true
console.log(obj2.hasOwnProperty("size")); //false

for (const prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(prop); //color, tem somente a color
  }
}
