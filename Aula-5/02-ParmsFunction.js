function myFunction(arg) {
  return arg;
}

console.log(`✨ ${myFunction()}`); //undefiden, nao ha return dos parametros/argumentos
console.log(`✨ ${myFunction([1, 2, 3])}`); //1,2,3

function myFunction2(arg) {
  return arg[0];
}

console.log(myFunction2([1, 10, 15])); //1, arg no index 0
