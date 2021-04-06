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

const carsArray = [];
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

const cars = {
  allCars: [],

  add(car) {
    cars.allCars.push(car);
    app.reload();
  },

  remove(index) {
    cars.allCars.splice(index, 1);
    app.reload();
  },
};

const postCars = {
  postInApi() {
    const post = new XMLHttpRequest();

    post.open("POST", urlApiCars);
    //precisa enviar o header da request para o back end, caso vc va postar alguma informacao
    post.send(JSON.stringify(cars.allCars));

    post.onreadystatechange = function () {
      if (post.readyState === 4) {
        console.log("Usuario cadastrado!");
      }
    };
  },
};

const getCars = {
  info() {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", urlApiCars, true);
    ajax.send();
    ajax.addEventListener("readystatechange", getCars.getInfo, false);
  },

  getInfo() {
    if (!getCars.isReady) return;
    const data = JSON.parse(this.responseText);
    return data;
  },
  isReady() {
    return this.readtState === 4 && this.status === 200;
  },
};

const htmlRender = {
  carsContainer: document.querySelector('[data-js="table-data-car"]'),

  addCar(car, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = htmlRender.innerHtmlCar(car, index);
    tr.dataset.index = index;
    htmlRender.carsContainer.appendChild(tr);
  },

  innerHtmlCar(car, index) {
    const htmlTrContent = `
      <td><img src=${car.image} alt=${car.brandModel} /></td>
      <td>${car.brandModel}</td>
      <td>${car.year}</td>
      <td>${car.plate}</td>
      <td> ${car.color}</td>
      <td ><img src="./assets/minus.svg" alt="Remover Carro" class="remove-image" onclick="cars.remove(${index})"/></td>
      `;

    return htmlTrContent;
  },

  clearTabble() {
    htmlRender.carsContainer.innerHTML = "";
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
      cars.add(carOk);
      form.clearFields();
    } catch (error) {
      alert(error.message);
    }
  },
};

const app = {
  init() {
    getCompany.info();
    getCars.info();
    console.log(getCars.info());

    cars.allCars.forEach((car, index) => {
      htmlRender.addCar(car, index);
    });
  },
  reload() {
    htmlRender.clearTabble();
    app.init();
  },
};

app.init();

// cars.add({
//   image:
//     "https://images.vexels.com/media/users/3/154661/isolated/lists/7288653d1853bbc9f5e2a844ffadb763-silhueta-de-vista-lateral-de-carro-de-luxo.png",
//   brandModel: "BRODO ",
//   year: "1900",
//   plate: "FUI-1875",
//   color: "red",
// });

console.log(
  "Link do seu projeto no seu github de forma privada, adicionando anilton.veigaa@gmail.com"
);
