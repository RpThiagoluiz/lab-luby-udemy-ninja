/*
  Blocos de codigo Javascript nomeados, e que podem ser invocados usando o operador ()

  estrutura da function
  function nome () {`return()*1`}
    *1, pode ter ou nao return
  
  A function ela tem scopo.
  Lembra que vc tem que chamar a function com `()` para ela ser iniciada.

  Function podem receber argumentos ou parametros,*2.
    *2, No ReactJS, sao a props, dos Functions components.
    **Nas function, assim que chegar no return ela nem continua. simplismente ignora.
    
*/
let x = 1;

function test() {
  x = x + 1;
}
test();
console.log(x); //valor de 2

//----------------
function Fnome1() {
  var nome = "thiago";
}
Fnome1(); // Error de Referencia, nome is not defined, porq o nome so existe dentro daquela funcion

//----------------
function Fnome2() {
  var nome2 = "thiago";
  return console.log(nome2);
}
Fnome2(); // 'thiago'

var soma = 15 + 8;
console.log(soma);
soma++;
console.log(`soma + 1 ${soma}`);
soma *= 3;
console.log(`soma * 3 ${soma}`);

const divisao = (numA, numB) => numA / numB;
console.log(divisao(10, 2));
