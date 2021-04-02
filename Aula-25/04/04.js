(function () {
  "use strict";

  function on(element, event, callback) {
    document.querySelector(element).addEventListener(event, callback, false);
  }

  on('[data-js="input"]', "input", function () {
    console.log(this.value);
  });

  // on('[data-js="input"]', "keyup", function () {
  //   console.log(this.value);
  // });

  // on('[data-js="input"]', "keydown", function () {
  //   console.log(this.value);
  // });

  on('[data-js="select"]', "change", function () {
    console.log(this.value);
    document.querySelector('[data-js="input"]').value = this.value;
  });
})();
