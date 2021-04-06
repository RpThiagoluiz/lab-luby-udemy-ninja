//module.exports = function () {};
function sum(a, b) {
  if (isEmpity(a) || isEmpity(b)) {
    return new Error("Precisamos de 2 parametros");
  }

  //Lembra que o type of testa como string
  if (!isNumber(a) || !isNumber(b)) {
    return new Error("So aceitamos Numeros");
  }
  return a + b;
}

function isEmpity(arg) {
  return !arg;
}

function isNumber(arg) {
  return Object.prototype.toString.call(arg) === "[object Number]";
}

module.exports = sum;
