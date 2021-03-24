/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
const Arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
const funcArr = (arg) => arg;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(funcArr(Arr)[1]); //2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
const funcArrNumb = (arr, index) => arr[index];

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
const mixArr = ["thiago", 29, { proPlayer: "Cod", noob: true }, [1, 2], true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(funcArrNumb(mixArr, 0)); //thiago
console.log(funcArrNumb(mixArr, 1)); //29
console.log(funcArrNumb(mixArr, 2)); //{ proPlayer: "Cod", noob: true }
console.log(funcArrNumb(mixArr, 3)); //[1,2]
console.log(funcArrNumb(mixArr, 4)); //true

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
const book = (bookName) => {
  const dataBooks = {
    ArtOf: {
      quantidadePaginas: 15,
      autor: "Eu Mesmo",
      editora: "Pro Castinum",
    },
    BadChoice: {
      quantidadePaginas: 1500,
      autor: "Mesmo Cara do Game of Thrones",
      editora: "Esse Implaca o final",
    },
    IsntGoodChoice: {
      quantidadePaginas: 501,
      autor: "Wilson M. Roe",
      editora: "Como viver com Tom Hanks...",
    },
  };

  return bookName ? dataBooks[bookName] : dataBooks;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());
/*
  Resposta: 
    {
  ArtOf: { quantidadePaginas: 15, autor: 'Eu Mesmo', editora: 'Pro Castinum' },
  BadChoice: {
    quantidadePaginas: 1500,
    autor: 'Mesmo Cara do Game of Thrones',
    editora: 'Esse Implaca o final'
  },
  IsntGoodChoice: {
    quantidadePaginas: 501,
    autor: 'Wilson M. Roe',
    editora: 'Como viver com Tom Hanks...'
  }
}
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
const bookChoice = "ArtOf";
console.log(
  `O livro ${bookChoice} tem ${book(bookChoice).quantidadePaginas} páginas`
); //O livro ArtOf tem 15 páginas

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`O autor do livro ${bookChoice} é ${book(bookChoice).autor}.`); //O autor do livro ArtOf é Eu Mesmo.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(
  `O livro ${bookChoice} foi publicado pela editora ${
    book(bookChoice).editora
  }.`
); //O livro ArtOf foi publicado pela editora Pro Castinum.
