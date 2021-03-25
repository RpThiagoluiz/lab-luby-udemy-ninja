for (let index = 1; index < 10; index++) {
  console.log(index);
}

const car = {
  brand: "VW",
  model: "Gol",
  year: "2013",
};

console.log(car);

//Percorer as props dentro do carro.
for (const prop in car) {
  console.log(prop);
}

// For in utilizado assim, vai verificar se existe aquele propriedade dentro do objeto, caso exista ela retorna True
console.log("brand in car ?", "brand" in car); //brand in car ? true

console.log("doors in car ?", "door" in car); //doors in car ? false
