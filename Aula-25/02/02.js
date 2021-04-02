(function () {
  "use strict";

  function on(element, event, callback) {
    document.querySelector(element).addEventListener(event, callback, false);
  }

  const $a = document.querySelector('[data-js="link"]');
  //substituir todo o codigo a baixo,

  // document.querySelector('[data-js="div"]').addEventListener(
  //   "click",
  //   function (event) {
  //     event.preventDefault();
  //     alert("clicou na div");
  //   },
  //   false
  // );

  // $a.addEventListener(
  //   "click",
  //   function (event) {
  //     event.preventDefault();
  //     alert("clicou no anchor!");
  //   },
  //   false
  // );

  on('[data-js="link"]', "click", function (event) {
    event.preventDefault();
    alert("clicou no Anchor,link!");
  });

  on('[data-js="div"]', "click", function () {
    alert("clicou na div!");
  });

  on('[data-js="span"]', "click", function () {
    alert("clicou na SPAN!");
  });
})();
