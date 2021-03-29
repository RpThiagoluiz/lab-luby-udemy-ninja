(function (win, doc) {
  "use strict";
  let counter = 0;

  const timer = () => {
    console.log("Timer", counter++);
  };
  setInterval(timer, 1000);
  /*Rodar infinito, setTimeout quando coloca um evento no event loop,
  ele diz q 1 segundo depois ele coloca o timer dentro do eventloop do JS.
  Se tiver algo rodando ele coloca o timer depois.
  So coloca depois q o primeiro ja foi executado


  <-- Mais no index -->
  */
})(window, document);
