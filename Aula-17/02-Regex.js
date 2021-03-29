const text = `t is a long established lookinghas a al dis, 1875 as opposed to using 'Content here, content here', 1817 making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search`;

const regexOr = /da|de/g;
const regexArr = /[dade]/g; //lista
const regexAgr = /1875|1817/g; //agrupamento
const regexSequencia = /[A-Za-z0-9]/; //sequencia

console.log(text.match(regexOr)); //'da',
console.log(text.match(regexArr)); //'da',
console.log(text.match(regexAgr));
console.log(text.match(regexSequencia)); //todos alfa numericos
