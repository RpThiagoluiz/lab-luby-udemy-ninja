(function () {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
  let person = {
    name: "thiago",
    lastname: "luiz",
    age: 29,
  };

  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
  console.log(`Propriedades de "person": ${Object.keys(person)}`); //Propriedades de "person": name,lastname,age

  /*
Crie um array vazio chamado `books`.
*/
  let books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  books.push({ name: "Alfa!", pages: 10 });
  books.push({ name: "Bravo!", pages: 100 });
  books.push({ name: "One!", pages: 1000 });

  console.log(`Lista de livros: `);
  /*
Mostre no console todos os livros.
*/
  console.log(books);

  console.log("\nLivro que está sendo removido:");
  /*
Remova o último livro, e mostre-o no console.
*/

  console.log(books.pop());

  console.log("\nAgora sobraram somente os livros:");
  /*
Mostre no console os livros restantes.
*/
  console.log(books);

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  books = JSON.stringify(books);
  console.log("\nLivros em formato string:");

  /*
Mostre os livros nesse formato no console:
*/
  console.log(books);

  /*
Converta os livros novamente para objeto.
*/
  books = JSON.parse(books);
  console.log("\nAgora os livros são objetos novamente:");

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  //   for (let index = 0; index < Object.keys(books).length; index++) {
  //     console.log(
  //       `Livro ${books[index].name}, tem ${books[index].pages} paginas`
  //     );
  //   }

  books.map((el) => {
    console.log(`${el.name} : ${el.pages}`);
  });

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  let myName = ["t", "h", "i", "a", "g", "o"];
  console.log("\nMeu nome é:");

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  console.log(myName.join(""));

  console.log("\nMeu nome invertido é:");

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  console.log(myName.reverse().join(""));

  console.log("\nAgora em ordem alfabética:");
  /*
Mostre todos os itens do array acima, ordenados alfabéticamente.
*/
  console.log(myName.sort()); //Sensitive Case, se tiver maiuscula ela vira primeiro.
})();
