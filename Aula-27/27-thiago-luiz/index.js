(function (win, doc) {
  "use strict";
  /*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elemento do DOM, podem
ser métodos estáticos.
Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false
Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

  function DOM(element) {
    this.element = doc.querySelectorAll(element);
  }

  DOM.prototype.on = function on(event, func) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.addEventListener(event, func, false);
    });
  };

  DOM.prototype.off = function off(event, func) {
    Array.prototype.forEach.call(this.element, (element) => {
      element.removeEventListener(event, func, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.isFunction = function isFunction(obj) {
    return is(obj) === "[object Function]";
  };

  DOM.isArray = function isArray(obj) {
    return is(obj) === "[object Array]";
  };

  DOM.isObject = function isObject(obj) {
    return is(obj) === "[object Object]";
  };

  DOM.isNumber = function isNumber(obj) {
    return is(obj) === "[object Number]";
  };

  DOM.isString = function isString(obj) {
    return is(obj) === "[object String]";
  };

  DOM.isBoolean = function isBoolean(obj) {
    return is(obj) === "[object Boolean]";
  };

  DOM.isNull = function isNull(obj) {
    return is(obj) === "[object Null]" || is(obj) === "[object Undefined]";
  };

  var $a = new DOM('[data-js="link"]');

  $a.on("click", function handleClick(e) {
    e.preventDefault();
    console.log("clicou");
    $a.off("click", handleClick);
  });

  console.log("Elementos selecionados:", $a.get());
  console.log("$a é filho de body?", $a.get()[0].parentNode === doc.body);

  console.log($a);
  $a.forEach(function (item) {
    console.log(item);
  });

  const dataMapCheck = $a.map(function (item) {
    return item.getAttribute("data-js");
  });
  console.log(`Map: ${dataMapCheck}`);

  const dataReduceCheck = $a.reduce(function (acc, actual, index) {
    return acc + " " + actual.getAttribute("data-js") + index;
  }, 0);

  console.log(dataReduceCheck);

  console.log(DOM.isFunction(function () {}));
  console.log(DOM.isArray([1, 2, 3]));
  console.log(DOM.isObject({}));
  console.log(DOM.isNumber("numero"));
  console.log(DOM.isString(2));
  console.log(DOM.isBoolean(false));
  console.log(DOM.isNull(null));
  console.log(DOM.isNull("thiago"));
})(window, document);
