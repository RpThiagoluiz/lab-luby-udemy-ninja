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

  const $timer = doc.querySelector('[data-js="input-timer"]');
  const $buttonStart = doc.querySelector('[data-js="button-start"]');
  const $h1 = doc.querySelector('[data-js="h1"]');
  const $body = doc.querySelector("body");

  const bellMp3 = new Audio("bell.mp3");

  let handleTimer;

  const backgroundColors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#2E2B5F",
    "#8B00FF",
  ];

  function goGithub() {
    location.href = "https://github.com/RpThiagoluiz";
  }

  function handleKeyDown(event) {
    switch (event.keyCode) {
      case 38:
        return ($h1.style.color = "var(--purple)");
      case 40:
        return ($h1.style.opacity = "1");
      case 37:
        return ($h1.style.background = "var(--shape)");
      case 39:
        return ($h1.style.margin = "2rem");
      default:
        return console.log(`Essa key ai nao é uma seta nao!${event.keyCode}`);
    }
  }

  function randomBg() {
    $body.style.background =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  }

  win.addEventListener("keydown", handleKeyDown);
  win.addEventListener("dblclick", goGithub);

  $buttonStart.addEventListener("click", () => {
    handleTimer = setInterval(() => {
      if ($timer.value > 0) {
        $timer.value--;
      } else {
        bellMp3.play();
        randomBg();
        return;
      }
    }, 1000);
  });
})(window, document);
