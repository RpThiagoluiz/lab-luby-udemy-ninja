function on(element, event, callback) {
  document.querySelector(element).addEventListener(event, callback, false);
}

on('[data-js="button"]', event, function (event) {
  event.preventDefault();
  alert("clicou no Button");
});

//Antigo

const $button = document.querySelector('[data-js="button"]');

$button.addEventListener(
  "click",
  function (event) {
    alert("clicou no button");
  },
  false
);
