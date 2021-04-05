function importantPeron() {
  console.log(this.name);
}
//O this aqui dentro nesse caso, sera referenciado pelo obj windows.
//Nesse caso voce abstrai a function,
//que vai ser passada para todos os objetos. e assim que vc chama-la
//ela sera referenciada pelo methodo do obj que possui o seu valor.

const name = "Sunny";

const obj1 = {
  name: "Tonhao",
  importantPeron: importantPeron,
};

const obj2 = {
  name: "Bento Tripe!",
  importantPeron: importantPeron,
};

importantPeron(); //Sunny, obj global que ele esta fora da uma function.
obj1.importantPeron(); //Tonha
obj2.importantPeron(); //Bento
//Quando vc passar ele vai pegar a referencia mais proxima, que no caso é o valor da propriedade name dentro do obj
