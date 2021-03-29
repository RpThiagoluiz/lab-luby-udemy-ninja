(function (win, doc) {
  "use strict";
  console.log(`inicio`);

  setTimeout(() => {
    console.log("Executou o setTimeout");
  }, 1000);

  setInterval(() => {
    console.log(
      "Executou o setInterval, a cada 2 seg esse metodo vai pra fila do EventLoop. Ela pode lotar o eventLoop, deixando a applicacao lenta"
    );
  }, 2000);

  console.log(`fim`);

  // Inicios, o fim, depois o setTimeout .
  //Js pega o Async, joga no eventLoop. e Retorna ele depois do tempo de execucao
})(window, document);

//Diferenca do setInterval do setTimeout, que o interval é eterno
