//JS trabalha com Single Core,
//Tudo de maneira sincrona, entrou ele ja excetuda nao espera

//L1
console.log(`🥪 Syncrhonous 1`);

//L2
setTimeout((_) => console.log(`🍅 Timeout 2`), 0);

//L3
Promise.resolve().then((_) => console.log(`🍍 Promise 3`));

//L4
console.log(`🥪 Syncrhonous 4`);

//Result

/*
🥪 Syncrhonous 1
🥪 Syncrhonous 4
🍍 Promise 3
🍅 Timeout 2
*/
