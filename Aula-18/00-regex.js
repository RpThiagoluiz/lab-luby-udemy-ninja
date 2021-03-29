/*Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
retorne esse CPF limpo (somente os números).
Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
eles! Use um console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
const regexJustNumber = /\D/g;
const cleanCPF = (cpf) => cpf.replace(regexJustNumber, "");
console.log(cleanCPF("049-214 3421-1"));
console.log(cleanCPF("210.458.522-05"));
console.log(cleanCPF("735 500 794 - 22"));
console.log(cleanCPF("101.123-131x32"));

/*
Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
Ex.: "999.999.999-99"
Mostre o resultado no console.
*/
console.log("\nFormatando CPFs corretamente:");
const handleCpf = (cpf) => {
  const regexCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
  const formatedCpf = cleanCPF(cpf).replace(
    regexCpf,
    (arg, groupNumberOne, groupNumberTwo, groupNumberThree, groupNumberFour) =>
      `${groupNumberOne}.${groupNumberTwo}.${groupNumberThree}-${groupNumberFour}`
  );
  return formatedCpf;
};

console.log(handleCpf("049-214 3421-1"));
console.log(handleCpf("210.458.522-05"));
console.log(handleCpf("735 500 794 - 22"));
console.log(handleCpf("101.123-131x32"));

//!import o() agrupa o return do regex como se ele fosse um obj separado. isso auxilia na contrucao
