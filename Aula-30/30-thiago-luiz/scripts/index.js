(function (DOM) {
  "use strict";

  /*
A loja de carros será nosso desafio final. Na aula anterior, você fez a parte
do cadastro dos carros. Agora nós vamos começar a deixar ele com cara de
projeto mesmo.
Crie um novo repositório na sua conta do GitHub, com o nome do seu projeto.
Na hora de criar, o GitHub te dá a opção de criar o repositório com um
README. Use essa opção.
Após criar o repositório, clone ele na sua máquina.
Crie uma nova branch chamada `challenge-30`, e copie tudo o que foi feito no
desafio da aula anterior para esse novo repositório, nessa branch
`challenge-30`.
Adicione um arquivo na raiz desse novo repositório chamado `.gitignore`.
O conteúdeo desse arquivo deve ser somente as duas linhas abaixo:
node_modules
npm-debug.log
Faça as melhorias que você achar que são necessárias no seu código, removendo
duplicações, deixando-o o mais legível possível, e então suba essa alteração
para o repositório do seu projeto.
Envie um pull request da branch `challenge-30` para a `master` e cole aqui
nesse arquivo, dentro do `console.log`, o link para o pull request no seu
projeto.
*/

  const getCompany = {
    info() {
      const ajax = new XMLHttpRequest();
      ajax.open("GET", "company.json", true);
      ajax.send();
      ajax.addEventListener("readystatechange", getCompany.getInfo, false);
    },

    getInfo() {
      if (!getCompany.isReady) return;

      const data = JSON.parse(this.responseText);
      console.log(data);
      new DOM('[data-js="header-h1"]').get().innerHTML = data.name;
      new DOM('[data-js="header-span"]').get().innerHTML = data.phone;
    },

    isReady() {
      return this.readtState === 4 && this.status === 200;
    },
  };

  const htmlRender = {
    carTabbleTbodyContainer: document.querySelector(
      '[data-js="table-data-car"]'
    ),

    createNewCar() {
      const $fragment = document.createDocumentFragment();
      const $tr = document.createElement("tr");
      const $carImage = document.createElement("img");
      const $tdImage = document.createElement("td");
      const $tdBrandModel = document.createElement("td");
      const $tdYear = document.createElement("td");
      const $tdPlate = document.createElement("td");
      const $tdColor = document.createElement("td");
      $carImage.setAttribute(
        "src",
        new DOM('[data-js="car-image"]').get().value
      );
      $tdImage.appendChild($carImage);
      $tdBrandModel.textContent = new DOM(
        '[data-js="car-brand-model"]'
      ).get().value;
      $tdYear.textContent = new DOM('[data-js="car-year"]').get().value;
      $tdPlate.textContent = new DOM('[data-js="car-plate"]').get().value;
      $tdColor.textContent = new DOM('[data-js="car-color"]').get().value;
      $tr.appendChild($tdImage);
      $tr.appendChild($tdBrandModel);
      $tr.appendChild($tdYear);
      $tr.appendChild($tdPlate);
      $tr.appendChild($tdColor);
      return $fragment.appendChild($tr);
    },

    clearTransactions() {
      htmlRender.carTabbleTbodyContainer.innerHTML = "";
    },
  };

  const app = {
    init() {
      getCompany.info();
      app.initEvents();
      console.log("app init");
    },

    initEvents() {
      new DOM('[data-js="form-register"]')
        .get()
        .addEventListener("submit", this.handleSubmit);
    },

    handleSubmit(e) {
      e.preventDefault();
      new DOM('[data-js="table-data-car"]')
        .get()
        .appendChild(htmlRender.createNewCar());
    },

    reload() {
      htmlRender.clearTransactions();
      app.init();
    },
  };

  app.init();
  console.log(
    "Link do seu projeto no seu github de forma privada, adicionando anilton.veigaa@gmail.com"
  );
})(window.DOM);
