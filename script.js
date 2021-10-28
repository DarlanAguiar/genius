if(localStorage.contadorVisitas){
    let visitas = Number(localStorage.contadorVisitas) + 1;

    localStorage.contadorVisitas = visitas

}else{
    localStorage.contadorVisitas = 1;
}


let contador = document.querySelector("[data-contador]");

if(localStorage.contadorVisitas == "1"){
    contador.innerHTML = `E ai Diegão beleza,<br>O desafio esta completo, esta é sua primeira visita.`
}else if(localStorage.contadorVisitas == "2"){
    contador.innerHTML = `hummm deu refresh<br>está conferindo né.`
}else if(localStorage.contadorVisitas == "3"){
    contador.innerHTML = `Deu novamente!<br>tô falando que está funcionando homen .`
}else if(localStorage.contadorVisitas == "4"){
    contador.innerHTML = `E ai? já apertou os botões acreditando que estava tudo pronto?.`
}else if(localStorage.contadorVisitas == "5"){
    contador.innerHTML = `estou vendo sua cara de despontamento ao desobrir que os botões nao fazem nada.`
}



/* contador.innerHTML = `Você vai jogar pela <span>${localStorage.contadorVisitas}</span> vez` */