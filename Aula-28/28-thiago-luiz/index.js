(function (win, doc) {
  "use strict";
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  const $inputCep = doc.querySelector('[data-js="input-req-cep"]');
  const $button = doc.querySelector('[data-js="button-submit"]');
  const $footer = doc.querySelector('[data-js="footer-msg"]');

  const $street = doc.querySelector('[data-js="input-resp-street"]');
  const $district = doc.querySelector('[data-js="input-resp-district"]');
  const $state = doc.querySelector('[data-js="input-resp-state"]');
  const $city = doc.querySelector('[data-js="input-resp-city"]');
  const $cep = doc.querySelector('[data-js="input-resp-code"]');

  const ajax = new XMLHttpRequest();

  const maskCep = (cep) => cep.match(/\d/g).join("");

  $button.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit();
    $footer.innerHTML = "";
  });

  function isReqOk() {
    ajax.readyState === 4 && ajax.status === 200;
  }

  function isLoading() {
    if (ajax.readyState < 4) {
      $street.value = "...";
      $district.value = "...";
      $state.value = "...";
      $city.value = "...";
      $cep.value = "...";
      $footer.innerHTML = `Buscando informações para o CEP: ${$inputCep.value}...`;
    } else {
      $street.value = "";
      $district.value = "";
      $state.value = "";
      $city.value = "";
      $cep.value = "";
    }
  }

  function successResponse(response) {
    $street.value = `Logradouro: ${response.logradouro}`;
    $district.value = `Bairro: ${response.bairro}`;
    $state.value = `UF: ${response.uf}`;
    $city.value = `Localidade: ${response.localidade}`;
    $cep.value = `CEP: ${response.cep}`;
  }

  function handleSubmit() {
    isLoading();
    try {
      ajax.open(
        "GET",
        `https://viacep.com.br/ws/${maskCep($inputCep.value)}/json/`
      );
      ajax.send();
      ajax.addEventListener("readystatechange", () => {
        if (isReqOk) {
          $footer.innerHTML = `Endereço referente ao CEP : ${$inputCep.value}`;
          successResponse(JSON.parse(ajax.responseText));
          JSON.parse(ajax.responseText);
        }
      });
    } catch (error) {
      $footer.innerHTML = `Não encontramos o endereço para o CEP: ${$inputCep.value}`;
      return error;
    }
  }
})(window, document);
