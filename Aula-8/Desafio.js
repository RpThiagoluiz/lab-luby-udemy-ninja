/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
const sum = function calculateSum(x, y) {
  return x + y;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
const numberA = 2;
const numberB = 3;

console.log(`A soma de ${numberA} e ${numberB} é igual a ${sum(2, 3)}`); //A soma de 2 e 3 é igual a 5

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}.`); //O nome da função que faz a soma é calculateSum.

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return "Thiago Luiz";
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
const varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${varShowName()}.`); //A função showName retorna Thiago Luiz.

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(args) {
  return function (numberA, numberB) {
    let result;
    switch (args) {
      case "+":
        result = numberA + numberB;
        break;
      case "-":
        result = numberA - numberB;
        break;
      case "*":
        result = numberA * numberB;
        break;
      case "/":
        result = numberA / numberB;
        break;
      case "%":
        result = numberA % numberB;
        break;
      default:
        return "Operação inválida.";
    }
    return `Resultado da operação: ${numberA} ${args} ${numberB} = ${result}.`;
  };
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
const sum2 = calculator("+");

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum2(10, 19)); //Resultado da operação: 10 + 19 = 29.

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
const subtraction = calculator("-");
const multiplication = calculator("*");
const division = calculator("/");
const mod = calculator("%");
const defaultSwitch = calculator("0");

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(9, 18)); //Resultado da operação: 9 - 18 = -9.
console.log(multiplication(8, 9)); //Resultado da operação: 8 * 9 = 72.
console.log(division(8, 2)); //Resultado da operação: 8 / 2 = 4.
console.log(mod(18, 2)); //Resultado da operação: 18 % 2 = 0.
console.log(defaultSwitch(1, 2)); //Operação inválida.
