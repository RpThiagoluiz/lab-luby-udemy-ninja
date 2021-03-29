// Alguns e-mails válidos que podem ser usados para testar:
//     - "meu.email+categoria@gmail.com"
//     - "juca_malandro@bol.com.br"
//     - "pedrobala@hotmail.uy"
//     - "sandro@culinaria.dahora"
// Alguns e-mails inválidos:
//     - "walter-da-silva@maraca.br"
//     - "rita-marica@titica.a.b"
//     - "agua_@evida.br.com"

const isValidEmail = (email) => {
  const regexValidEmail = /^[\w+.]*@\w+.(?:[A-Z]{2,})?.[\w\w]*$/gi;
  return email.match(regexValidEmail) ? true : false;
};
console.log(isValidEmail("walter-da-silva@maraca.br"));
