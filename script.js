//controle de mensagens
var nome;
var campo;


if(localStorage.contadorVisitas){
    let visitas = Number(localStorage.contadorVisitas) + 1;

    localStorage.contadorVisitas = visitas

}else{
    localStorage.contadorVisitas = 1;
    localStorage.nome = "Jogador Indefinido"
}


let contador = document.querySelector("[data-contador]");


if(localStorage.nome == "Jogador Indefinido"){

    if(localStorage.contadorVisitas == "1"){
        contador.innerHTML = `Olá Jogador, seja bem vindo.`
    }else{
        contador.innerHTML = `Você irá jogar pela <span>${localStorage.contadorVisitas}</span> vez`
    }
}else if(localStorage.nome != "Jogador Indefinido" && localStorage.nome.length > 0){
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
    if(nome.value == '' || nome.value == "undefined"){
        alert("você precisa digitar um nome");
        return
    }
    console.log(nome.value)
    localStorage.nome = nome.value;
    localStorage.contadorVisitas = 0;
    campo.style.display = "none"
    location.reload();
}

function  mostraRegras(){
    var regras = document.querySelector("[data-regras]");
    regras.style.display = 'block'
}

function apagaRegras(){
    var apagaRegras = document.querySelector("[data-regras]");
    apagaRegras.style.display = 'none'
}

//logica do jogo
let sorteado = []
let digitado = []

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})
const comecar = async() =>{
    digitado = []
  
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var sorteia = getRandomIntInclusive(1, 4);
    sorteado.push(sorteia)
    console.log(sorteado)
    for(let i = 0; i < sorteado.length; i++){
        if(sorteado[i] == 1){
            let botaoVermelho = document.querySelector("[data-botaoVermelho]")
            botaoVermelho.style.background = "#f87878"
            await sleep(1100)
            botaoVermelho.style.background ="#d00000";
            await sleep(200)

        }
        if(sorteado[i] == 2){
            let botaoVerde = document.querySelector("[data-botaoVerde]")
            botaoVerde.style.background = "#34ce34"
            await sleep(1100)
            botaoVerde.style.background ="#007700";
            await sleep(200)

        }
        if(sorteado[i] == 3){
            let botaoAzul = document.querySelector("[data-botaoAzul]")
            botaoAzul.style.background = "#8b8bf7"
            await sleep(1100)
            botaoAzul.style.background ="#0000bf";
            await sleep(200)

        }
        if(sorteado[i] == 4){
            let botaoAmarelo = document.querySelector("[data-botaoAmarelo]")
            botaoAmarelo.style.background = "#ffff3f"
            await sleep(1100)
            botaoAmarelo.style.background ="#c9c902";
            await sleep(200)

        }
       
        
    }

}


var inicioRecord = document.querySelector("[data-recorde]");
var inicioPonto = document.querySelector("[data-ponto]");
var pontos = 0
var recorde = localStorage.record
inicioPonto.innerHTML = `Pontos: ${pontos}`
inicioRecord.innerHTML = `Recorde: ${recorde}`


function confere(num){
    digitado.push(num)
    console.log(digitado)

    for(let i = 0; i < digitado.length; i++){
        if(digitado[i] != sorteado[i]){
            alert("errou")
            location.reload();
        }

    }

    if(digitado.length == sorteado.length){
        var imprimeRecord = document.querySelector("[data-recorde]")
        var imprimePonto = document.querySelector("[data-ponto]");
        pontos += 1;

        
        if(localStorage.record){
            recorde = Number(localStorage.record)
            if(Number(localStorage.record) < pontos){
                localStorage.record = pontos
                

            }
            
        }else{
            localStorage.record = 1
        
        }
        imprimeRecord.innerHTML = `Recorde: ${localStorage.record}`
        imprimePonto.innerHTML = `Pontos: ${pontos}`

        comecar()
    }

    
    
}
