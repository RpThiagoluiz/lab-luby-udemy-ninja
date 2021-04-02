(function () {
  "use strict";

  const $a = document.querySelector('[data-js="link"]');

  //Antigamente
  $a.onclick = function (event) {
    event.preventDefault();
    alert("clicou no Anchor de um jeito novo!");
  };

  //Problema, se vc for atrelar um novo event de clica ele ativa somente o segundo. Ele ssubscreve o codigo
  $a.onclick = function (event) {
    event.preventDefault();
    alert("SEGUNDO CLICK!!");
  };

  function on(element, event, callback) {
    document.querySelector(element).addEventListener(event, callback, false);
  }

  function off(element, event, callback) {
    document.querySelector(element).removeEventListener(event, callback, false);
  }

  function handleClick(event) {
    event.preventDefault();
    alert("Novo clique no Anchor,link!");
  }

  function handleClick2(event) {
    event.preventDefault();
    alert("Novo clique no Anchor,link!");
  }

  on('[data-js="link"]', "click", handleClick);
  on('[data-js="link"]', "click", handleClick2);
  off('[data-js="link"]', "click", handleClick2);
})();
