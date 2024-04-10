let perguntas = [
    {
        questao: "O que é Software?",
        respostas: [
            { text: "A) Peças como mouse e teclado", correct: false},
            { text: "B) Parte lógica do computador", correct: true},
            { text: "C) Parte física do computador", correct: false},
            { text: "D) Nenhuma alternativa", correct: false},
        ]
    },
    {
        questao: "O que é Hardware?",
        respostas: [
            { text: "A) Aplicativos, sites e programas", correct: false},
            { text: "B) Parte lógica do computador", correct: false},
            { text: "C) Parte física do computador", correct: true},
            { text: "D) Nenhuma alternativa", correct: false},
        ]
    },
    {
        questao: "Quem descobriu o Brasil?",
        respostas: [
            { text: "A) Patati e Patata", correct: false},
            { text: "B) Vasco da Gama", correct: false},
            { text: "C) Luís Inácio Lula da Silva", correct: false},
            { text: "D) Pedro Alvares Cabral", correct: true},
        ]
    },
    {
        questao: "O que aconteceu em 11/09/2001?",
        respostas: [
            { text: "A) Final entre Brasil e Itália", correct: false},
            { text: "B) Atentado nas torres gêmeas", correct: true},
            { text: "C) Morte de Michael Jackson", correct: false},
            { text: "D) Descobrimento de Atlântida", correct: false},
        ]
    },
    {
        questao: "A expressão 1+2x3 corresponde a?",
        respostas: [
            { text: "A) 8", correct: false},
            { text: "B) 9", correct: false},
            { text: "C) 7", correct: true},
            { text: "D) 6", correct: false},
        ]
    }
    // Adicione mais perguntas aqui
];


let lista = []
const nomesurl = new URLSearchParams(window.location.search).get('jogadores').split("#$#");
for (i=0; i<parseInt(nomesurl[8]); i++){
    lista.push(nomesurl[i])
    }
let jogadores = [];
for(i=1; i<lista.length; i++){
jogadores.push(lista[i])
    }
    jogadores.push(lista[0])
let pontuacao = [];
for(let i=0; i < jogadores.length; i++){
    pontuacao.push(0)
}

function mostrarPergunta(indiceJogador) {
    document.getElementById('next-btn').style.display = "none";
    let perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    document.getElementById('pergunta').innerText = perguntaAleatoria.questao;
    let botoesResposta = document.getElementsByClassName('btn');
    for(let i = 0; i < botoesResposta.length; i++) {
        botoesResposta[i].innerText = perguntaAleatoria.respostas[i].text;
        botoesResposta[i].style.pointerEvents = "auto";
        botoesResposta[i].onclick = function() {
            for(let j = 0; j < botoesResposta.length; j++) {
                if(perguntaAleatoria.respostas[j].correct) {
                    botoesResposta[j].style.backgroundColor = "green";
                    botoesResposta[j].style.color = "white";
                    
                }
                if(i === j && !perguntaAleatoria.respostas[j].correct) {
                    botoesResposta[i].style.backgroundColor = "red";
                    botoesResposta[i].style.color = "white";
                };
                botoesResposta[j].style.pointerEvents = "none";
            }
            // Update the score
            if(perguntaAleatoria.respostas[i].correct) {
                pontuacao[indiceJogador]++;
               ;
            } else {
                ;
            }
            function voltar(){
                document.querySelector(".container").style.pointerEvents = "auto";
                document.querySelector("#telaprincipal").style.display="none";
                document.getElementById("ganhador").innerHTML="";
                document.querySelector(".container").style.display = "flex";
                for(let i = 0; i < botoesResposta.length; i++) {
                    botoesResposta[i].style.backgroundColor = "rgba(252, 184, 39, 0.866)"
                    botoesResposta[i].style.color = "rgb(112, 10, 123)";
                };
            }
            function results(){
                document.querySelector(".box-questoes").style.display = "none";
                document.querySelector("#popup").style.display = "block"
                let = document.querySelector(".lista-resultado").innerHTML;
                function compararDecrescente(a, b) {
                    return b[1] - a[1];
                }
                
                let items = [];
                for(let i=0; i<pontuacao.length; i++){
                    items.push([jogadores[i],pontuacao[i]])
                }
                items.sort(compararDecrescente);
                items.forEach(function(item) {
                    document.querySelector(".lista-resultado").innerHTML+=`<li><div>${item[0]}</div><div>${item[1]}</div></li>`
                });
                function sair(){
                    window.location.href= 'principal.html'
                }
                document.getElementById('sair').onclick = sair;
            }

            document.getElementById('next-btn').style.display = "block";
            if(pontuacao.includes(1)){
                document.getElementById('next-btn').onclick = results
            }else{
                document.getElementById('next-btn').onclick = voltar;
            }

            
    }
}
}
