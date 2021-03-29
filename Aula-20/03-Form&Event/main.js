(function (win, doc) {
  "use strict";

  const $inputUsername = doc.querySelector("#username");
  const $inputPassword = doc.querySelector("#password");
  const $button = doc.querySelector("#button");

  //$inputUsername.value = "thiago luiz"; //setter, setando um valor
  //O valor do value era "thiago", quando o JS carrega depois do html ele substitui esse valor.

  //no lugar do "click" vc usar 'submit' q ele vai enviar o formulario
  $button.addEventListener(
    "click",
    function (event) {
      event.preventDefault(); //evitar comportamento padrao do onClick - no caso o envio.
      console.log("Click no bottao");
    },
    false
  ); //primeiro e o evento, segundo uma function de callback

  console.log($inputUsername.value, $inputPassword.value); //Getter, pegando valor

  //Event
})(window, document);
