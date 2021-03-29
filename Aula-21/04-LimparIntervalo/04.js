(function (win, doc) {
  "use strict";
  let counter = 0;
  let temporizador;
  const $button = doc.querySelector("button[data-js=button]");

  const timer = () => {
    console.log("Timer", counter++);
    if (counter > 20) return;
    temporizador = setTimeout(timer, 1000);
  };
  timer();

  //Caso vc queira parar o timer antes do tempo
  $button.addEventListener(
    "click",
    () => {
      clearTimeout(temporizador);
    },
    false
  );
})(window, document);

//Msms coisa pro interval
//clearInterval(temporizador);
