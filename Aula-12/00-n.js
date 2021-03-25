/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

let books = [];

books.push({ name: "Alfa!", pages: 10 });
books.push({ name: "Bravo!", pages: 100 });
books.push({ name: "One!", pages: 1000 });

for (let index = 0; index < Object.keys(books).length; index++) {
  console.log(
    `For: -> Livro ${books[index].name}, tem ${books[index].pages} paginas`
  );
}

//MSM coisa
books.map((el) => {
  console.log(`MAP: -> ${el.name} : ${el.pages}`);
});
