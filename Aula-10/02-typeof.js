/*
  Qlq outro obj que nao seja function ela vai da retorno dela como um objeto
  Notion do maikao, ta mais claro


  Typeof, aconselhavel utilizar ele para valores primitivos.
*/

/*
  ✨ TypeConversion || TypeCasting vs Type Coersion

    Alteração de um tipo de dado para outro tipo

    Conversion é realizada pelo dev

    Coersion o proprio js faz automatico


 */

function subtract(numb1, numb2) {
  if (typeof numb1 === "number" && typeof numb2 === "number") {
    return numb1 - numb2;
  }

  return `Entre com dois numeros, ${numb1} & ${numb2}, são invalidos!`;
}
console.log(subtract(9, 2));
console.log(subtract("abacate", 2));

function otherSubtract(numb1, numb2) {
  if (!numb1) {
    return `Entre com dois numeros, ${numb1} & ${numb2}, são invalidos!`;
  }

  return numb1 - numb2;
}
console.log(otherSubtract(9, 2));
console.log(otherSubtract("", 2));

//Que nesse caso o `!numb1` ta testando valores falsos, se vc pasasr uma string fica veradeiro e vai retornar um NaN
