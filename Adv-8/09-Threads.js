//Criar meu proprio thread no background.
//webWorker ele esta rodando ao lado do main thread, sem atrapalhar seu desenvolvimento.
//Rodando em paralelo.
let worker = new Worker("worker.js");
worker.postMessage("Hello");
addEventListener("messa");

//Muitas funcionabilidades do browser, e o do proprio JS, ja tem seus workes, que vao rodar de forma async.
//tipo um fetch()
