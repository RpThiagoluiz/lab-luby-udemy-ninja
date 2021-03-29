(function () {
  "use strict";

  //Sync - sincrono
  /*
      Ele executa um apos o outro, em cascada, tipo um loop do while.
    */

  console.log(`inicio`);

  for (let index = 1; index <= 10; index++) {
    console.log(index);
  }
  console.log(`fim`);

  //De forma sincrona ele vai interar todos os numero em cascata.
  // Quanto maior a interacao maior o tempo para concluir ela. index < 8000, vai demorar muito ate demonstrar o 11

  //Async - precisa trabalhar com temporizador, eventos.
  // - Ele cai em uma segunda thread do JS, que se chama event loop,
  // ela vai ficar la ate ser chamada. Quando chamada ela vai ser lancada na thread principal
  document.addEventListener(
    "click",
    () => {
      console.log(`clicou no documento`);
    },
    false
  );
})();
