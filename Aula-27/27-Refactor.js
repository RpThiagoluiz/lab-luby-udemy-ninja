/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
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
(function (window, document) {
  function DOM(nodeName) {
    this.element = document.querySelectorAll(nodeName);

    this.on = (event, callback) => {
      Array.prototype.forEach.call(this.element, (node) => {
        node.addEventListener(event, callback);
      });
    };

    this.off = (event, callback) => {
      Array.prototype.forEach.call(this.element, (node) => {
        node.removeEventListener(event, callback);
      });
    };

    this.forEach = () => {
      Array.prototype.forEach.apply(this.element, arguments);
    };

    this.map = () => {
      Array.prototype.map.apply(this.element, arguments);
    };

    this.filter = () => {
      Array.prototype.filter.apply(this.element, arguments);
    };

    this.reduce = () => {
      Array.prototype.reduce.apply(this.element, arguments);
    };

    this.reduceRight = () => {
      Array.prototype.reduceRight.apply(this.element, arguments);
    };

    this.every = () => {
      Array.prototype.every.apply(this.element, arguments);
    };

    this.some = () => {
      Array.prototype.some.apply(this.element, arguments);
    };

    this.get = () => this.element;
  }

  //isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull
  DOM.isArray = (field) => {
    return Object.prototype.toString.call(field) === "[object Array]";
  };

  DOM.isObject = (field) => {
    return Object.prototype.toString.call(field) === "[object Object]";
  };

  DOM.isFunction = (field) => {
    return Object.prototype.toString.call(field) === "[object Function]";
  };

  DOM.isNumber = (field) => {
    return Object.prototype.toString.call(field) === "[object Number]";
  };

  DOM.isString = (field) => {
    return Object.prototype.toString.call(field) === "[object String]";
  };

  DOM.isBoolean = (field) => {
    return Object.prototype.toString.call(field) === "[object Boolean]";
  };

  DOM.isNull = (field) => {
    return (
      Object.prototype.toString.call(field) === "[object Null]" ||
      Object.prototype.toString.call(field) === "[object Undefined]"
    );
  };

  console.log(DOM.isArray([1, 2, 3])); // true
  console.log(DOM.isFunction(function () {})); // true
  console.log(DOM.isNumber("numero")); // false
})(window, document);
