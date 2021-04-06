const ajax = new XMLHttpRequest();
ajax.open("GET", "http://localhost:3000/users"); //acessando os usuarios pelo back end.
ajax.send();

console.log(ajax.responseText, ajax.status);
// o browser vai da um alert e vai flar que esses dados estao decriptados.

//tem como vc abortar com o ajax.abort()
//caso vc queira que ele pare em algum dos 4 estados do ajax
