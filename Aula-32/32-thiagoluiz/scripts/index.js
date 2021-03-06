/*
Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados,
salvando-os temporariamente na memória de um servidor.
Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para
que possamos utilizar para salvar as informações dos nossos carros.
Para utilizá-lo, você vai precisar fazer o seguinte:
- Via terminal, acesse o diretório `server`;
- execute o comando `npm install` para instalar as dependências;
- execute `node app.js` para iniciar o servidor.
Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço:
`http://localhost:3000`
O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
As mudanças que você irá precisar fazer no seu projeto são:
- Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
`http://localhost:3000/car`
- Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
os seguintes campos:
  - `image` com a URL da imagem do carro;
  - `brandModel`, com a marca e modelo do carro;
  - `year`, com o ano do carro;
  - `plate`, com a placa do carro;
  - `color`, com a cor do carro.
Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.
Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
do pull request.
*/

const urlApiCars = "http://localhost:3000/car";

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

    new DOM('[data-js="header-h1"]').get().innerHTML = data.name;
    new DOM('[data-js="header-span"]').get().innerHTML = data.phone;
  },

  isReady() {
    return this.readtState === 4 && this.status === 200;
  },
};

const getCars = {
  loadCarApi() {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", urlApiCars, true);
    ajax.send();
    ajax.addEventListener("readystatechange", () => {
      if (ajax.readyState === 4 && ajax.status === 200) {
        const $tbody = document.querySelector('[data-js="table-data-car"]');
        const resultCars = JSON.parse(ajax.responseText);
        console.log(resultCars);
        resultCars.map((car) => {
          $tbody.innerHTML += `
          <tr>
            <td><img src=${car.image} alt=${car.brandModel} /></td>
            <td>${car.brandModel}</td>
            <td>${car.year}</td>
            <td>${car.plate}</td>
            <td> ${car.color}</td>
            <td ><img src="./assets/minus.svg" alt="Remover Carro" class="remove-image"/></td>
          </tr>

          `;
        });
      } else {
        throw new Error("Erro ao buscar dados!");
      }
    });
  },
};

const postCars = {
  async postInApi(car) {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "http://localhost:3000/car");
    ajax.setRequestHeader("Content-Type", "application/json");

    const { image, brandModel, year, plate, color } = car;
    //post, await mod. Ajax is async
    ajax.send(
      JSON.stringify({
        image,
        brandModel,
        year,
        plate,
        color,
      })
    );

    if (ajax.readyState === 4 && ajax.status === 200) {
      const $tbody = document.querySelector('[data-js="table-data-car"]');
      $tbody.innerHTML = "";
      getCars.loadCarApi();
    }
  },
};

const form = {
  image: document.querySelector('[data-js="car-image"]'),
  brandModel: document.querySelector('[data-js="car-brand-model"]'),
  year: document.querySelector('[data-js="car-year"]'),
  plate: document.querySelector('[data-js="car-plate"]'),
  color: document.querySelector('[data-js="car-color"]'),

  getValues() {
    return {
      image: form.image.value,
      brandModel: form.brandModel.value,
      year: form.year.value,
      plate: form.plate.value,
      color: form.color.value,
    };
  },

  validadeFields() {
    const { image, brandModel, year, plate, color } = form.getValues();

    if (
      image.trim() === "" ||
      brandModel.trim() === "" ||
      year.trim() === "" ||
      plate.trim() === "" ||
      color.trim() === ""
    ) {
      throw new Error("Preencha todos os campos corretamente!");
    }
  },

  checkedFieldsOk() {
    const { image, brandModel, year, plate, color } = form.getValues();
    return {
      image,
      brandModel,
      year,
      plate,
      color,
    };
  },

  clearFields() {
    form.image.value = "";
    form.brandModel.value = "";
    form.year.value = "";
    form.plate.value = "";
    form.color.value = "";
  },

  handlesubmit(event) {
    event.preventDefault();

    try {
      form.validadeFields();
      const carOk = form.checkedFieldsOk();
      postCars.postInApi(carOk);
      console.log(carOk);
      form.clearFields();
    } catch (error) {
      alert(error.message);
    }
  },
};

const app = {
  init() {
    getCompany.info();
    getCars.loadCarApi();
  },
  reload() {
    htmlRender.clearTabble();
    app.init();
  },
};

app.init();
console.log(
  "Link do seu projeto no seu github de forma privada, adicionando anilton.veigaa@gmail.com"
);
