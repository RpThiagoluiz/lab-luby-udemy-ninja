(function (DOM) {
  "use strict";

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"
  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.
  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.
  Essas informações devem ser adicionadas no HTML via Ajax.
  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.
  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    const [
      $companyName,
      $companyPhone,
      $form,
      $tabbleCar,
      $carBrandModel,
      $carYear,
      $carPlate,
      $carColor,
    ] = [
      new DOM('[data-js="header-h1"]').get(),
      new DOM('[data-js="header-span"]').get(),
      new DOM('[data-js="form-register"]').get(),
      new DOM('[data-js="table-data-car"]').get(),
      new DOM('[data-js="car-brand-model"]').get().value,
      new DOM('[data-js="car-year"]').get().value,
      new DOM('[data-js="car-plate"]').get().value,
      new DOM('[data-js="car-color"]').get().value,
    ];

    return {
      init: function () {
        console.log("app init");
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function () {
        $form.addEventListener("submit", this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        $tabbleCar.appendChild(app().createNewCar());
      },

      createNewCar: function createNewCar() {
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

        $tdBrandModel.textContent = $carBrandModel;
        $tdYear.textContent = $carYear;
        $tdPlate.textContent = $carPlate;
        $tdColor.textContent = $carColor;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrandModel);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);

        return $fragment.appendChild($tr);
      },

      companyInfo: function companyInfo() {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", "company.json", true);
        ajax.send();
        ajax.addEventListener("readystatechange", this.getComapanyInfo, false);
      },

      getComapanyInfo: function getComapanyInfo() {
        if (!app().isReady) return;

        const data = JSON.parse(this.responseText);
        $companyName.innerHTML = data.name;
        $companyPhone.innerHTML = data.phone;
      },

      isReady: function isReady() {
        return this.readtState === 4 && this.status === 200;
      },
    };
  }

  app().init();
})(window.DOM);
