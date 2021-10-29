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
