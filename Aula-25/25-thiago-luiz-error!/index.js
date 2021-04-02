(function (win, doc) {
  "use strict";

  /*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D
2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories
Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

  const clickMp3 = new Audio("click.mp3");
  const bellMp3 = new Audio("bell.mp3");

  let minutes;
  let seconds;

  const $timer = doc.querySelector('[data-js="input-timer"]');
  const $buttonStart = doc.querySelector('[data-js="button=start"]');
  const $buttonStop = doc.querySelector('[data-js="button-stop"]');
  const $buttonReset = doc.querySelector('[data-js="button-reset"]');

  const timerTemplate = () => {
    minutes = doc.querySelector('data-js="minutes"').innerHTML;
    seconds = doc.querySelector('data-js="seconds"').innerHTML;
  };

  const start = () => {
    clickMp3.play();

    minutes = 24;
    seconds = 59;

    doc.querySelector('[data-js="minutes"]').innerHTML = minutes;
    doc.querySelector('[data-js="seconds"]').innerHTML = seconds;

    let minutesInterval = setInterval(minutesTimer, 60000);
    let secondsInterval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
      session_minutes = session_minutes - 1;
      doc.querySelector('[data-js="minutes"]').innerHTML = session_minutes;
    }

    function secondsTimer() {
      session_seconds = session_seconds - 1;
      doc.querySelector('[data-js="seconds"]').innerHTML = session_seconds;

      if (session_seconds <= 0) {
        if (session_minutes <= 0) {
          clearInterval(minutesInterval);
          clearInterval(secondsInterval);

          bell.play();
        }
      }
    }
  };

  $buttonStart.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      start();
    },
    false
  );
})(window, document);
