//controle de mensagens
var nome;
var campo;

const som1 = new Audio();
som1.src = "./audio/som1.mp3"
const som2 = new Audio();
som2.src = "./audio/som2.mp3"
const som3 = new Audio();
som3.src = "./audio/som3.mp3"
const som4 = new Audio();
som4.src = "./audio/som4.mp3"
const somPonto = new Audio();
somPonto.src = "./audio/ponto.mp3"
const somPerdeu = new Audio();
somPerdeu.src = "./audio/perdeu.mp3"


if(localStorage.contadorVisitas){
    let visitas = Number(localStorage.contadorVisitas) + 1;

    localStorage.contadorVisitas = visitas

}else{
    localStorage.contadorVisitas = 1;
    localStorage.nome = "Jogador"
}


let contador = document.querySelector("[data-contador]");


if(localStorage.nome == "Jogador"){

    if(localStorage.contadorVisitas == "1"){
        contador.innerHTML = `Olá Jogador, seja bem vindo.`
    }else{
        contador.innerHTML = `Você irá jogar pela <span>${localStorage.contadorVisitas}</span> vez`
    }
}else{
    if(localStorage.contadorVisitas == "1"){
        contador.innerHTML = `Olá ${localStorage.nome}, seja bem vindo.`
    }else{
        contador.innerHTML = `${localStorage.nome}, você irá jogar pela <span>${localStorage.contadorVisitas}</span> vez`
    }
}


//fonções para mostrar trocar jogador e ler regras. 

function mostraCampo (){
    campo = document.querySelector("[data-menu]");
    campo.style.display = 'flex'
}



function salvaJogador (){
    nome = document.querySelector("[data-nome]");
    if(nome.value == ''){
        alert("você precisa digitar um nome");
        return
    }
    localStorage.nome = nome.value;
    localStorage.contadorVisitas = 0;
    campo.style.display = "none"
    location.reload();
}

function  mostraRegras(){
    let regras = document.querySelector("[data-regras]");
    regras.style.display = 'block'
}

function apagaRegras(){
    let apagaRegras = document.querySelector("[data-regras]");
    apagaRegras.style.display = 'none'
}

//logica do jogo
let sorteado = []
let digitado = []

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})


var fimDaAnimacao;
var ocorrendoAnimacao = false;
const comecar = async() =>{
    if (ocorrendoAnimacao) return
    if (digitado.length != sorteado.length) return
    digitado = []
    fimDaAnimacao = 0
    ocorrendoAnimacao = true;
  
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const sortear = getRandomIntInclusive(1, 4);
    
    sorteado.push(sortear)

    for(let i = 0; i < sorteado.length; i++){
        if(sorteado[i] == 1){
            som1.play();
            let botaoVermelho = document.querySelector("[data-botaoVermelho]")
            botaoVermelho.style.background = "#f87878"
            await sleep(800)
            botaoVermelho.style.background ="#970404";
            await sleep(200)
            fimDaAnimacao += 1

        }
        if(sorteado[i] == 2){
            let botaoVerde = document.querySelector("[data-botaoVerde]")
            som2.play();
            botaoVerde.style.background = "#34ce34"
            await sleep(800)
            botaoVerde.style.background ="#035403";
            await sleep(200)
            fimDaAnimacao += 1
        }
        if(sorteado[i] == 3){
            let botaoAzul = document.querySelector("[data-botaoAzul]")
            som3.play();
            botaoAzul.style.background = "#8b8bf7"
            await sleep(800)
            botaoAzul.style.background ="#060696";
            await sleep(200)
            fimDaAnimacao += 1
        }
        if(sorteado[i] == 4){
            let botaoAmarelo = document.querySelector("[data-botaoAmarelo]")
            som4.play();
            botaoAmarelo.style.background = "#ffff3f"
            await sleep(800)
            botaoAmarelo.style.background ="#797906";
            await sleep(200)
            fimDaAnimacao += 1
        }       
    }
    ocorrendoAnimacao = false;}

if(!localStorage.record){
    localStorage.record = 0
}

const inicioRecord = document.querySelector("[data-recorde]");
const inicioPonto = document.querySelector("[data-ponto]");
let pontos = 0
let recorde = localStorage.record
inicioPonto.innerHTML = `Pontos: ${pontos}`
inicioRecord.innerHTML = `Recorde: ${recorde}`



const confere = async(num) => {
    
    if(fimDaAnimacao != sorteado.length){
        return
    }
   
    digitado.push(num)

    if(num == 1){
        som1.play();
        let botaoVermelho = document.querySelector("[data-botaoVermelho]")
        botaoVermelho.style.background = "#f87878"
        await sleep(250)
        botaoVermelho.style.background ="#970404";
    }
    if(num == 2){
        let botaoVerde = document.querySelector("[data-botaoVerde]")
        som2.play();
        botaoVerde.style.background = "#34ce34"
        await sleep(250)
        botaoVerde.style.background ="#035403";
    }
    if(num == 3){
        let botaoAzul = document.querySelector("[data-botaoAzul]")
        som3.play();
        botaoAzul.style.background = "#8b8bf7"
        await sleep(250)
        botaoAzul.style.background ="#060696";
    }
    if(num == 4){
        let botaoAmarelo = document.querySelector("[data-botaoAmarelo]")
        som4.play();
        botaoAmarelo.style.background = "#ffff3f"
        await sleep(250)
        botaoAmarelo.style.background ="#797906";
    }

    for(let i = 0; i < digitado.length; i++){
        if(digitado[i] != sorteado[i]){
            somPerdeu.play();
            alert("ERROU")
            location.reload();
        }

    }

    if(digitado.length == sorteado.length){
        var imprimeRecord = document.querySelector("[data-recorde]")
        var imprimePonto = document.querySelector("[data-ponto]");
        var imprimeOk = document.querySelector("[data-ok]")
        pontos += 1;

        if(Number(localStorage.record) < pontos){
            localStorage.record = pontos
        }
       
        imprimeRecord.innerHTML = `Recorde: ${localStorage.record}`
        imprimePonto.innerHTML = `Pontos: ${pontos}`
        somPonto.play();
        imprimeOk.style.display="block"
        await sleep(1000)
        imprimeOk.style.display="none"
        comecar()
    }
}
