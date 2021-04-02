No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."
    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
  */

function DOM(element,single = false) {
    if(single){
        this.element = document.querySelector(element);
    }else{
        this.element = document.querySelectorAll(element);
    }
}
DOM.prototype.on = function on(event, def) {
    Array.prototype.forEach.call(this.element, (element) => {
        element.addEventListener(event, def, false);
    });
};
DOM.prototype.off = function off(event, def) {
    Array.prototype.forEach.call(this.element, (element) => {
        element.removeEventListener(event, def, false);
    });
};

DOM.prototype.get = function get() {return this.element;};

DOM.isNull = function isNull(element) {
    return (
        Object.prototype.toString.call(element) == "[object Null]" ||
        Object.prototype.toString.call(element) == "[object Undefined]"
    );
};


let [Logradouro,Bairro,Estado,Cidade,message] =
    [
        new DOM('.Logradouro',true),
        new DOM('.Bairro',true),
        new DOM('.Estado',true),
        new DOM('.Cidade',true),
        new DOM('.message',true)
    ]


const send = document.querySelector('.Send')
send.addEventListener('click',event => {
    event.preventDefault()
    getCep()
})

function isRequestOk(ajax){
    return ajax.readyState === 4 && ajax.status === 200
}


function getCep(){
    let ajax = new XMLHttpRequest();
    let input = document.querySelector('.cep_input')
    let cep = input.value
    cep ? cep = cep.match(/[0-9]/gmi,cep): cep = false
    cep ? ajax.open('GET',`https://viacep.com.br/ws/${cep.join('')}/json/`) : message.element.innerHTML = "Insira um cep valido"
    cep ? message.element.innerHTML = `Buscando informações para o CEP ${input.value}.`:  message.element.innerHTML = "Insira um cep valido"
    ajax.send()
    ajax.addEventListener('readystatechange',() =>{
        if(isRequestOk(ajax)){
            message.element.innerHTML = `Endereço referente ao CEP  ${input.value}.`
            const res = JSON.parse(ajax.responseText)
            Logradouro.element.innerHTML = res.logradouro
            Bairro.element.innerHTML = res.bairro
            Estado.element.innerHTML = res.uf
            Cidade.element.innerHTML = res.localidade
        }else{
            message.element.innerHTML = `Não encontramos o endereço para o CEP ${input.value}.`
        }
    },false)
}
