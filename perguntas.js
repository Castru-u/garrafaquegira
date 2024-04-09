//! lista de questões do quiz
const questoes = [
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
        questao: "JP é Hardware?",
        respostas: [
            { text: "A) Aplicativos, sites e programas", correct: false},
            { text: "B) Parte lógica do computador", correct: false},
            { text: "C) Parte física do computador", correct: true},
            { text: "D) Nenhuma alternativa", correct: false},
        ]
    },
    {
        questao: "AF é Hardware?",
        respostas: [
            { text: "A) Aplicativos, sites e programas", correct: false},
            { text: "B) Parte lógica do computador", correct: false},
            { text: "C) Parte física do computador", correct: true},
            { text: "D) Nenhuma alternativa", correct: false},
        ]
    }
];

//! plotando variaveis
const  questaoElemento = document.getElementById("pergunta");
const  botoesResposta = document.getElementById("buttons-resposta");
const botaoProximo = document.getElementById("next-btn");
const boxQuestoes = document.querySelector(".box-questoes")
const popup = document.querySelector("#popup")
const header = document.querySelector("header")
const resultado = document.querySelector(".resultado")

let questaoAtual = 1;
let indice_Atual_Questao = 0;

var scores = [];
var lista = []
var nome = []

const nomes2 = new URLSearchParams(window.location.search).get('jogadores').split("#$#");
for (i=0; i<parseInt(nomes2[8]); i++){
    nome.push(nomes2[i])
    scores.push(0)
    }

    var nomescerto = [nome[0]]
    for(i=nome.length-1; i>0; i-=1){
      nomescerto.push(nome[i])
  }

var jogadores = nomescerto
var jogador = document.getElementById("idxganhador").value;



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function indice_atual(){
    indice = getRandomInt(0, questoes.length);
    if (lista.includes(indice)) {
        while (lista.includes(indice)) {
            indice = getRandomInt(0, questoes.length);
        };
        lista.push(indice);
        }
    else {
        lista.push(indice);
    }
    return indice;
}

function playerAnswer(jogadores) {
    let jogador = getRandomInt(0, (jogadores.length));
    return jogador;
}

//! funcao do quiz   
function startQuiz(){
    botaoProximo.innerHTML = "Próximo";
    showQuestion();   
}


//! funcao da proxima questao
function showQuestion() {
    boxQuestoes.style.display = "block";
    popup.style.display = "none";
    alert("É a vez do jogador "+jogadores[jogador]+" jogar")
    resetState(); // ! funcao que reseta as perguntas
    let atualQuestao = questoes[indice_atual()];
    let questaoNum = questaoAtual++;
    questaoElemento.innerHTML = questaoNum + ". " + atualQuestao.questao;
    header.style.width="0%"
    console.log(scores)

    
    //! mostrar respostas
    atualQuestao.respostas.forEach(resposta => {
        const botao = document.createElement("botao");
        botao.innerHTML = resposta.text;
        botao.classList.add("btn");
        botoesResposta.appendChild(botao); //! mostrar se esta certo ou errado
        if(resposta.correct){
            botao.dataset.correct = resposta.correct;
        }
        botao.addEventListener("click", selecionaResposta_Correta);
    });
}

//! funcao que reseta as perguntas
function resetState(){
    botaoProximo.style.display = "none";
    while(botoesResposta.firstChild){
        botoesResposta.removeChild(botoesResposta.firstChild);
    }
}

//! funcao que seleciona a resposta correta
function selecionaResposta_Correta(e) {
    const botaoSelecionado = e.target;
    const isCorrect = botaoSelecionado.dataset.correct === "true";
    if(isCorrect){
        botaoSelecionado.classList.add("correct");
        scores[jogador]++
        console.log(scores)
        jogador = playerAnswer(jogadores)
    }
    else{
        botaoSelecionado.classList.add("incorrect");
        jogador = playerAnswer(jogadores)
        }
    //! funcao que tira o selecionado do botão após ser clicado
    Array.from(botoesResposta.children).forEach(botao => {
        if(botao.dataset.correct === "true"){
            botao.classList.add("correct");
        }
        botao.disabled = true;
    });
    botaoProximo.style.display = "block";
}

function IdentificadorProximo_Botao(){
    if ((scores.includes(5))) {
        alert("O campeao é alguem ae")
        questaoAtual = 1;
    }
    else {
        boxQuestoes.style.display = "none";
        header.offsetWidth; // Isso faz com que o navegador reavalie o estilo do elemento
        // Define a largura como 100% para acionar a transição
        header.style.width = "100%";
        // tem que ficar aqui o tempo
        setTimeout(showQuestion, 5000);
    }
}

botaoProximo.addEventListener("click", () => {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    for (let i = 0; i < jogadores.length; i++) {
        const novaDiv = document.createElement('div');
        const ul = document.createElement('ul');

        for (let j = 0; j < 2; j++) {
            const li = document.createElement('li');

            if (j < 1) {
                li.textContent = jogadores[i];
            } else {
                li.textContent = scores[i];
            }

            ul.appendChild(li);
        }

        novaDiv.appendChild(ul);
        resultado.appendChild(novaDiv)
    }

    popup.style.display = "block";
    IdentificadorProximo_Botao();
});








