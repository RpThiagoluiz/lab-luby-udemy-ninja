/*
  Nomear uma function auxilia no debug,
  function sem nome que retonar hi
    func() //hi
    func.name //""
    retorno de undefine, ja quando vc da o nome ela retona o nome da function

    function MyFunction () {}
    returno dela no function.name //"myFunction"


*/

let sum = function calculateSum(x, y) {
  return x + y;
};

console.log(`O nome da função que faz a soma é ${sum.name}.`);

/*
calculateSum -> funcao literal
sum -> varialve que armazena essa function
*/

function person() {
  const info = {
    name: "Thiago",
    lastName: "Luiz",
  };
  return info;
}
console.log(person().name); //thiago
console.log(person().lastName); //Luiz

//Api, por exemplo ou objt
let car = {
  color: "yellow",
};

//Tratando aquele obj.
function getCarColor(mycar) {
  return mycar.color;
}
console.log(getCarColor(car)); //yellow

//Function In Function
function showOtherFunction(funct) {
  return funct();
}

console.log(
  showOtherFunction(function () {
    return `Function Js Ninja`;
  })
); //Function Js Ninja

function returnedFunction() {
  return `returned function`;
}
console.log(showOtherFunction(returnedFunction)); //returned function
/*
✨ Ao executar a function, ele automatica executa a function que esta dentro do seu argumento || parametro, e como ele tem 
um returno do seu args ela ja executa a funtion automaticamente, sem preceisar evocar a segunda function

*/
