(function (win) {
  "use strict";
  console.log(win === window);
  if (win === window) console.log("win é uma referência local à window");
  console.log("Essa mensagem sempre é mostrada");

  //alert("ok");
  //prompt("responde ae");

  if (prompt("Pergunta")) {
    console.log("pergunta ok");
  } else {
    console.log("resposta nao ok!");
  }
})(window);

//window.alert -> mensagem de alerta. Css faz msm coisa só q divo.
