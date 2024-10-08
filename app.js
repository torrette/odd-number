let listaNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function mostrarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "UK English Female", {rate: 1.2});
};

function mostrarTitulosIniciais(){
    mostrarTextoNaTela("h1", "Odd Number");
    mostrarTextoNaTela("p", "Pick a number between 1 and 10");
}

mostrarTitulosIniciais();

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute);
    if (chute == numeroSecreto) {
        mostrarTextoNaTela("h1", "Congrats!");
        let pluralTry = tentativas > 1 ? "tries" : "try";
        let mensagemAcerto = `You found the Odd Number in ${tentativas} ${pluralTry}`;
        mostrarTextoNaTela("p", mensagemAcerto);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto) {
        mostrarTextoNaTela("h1", "Don't give up!");
        mostrarTextoNaTela("p", "The Odd Number is lower");
    } else {
        mostrarTextoNaTela("h1", "Don't give up!");
        mostrarTextoNaTela("p", "The Odd Number is higher");
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;
    if(quantidadeElementosLista == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mostrarTitulosIniciais();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
