function verificarSelecao(value) {
    if(value<8){
        document.getElementById('o8').style.display='none'
    }else{document.getElementById('o8').style.display='block'}
    if(value<7){
        document.getElementById('o7').style.display='none'
    }else{document.getElementById('o7').style.display='block'}
    if(value<6){
        document.getElementById('o6').style.display='none'
    }else{document.getElementById('o6').style.display='block'}
    if(value<5){
        document.getElementById('o5').style.display='none'
    }else{document.getElementById('o5').style.display='block'}
    if(value<4){
        document.getElementById('o4').style.display='none'
    }else{document.getElementById('o4').style.display='block'}
    if(value<3){
        document.getElementById('o3').style.display='none'
    }else{document.getElementById('o3').style.display='block'}
    }


let jogadores = document.getElementsByClassName('j1')


function mudanca() {

let mensagem = ""

for(i=0; i<jogadores.length;i++){
if(jogadores[i].value.length==0){
    mensagem+=`jogador${i+1}#$#`
}else{
    mensagem+=jogadores[i].value+'#$#'}
}
mensagem+=document.getElementById('qtd-jogadores').value
document.getElementById("jogadores").value=mensagem;
console.log(mensagem)
}

for(let i of jogadores){
    i.addEventListener("change", mudanca)
};
document.getElementById('qtd-jogadores').addEventListener("change", mudanca)

function voltar(){
    window.location.href="principal.html";
}

document.getElementById('voltar').addEventListener('click', voltar);