// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(numberA, numberB) {
  return numberA + numberB;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma(13, 11) + 5;
console.log(result);

// Qual o valor atualizado dessa variável?
29;

// Declare uma nova variável, sem valor.
var newValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function changeVarValue() {
  newValue = 7;
  return `O valor da variável agora é ${newValue}`;
}

// Invoque a função criada acima.
console.log(changeVarValue());

// Qual o retorno da função? (Use comentários de bloco).
/*
  O valor da variável agora é 7
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicationArgs(numA, numB, numC) {
  if (!numA || !numB || !numC) {
    return "Preencha todos os valores corretamente!";
  }
  return numA * numB * numC + 2; //Return sem o Else!
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplicationArgs(4, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplicationArgs(4, 4, 2));
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//18

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function handleArgs(numA, numB, divisorC) {
  //SwitchCase + spread.
  if (numA === undefined) {
    return false;
  } else if (numB === undefined) {
    return numA;
  } else if (divisorC === undefined) {
    return numA + numB;
  } else if (
    numA !== undefined &&
    numB !== undefined &&
    divisorC !== undefined
  ) {
    return (numA + numB) / divisorC;
  } else {
    return null;
  }
  /* 
  function handleArgs(numA, numB, divisorC) {
  
  if (numA !== undefined && numB === undefined && divisorC === undefined) {
    return numA
  } else if (numA !== undefined && numB !== undefined && divisorC === undefined){
    return numA + numB
  } else if (numA !== undefined && numB !== undefined && divisorC !== undefined){
    return (numA + numB)/divisorC
  } else if (numA === undefined && numB === undefined && divisorC === undefined){
    return false
  } else {
    return null
  }
    
  
  
  */

  /* 
  function handleArgs(...numbers) {
    let option = numbers.length;
      switch(option){
          case 0: 
              return false;
          case 1:
              return numbers[0];
          case 2: 
              return numbers.reduce((a, b) => a + b);
          case 3:
              return ( (numbers[0] + numbers[1]) / numbers[2] );
          default:
              return null;     
      }
  }
  */
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(handleArgs()); //false
console.log(handleArgs(5)); //5
console.log(handleArgs(5, 3)); // 8
console.log(handleArgs(5, 3, 2)); //4
