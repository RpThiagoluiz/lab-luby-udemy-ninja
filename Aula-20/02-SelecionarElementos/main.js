(function (win, doc) {
  "use strict";

  //confirm, alert, prompt.

  //confirm, boolean.
  //alert, somente uma mensagem.
  //prompt, usuario retornar uma mensagem.

  // const del = confirm("deseja realmente excluir?"); //return boolean

  // if (del) console.log("Excluido com sucesso!", del);
  // //true caso confirmado
  // else console.log("Acao cancelada!"); //false caso cancele.

  const $inputs = doc.getElementsByTagName("input"); //esse valor sempre sera mutavel, conforme aumenta a quantidade de input
  console.log($inputs);

  //Efeito colateral, sempre que mudar a quantidade a variavel vai mudar tbm
  console.log(`Com efeito colateral`);
  console.log(doc.getElementById("my-link"));
  console.log(doc.getElementsByClassName("my-links"));
  console.log(doc.getElementsByTagName("p"));
  console.log(doc.getElementsByName("username"));

  //QuerySelector -> nao existem efeito colateral - Statico
  //a sintax = css
  console.log(`Sem efeito colateral`);
  console.log(doc.querySelector("#pass")); //Id = unico, sempre vai ser somente um querySelector.
  console.log(doc.querySelectorAll("[type=text]")); //selecionar os input tipo text
  console.log(doc.querySelectorAll(".input"));
  console.log(doc.querySelector("#username"));
})(window, document);
