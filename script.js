if(localStorage.contadorVisitas){
    let visitas = Number(localStorage.contadorVisitas) + 1;

    localStorage.contadorVisitas = visitas

}else{
    localStorage.contadorVisitas = 1;
}


let contador = document.querySelector("[data-contador]");

if(localStorage.contadorVisitas == "1"){
    contador.innerHTML = `E ai Diegão beleza,<br>O desafio está completo, esta é sua primeira visita.`
}else if(localStorage.contadorVisitas == "2"){
    contador.innerHTML = `Hummm deu refresh<br>está conferindo né&#128579;.`
}else if(localStorage.contadorVisitas == "3"){
    contador.innerHTML = `Deu novamente!<br>tô falando que está funcionando homen .`
}else if(localStorage.contadorVisitas == "4"){
    contador.innerHTML = `E ai? já apertou os botões acreditando que estava tudo pronto?.`
}else if(localStorage.contadorVisitas == "5"){
    contador.innerHTML = `Estou vendo sua cara de despontamento ao desobrir que os botões nao fazem nada &#128514;.`
}else if(localStorage.contadorVisitas == "6"){
    contador.innerHTML = `Minha parde do GENIUS esta pronta, Você cuida do JS &#128517;.`
}else if(localStorage.contadorVisitas == "7"){
    contador.innerHTML = `Vou deixar você contando ai, vou lá no salão furar parede, fique agora com o contador.`
}else{
    contador.innerHTML = `Você vai jogar pela <span>${localStorage.contadorVisitas}</span> vez`
}


/* contador.innerHTML = `Você vai jogar pela <span>${localStorage.contadorVisitas}</span> vez` */