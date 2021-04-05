/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.
Ao clicar nesse botão, a linha da tabela deve ser removida.
Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.
Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/

const carsArray = [
  {
    image:
      "https://images.vexels.com/media/users/3/154661/isolated/lists/7288653d1853bbc9f5e2a844ffadb763-silhueta-de-vista-lateral-de-carro-de-luxo.png",
    brandModel: "brabo",
    year: "2121",
    plate: "LAB-2021",
    color: "purple",
  },
];

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
  async load() {
    const result = await fetch("http://localhost:3000/car");
    const response = result.json();
  },
};

const cars = {
  allCars: [...carsArray],

  add(car) {
    cars.allCars.push(car);
    app.reload();
  },

  remove(index) {
    cars.allCars.splice(index, 1);
    app.reload();
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

cars.add({
  image:
    "https://images.vexels.com/media/users/3/154661/isolated/lists/7288653d1853bbc9f5e2a844ffadb763-silhueta-de-vista-lateral-de-carro-de-luxo.png",
  brandModel: "BRODO ",
  year: "1900",
  plate: "FUI-1875",
  color: "red",
});

console.log(
  "Link do seu projeto no seu github de forma privada, adicionando anilton.veigaa@gmail.com"
);
