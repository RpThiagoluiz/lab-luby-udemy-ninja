let arr = ["🐱‍🏍", "🐱‍👤", "🤳", "🎂", "😜", "🌹", "💋"];
let arrNum = [1, 2, 3, 4, 5, 6, 7];

//🐱‍🚀Slice -> Retorna de um certo ponto ate outro - nao modifica o arr principal, igual o concat
console.log(arr.slice(1)); //'🐱‍👤', '🤳', '🎂', '😜', '🌹', '💋'
console.log(arr.slice(0, 2)); //o segundo paramento ele nao retorna, so o primeiro
//[ '🐱‍🏍', '🐱‍👤' ] -> primeiro indice zero, e depois o indice 1 -> parando no indice 2
//Valor negativo, ele pega os 2 ultimos indices do arr.
console.log(arr.slice(-2)); //[ '🌹', '💋' ]

//🐱‍🚀 Splice -> ele modifica o arr principal, ele pode adicionar ou remover item do arr.

console.log(arr.splice(3)); //[ '🎂', '😜', '🌹', '💋' ] -> monstrar os itens removidos
console.log(arr); //  '🐱‍🏍', '🐱‍👤', '🤳'  -> resto do arr.

arr.push("🎂", "😜", "🌹", "💋");
console.log(arr.splice(1, 3)); //[ '🐱‍👤', '🤳', '🎂' ] - com dois paramentros, o primeiro e o indice de comeco, segundo a quantidade de items.
console.log(arr); // [ '🐱‍🏍', '😜', '🌹', '💋' ]

console.log(arr.splice(1, 0, "adc")); //indice 1, ele adciona o valor dentro dele.
console.log(arr);
