const obj = {
  name: "Sally",
};

console.log(obj.hasOwnProperty("hasOwnProperty"));
//false, ele nao. ele tem somente na cadeia de prototype

function a() {}

console.log(a.hasOwnProperty("call")); //false
//Function ele nao tem essas propriedades por padrao, elas somente existem na cadeia de prototipo

console.log(a.hasOwnProperty("name")); //true
//Minha function tem um name
//Funcoes sao um tipo especial de dentro do JS.
//Elas tem um codigo, um nome e suas propriedades. Elas sao objetos.
//Suas properties sao .call(), . apply(), .bind()
