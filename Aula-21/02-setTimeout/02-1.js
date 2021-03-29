(function (win, doc) {
  "use strict";
  console.log(`inicio`);

  let counter = 0;

  const timer = () => {
    console.log("timer", counter++);
    setTimeout(timer, 1000); //recursao, um metodo que executa a funcao nela mesma, nesse caso ela vai ficar chamando ela mesmo infinito, tipo o setInterval
  };
  timer();
  console.log(`fim`);
})(window, document);

//Para parar ela vc usa um condicao, um if no caso.
// const timer = () => {
//   console.log("timer", counter++);
//   if (counter > 10) return;
//   setTimeout(timer, 1000);
// };
