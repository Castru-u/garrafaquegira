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
    },
    {
        "questao": "Quem foi a primeira pessoa a viajar no Espaço?",
        "respostas": [
            { "text": "a) Yuri Gagarin", "correct": true},
            { "text": "b) A cadela Laika", "correct": false},
            { "text": "c) Neil Armstrong", "correct": false},
            { "text": "d) Marcos Pontes", "correct": false}
        ]
    },
    {
        "questao": "Qual a montanha mais alta do mundo?",
        "respostas": [
            { "text": "a) Mauna Kea", "correct": false},
            { "text": "b) Dhaulagiri", "correct": false},
            { "text": "c) Monte Chimborazo", "correct": false},
            { "text": "d) Monte Everest", "correct": true}
        ]
    },
    {
        "questao": "Onde se localiza Machu Picchu?",
        "respostas": [
            { "text": "a) Colômbia", "correct": false},
            { "text": "b) Peru", "correct": true},
            { "text": "c) China", "correct": false},
            { "text": "d) Bolívia", "correct": false}
        ]
    },
    {
        "questao": "Que país tem o formato de uma bota?",
        "respostas": [
            { "text": "a) Butão", "correct": false},
            { "text": "b) Brasil", "correct": false},
            { "text": "c) Portugal", "correct": false},
            { "text": "d) Itália", "correct": true}
        ]
    },
    {
        "questao": "Quem inventou a lâmpada?",
        "respostas": [
            { "text": "a) Graham Bell", "correct": false},
            { "text": "b) Steve Jobs", "correct": false},
            { "text": "c) Thomas Edison", "correct": true},
            { "text": "d) Henry Ford", "correct": false}
        ]
    },
    {
        "questao": "Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?",
        "respostas": [
            { "text": "a) Aproximadamente 24 horas", "correct": true},
            { "text": "b) 365 dias", "correct": false},
            { "text": "c) 7 dias", "correct": false},
            { "text": "d) 30 ou 31 dias", "correct": false}
        ]
    },
    {
        "questao": "A que temperatura a água ferve?",
        "respostas": [
            { "text": "a) 200 ºC", "correct": false},
            { "text": "b) -10 ºC", "correct": false},
            { "text": "c) 0 ºC", "correct": false},
            { "text": "d) 100 ºC", "correct": true}
        ]
    },
    {
        "questao": "Quais são as fases da Lua?",
        "respostas": [
            { "text": "a) Nova, cheia e superlua", "correct": false},
            { "text": "b) Penumbral, lunar parcial, lunar total e cheia", "correct": false},
            { "text": "c) Nova, cheia, minguante e lua de sangue", "correct": false},
            { "text": "d) Nova, crescente, cheia e minguante", "correct": true}
        ]
    },
    {
        "questao": "Quantos ossos temos no nosso corpo?",
        "respostas": [
            { "text": "a) 126", "correct": false},
            { "text": "b) 206", "correct": true},
            { "text": "c) 18", "correct": false},
            { "text": "d) 300", "correct": false}
        ]
    },
    {
        "questao": "Qual o maior planeta do sistema solar?",
        "respostas": [
            { "text": "a) Marte", "correct": false},
            { "text": "b) Lua", "correct": false},
            { "text": "c) Saturno", "correct": false},
            { "text": "d) Júpiter", "correct": true}
        ]
    },
    {
        "questao": "Um anel tem 3 pedras preciosas. Quantas pedras preciosas têm 11 anéis?",
        "respostas": [
            { "text": "a) 33", "correct": true},
            { "text": "b) 110", "correct": false},
            { "text": "c) 333", "correct": false},
            { "text": "d) 30", "correct": false}
        ]
    },
    {
        "questao": "Qual o planeta mais próximo do Sol?",
        "respostas": [
            { "text": "a) Netuno", "correct": false},
            { "text": "b) Júpiter", "correct": false},
            { "text": "c) Mercúrio", "correct": true},
            { "text": "d) Terra", "correct": false}
        ]
    },
    {
        "questao": "Quantos continentes existem?",
        "respostas": [
            { "text": "a) 2", "correct": false},
            { "text": "b) 4", "correct": false},
            { "text": "c) 6", "correct": true},
            { "text": "d) 3", "correct": false}
        ]
    },
    {
        "questao": "Qual a maior floresta tropical do mundo?",
        "respostas": [
            { "text": "a) Mata Atlântica", "correct": false},
            { "text": "b) Pampas", "correct": false},
            { "text": "c) Pantanal", "correct": false},
            { "text": "d) Floresta Amazônica", "correct": true}
        ]
    },
    {
        "questao": "Quais as duas línguas mais faladas no mundo?",
        "respostas": [
            { "text": "a) Inglês e espanhol", "correct": false},
            { "text": "b) Inglês e mandarim chinês", "correct": true},
            { "text": "c) Mandarim chinês e francês", "correct": false},
            { "text": "d) Inglês e português", "correct": false}
        ]
    },
    {
        "questao": "Qual o monumento famoso pela sua inclinação?",
        "respostas": [
            { "text": "a) Torre Eiffel", "correct": false},
            { "text": "b) Esfinge", "correct": false},
            { "text": "c) Torre de Pisa", "correct": true},
            { "text": "d) Estátua da Liberdade", "correct": false}
        ]
    },
    {
        "questao": "Kryptonita é a fraqueza de qual super-herói?",
        "respostas": [
            { "text": "a) Batman", "correct": false},
            { "text": "b) Hulk", "correct": false},
            { "text": "c) Super-Homem", "correct": true},
            { "text": "d) Capitão América", "correct": false}
        ]
    },
    {
        "questao": "Quem pintou Mona Lisa?",
        "respostas": [
            { "text": "a) Leonardo da Vinci", "correct": true},
            { "text": "b) Salvador Dalí", "correct": false},
            { "text": "c) Van Gogh", "correct": false},
            { "text": "d) Pablo Picasso", "correct": false}
        ]
    },
    {
        "questao": "O que representam os cinco anéis olímpicos?",
        "respostas": [
            { "text": "a) As partes do mundo unidas pelo Olimpismo", "correct": true},
            { "text": "b) As argolas da ginástica artística", "correct": false},
            { "text": "c) Cinco tipos de esporte: de rede, de campo, de combate, de precisão, de invasão", "correct": false},
            { "text": "d) Cinco deuses do Olimpo: Zeus, Atena, Apolo, Dionísio e Hermes", "correct": false}
        ]
    },
    {
        "questao": "Qual a personagem mais famosa de Maurício de Sousa?",
        "respostas": [
            { "text": "a) Mafalda", "correct": false},
            { "text": "b) Mônica", "correct": true},
            { "text": "c) Smurfette", "correct": false},
            { "text": "d) Magali", "correct": false}
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








