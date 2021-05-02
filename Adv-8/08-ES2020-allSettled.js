const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

//Precisa que todas sejam resolvidas para ele trazer a resposta, caso um seja rejeitada. as 2 serao invalidadas
Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data)); //[ undefined, undefined ]

//ES220 -
Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));
// [
//   { status: 'fulfilled', value: undefined },
//   { status: 'rejected', reason: undefined }
// ]
