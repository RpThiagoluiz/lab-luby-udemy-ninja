/*
  


*/
function myFuncArr() {
  return [1, 2, 3];
}
console.log(myFuncArr());
console.log(myFuncArr()[1]); //2
console.log(myFuncArr()[4]); //undefined

function myFuncObj() {
  return {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
    prop4: "value4",
    prop5: function () {
      return `Metodo prop5 function return`;
    },
  };
}
console.log(myFuncObj());
console.log(myFuncObj().prop3); //value3
console.log(myFuncObj().prop5()); //Metodo prop5 function return
console.log(myFuncObj().prop10); //undefined
