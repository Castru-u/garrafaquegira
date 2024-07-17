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
    },
        {
            "questao": "Que cidade brasileira é conhecida por chover todos os dias quase à mesma hora?",
            "respostas": [
                { "text": "a) São Paulo", "correct": false },
                { "text": "b) Joinville", "correct": false },
                { "text": "c) Belém", "correct": true },
                { "text": "d) Natal", "correct": false }
            ]
        },
        {
            "questao": "Qual o nome popular do cloreto de sódio?",
            "respostas": [
                { "text": "a) Vinagre", "correct": false },
                { "text": "b) Água", "correct": false },
                { "text": "c) Papel", "correct": false },
                { "text": "d) Fermento", "correct": false },
                { "text": "e) Sal de cozinha", "correct": true }
            ]
        },
        {
            "questao": "Que animal põe o maior ovo?",
            "respostas": [
                { "text": "a) Beija-flor", "correct": false },
                { "text": "b) Avestruz", "correct": true },
                { "text": "c) Tartaruga-gigante", "correct": false },
                { "text": "d) Galinha", "correct": false }
            ]
        },
        {
            "questao": "O que os pandas comem?",
            "respostas": [
                { "text": "a) Bambu", "correct": true },
                { "text": "b) Aves, ovos e peixe", "correct": false },
                { "text": "c) Frutas e mel", "correct": false },
                { "text": "d) Carnes", "correct": false }
            ]
        },
        {
            "questao": "Quantos andares tem o maior prédio do mundo?",
            "respostas": [
                { "text": "a) 100", "correct": false },
                { "text": "b) 200", "correct": false },
                { "text": "c) 163", "correct": true },
                { "text": "d) 25", "correct": false }
            ]
        },
        {
            "questao": "Em que país foi construído o Muro de Berlim?",
            "respostas": [
                { "text": "a) Estados Unidos", "correct": false },
                { "text": "b) China", "correct": false },
                { "text": "c) Coreia do Norte", "correct": false },
                { "text": "d) Alemanha", "correct": true }
            ]
        },
        {
            "questao": "Em que ano foi usado um celular pela primeira vez no Brasil?",
            "respostas": [
                { "text": "a) 1900", "correct": false },
                { "text": "b) 1990", "correct": true },
                { "text": "c) 1890", "correct": false },
                { "text": "d) 2000", "correct": false }
            ]
        },
        {
            "questao": "Em que país se anda mais de bicicleta?",
            "respostas": [
                { "text": "a) Brasil", "correct": false },
                { "text": "b) Portugal", "correct": false },
                { "text": "c) Estados Unidos", "correct": false },
                { "text": "d) Países Baixos", "correct": true }
            ]
        },
        {
            "questao": "Qual a especialidade do otorrinolaringologista?",
            "respostas": [
                { "text": "a) Tratamento das doenças bucais.", "correct": false },
                { "text": "b) Tratamento das doenças infantis.", "correct": false },
                { "text": "c) Tratamento das doenças da pele.", "correct": false },
                { "text": "d) Tratamento das doenças dos olhos.", "correct": false },
                { "text": "e) Tratamento das doenças relacionadas a nariz, ouvido e garganta.", "correct": true }
            ]
        },
        {
            "questao": "Qual a nacionalidade de Napoleão Bonaparte?",
            "respostas": [
                { "text": "a) Francesa", "correct": true },
                { "text": "b) Brasileira", "correct": false },
                { "text": "c) Mexicana", "correct": false },
                { "text": "d) Japonesa", "correct": false }
            ]
        },
        {
            "questao": "Depois do futebol, qual o esporte mais popular no Brasil?",
            "respostas": [
                { "text": "a) Esqui", "correct": false },
                { "text": "b) Vôlei", "correct": true },
                { "text": "c) Hóquei no gelo", "correct": false },
                { "text": "d) Golfe", "correct": false }
            ]
        },
        {
            "questao": "Que grande evento histórico aconteceu em 1822 no Brasil?",
            "respostas": [
                { "text": "a) Descobrimento do Brasil", "correct": false },
                { "text": "b) Ditadura Militar", "correct": false },
                { "text": "c) Revolução de 1930", "correct": false },
                { "text": "d) Independência do Brasil", "correct": true }
            ]
        },
        {
            "questao": "O que comemora no feriado do dia 21 de abril no Brasil?",
            "respostas": [
                { "text": "a) Natal", "correct": false },
                { "text": "b) Tiradentes", "correct": true },
                { "text": "c) Independência do Brasil", "correct": false },
                { "text": "d) Finados", "correct": false }
            ]
        },
        {
            "questao": "Em que conto de fadas uma princesa adormece com um feitiço e só acorda com o beijo de um príncipe?",
            "respostas": [
                { "text": "a) A Bela Adormecida", "correct": true },
                { "text": "b) João e Maria", "correct": false },
                { "text": "c) Chapeuzinho Vermelho", "correct": false },
                { "text": "d) Patinho Feio", "correct": false }
            ]
        },
        {
            "questao": "Em que região se localiza o estado de Minas Gerais?",
            "respostas": [
                { "text": "a) Sudeste", "correct": true },
                { "text": "b) Centro-Oeste", "correct": false },
                { "text": "c) Norte", "correct": false },
                { "text": "d) Sul", "correct": false }
            ]
        },
        {
            "questao": "Que fruto nasce da oliveira?",
            "respostas": [
                { "text": "a) Amêndoa", "correct": false },
                { "text": "b) Abacate", "correct": false },
                { "text": "c) Azeitona", "correct": true },
                { "text": "d) Açaí", "correct": false }
            ]
        },
        {
            "questao": "Qual o plural de chapéu?",
            "respostas": [
                { "text": "a) Chapéis", "correct": false },
                { "text": "b) Chapéus", "correct": true },
                { "text": "c) Chapéuzes", "correct": false },
                { "text": "d) Chapuzes", "correct": false }
            ]
        },
        {
            "questao": "Quem escreveu Os Lusíadas?",
            "respostas": [
                { "text": "a) Carlos Drummond de Andrade", "correct": false },
                { "text": "b) Fernando Pessoa", "correct": false },
                { "text": "c) Jorge Amado", "correct": false },
                { "text": "d) Almeida Garrett", "correct": false },
                { "text": "e) Luís Vaz de Camões", "correct": true }
            ]
        },
        {
            "questao": "Barack Obama foi presidente de que país?",
            "respostas": [
                { "text": "a) Estados Unidos da América", "correct": true },
                { "text": "b) Inglaterra", "correct": false },
                { "text": "c) Alemanha", "correct": false },
                { "text": "d) Rússia", "correct": false },
                { "text": "e) África do Sul", "correct": false }
            ]
        },
        {
            "questao": "Em que país se localiza o Taj Mahal?",
            "respostas": [
                { "text": "a) Egito", "correct": false },
                { "text": "b) Índia", "correct": true },
                { "text": "c) Inglaterra", "correct": false },
                { "text": "d) Brasil", "correct": false },
                { "text": "e) França", "correct": false }
            ]
        },
        {
            "questao": "Que navio famoso naufragou na sua viagem inaugural?",
            "respostas": [
                { "text": "a) Titanic", "correct": true },
                { "text": "b) Antonov", "correct": false },
                { "text": "c) Boeing", "correct": false },
                { "text": "d) Airbus", "correct": false },
                { "text": "e) Symphony of the Seas", "correct": false }
            ]
        },
        {
            "questao": "Qual o satélite natural da Terra?",
            "respostas": [
                { "text": "a) SCD-1", "correct": false },
                { "text": "b) Sol", "correct": false },
                { "text": "c) Amazonia 1", "correct": false },
                { "text": "d) Ganimedes", "correct": false },
                { "text": "e) Lua", "correct": true }
            ]
        },
        {
            "questao": "O que é um tsunami?",
            "respostas": [
                { "text": "a) Um ciclone", "correct": false },
                { "text": "b) Um tornado", "correct": false },
                { "text": "c) Um maremoto", "correct": true },
                { "text": "d) Um terremoto", "correct": false },
                { "text": "e) Um incêndio", "correct": false }
            ]
        },
        {
            "questao": "Qual destas substâncias faz parte da composição do vidro?",
            "respostas": [
                { "text": "a) Petróleo", "correct": false },
                { "text": "b) Fibra", "correct": false },
                { "text": "c) Celulose", "correct": false },
                { "text": "d) Areia", "correct": true },
                { "text": "e) Álcool", "correct": false }
            ]
        },
        {
            "questao": "Qual a nacionalidade do sociólogo e filósofo Durkheim?",
            "respostas": [
                { "text": "a) Alemã", "correct": false },
                { "text": "b) Francesa", "correct": true },
                { "text": "c) Inglesa", "correct": false },
                { "text": "d) Italiana", "correct": false },
                { "text": "e) Norueguesa", "correct": false }
            ]
        },
        {
            "questao": "Lady Di era o apelido de qual personalidade?",
            "respostas": [
                { "text": "a) Chiquinha Gonzaga", "correct": false },
                { "text": "b) Joana d’Arc", "correct": false },
                { "text": "c) Carlota Joaquina", "correct": false },
                { "text": "d) Diana, a Princesa de Gales", "correct": true },
                { "text": "e) Grace Kelly", "correct": false }
            ]
        },
        {
            "questao": "Qual a primeira mulher a ganhar um prêmio Nobel?",
            "respostas": [
                { "text": "a) Madre Teresa de Calcutá", "correct": false },
                { "text": "b) Elizabeth Blackwell", "correct": false },
                { "text": "c) Irène Joliot-Curie", "correct": false },
                { "text": "d) Valentina Tereshkova", "correct": false },
                { "text": "e) Marie Curie", "correct": true }
            ]
        },
        {
            "questao": "Quais as respectivas cores da reciclagem do papel, do vidro, do metal e do plástico?",
            "respostas": [
                { "text": "a) azul, verde, amarelo e vermelho", "correct": false },
                { "text": "b) verde, azul, vermelho e amarelo", "correct": false },
                { "text": "c) vermelho, amarelo, verde e azul", "correct": false },
                { "text": "d) azul, amarelo, verde e vermelho", "correct": false },
                { "text": "e) verde, amarelo, azul e vermelho", "correct": true }
            ]
        },
        {
            "questao": "Quem foi a única pessoa na história a receber o Prêmio Nobel em áreas científicas diferentes?",
            "respostas": [
                { "text": "a) Albert Einstein", "correct": false },
                { "text": "b) Linus Pauling", "correct": true },
                { "text": "c) Mahatma Gandhi", "correct": false },
                { "text": "d) Marie Curie", "correct": false },
                { "text": "e) Stephen Hawking", "correct": false }
            ]
        },{
            questao: "Qual é o maior oceano do mundo?",
            respostas: [
                { text: "A) Oceano Atlântico", correct: false },
                { text: "B) Oceano Índico", correct: false },
                { text: "C) Oceano Pacífico", correct: true },
                { text: "D) Oceano Ártico", correct: false }
            ]
        },
        {
            questao: "Quem escreveu 'O Pequeno Príncipe'?",
            respostas: [
                { text: "A) Antoine de Saint-Exupéry", correct: true },
                { text: "B) J.K. Rowling", correct: false },
                { text: "C) Charles Dickens", correct: false },
                { text: "D) J.R.R. Tolkien", correct: false }
            ]
        },
        {
            questao: "Qual é a capital da Austrália?",
            respostas: [
                { text: "A) Sydney", correct: false },
                { text: "B) Melbourne", correct: false },
                { text: "C) Canberra", correct: true },
                { text: "D) Brisbane", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro presidente dos Estados Unidos?",
            respostas: [
                { text: "A) Abraham Lincoln", correct: false },
                { text: "B) George Washington", correct: true },
                { text: "C) Thomas Jefferson", correct: false },
                { text: "D) John Adams", correct: false }
            ]
        },
        {
            questao: "Em que ano começou a Primeira Guerra Mundial?",
            respostas: [
                { text: "A) 1910", correct: false },
                { text: "B) 1914", correct: true },
                { text: "C) 1916", correct: false },
                { text: "D) 1918", correct: false }
            ]
        },
        {
            questao: "Qual é o país com a maior área territorial do mundo?",
            respostas: [
                { text: "A) Estados Unidos", correct: false },
                { text: "B) Rússia", correct: true },
                { text: "C) China", correct: false },
                { text: "D) Canadá", correct: false }
            ]
        },
        {
            questao: "Quem foi o autor de 'A Origem das Espécies'?",
            respostas: [
                { text: "A) Charles Darwin", correct: true },
                { text: "B) Isaac Newton", correct: false },
                { text: "C) Albert Einstein", correct: false },
                { text: "D) Marie Curie", correct: false }
            ]
        },
        {
            questao: "Qual é o metal mais abundante na crosta terrestre?",
            respostas: [
                { text: "A) Ferro", correct: false },
                { text: "B) Alumínio", correct: true },
                { text: "C) Ouro", correct: false },
                { text: "D) Prata", correct: false }
            ]
        },
        {
            questao: "Qual é a montanha mais alta do mundo?",
            respostas: [
                { text: "A) Monte Everest", correct: true },
                { text: "B) Mont Blanc", correct: false },
                { text: "C) Monte Kilimanjaro", correct: false },
                { text: "D) Monte McKinley (Denali)", correct: false }
            ]
        },
        {
            questao: "Quem pintou 'A Noite Estrelada'?",
            respostas: [
                { text: "A) Vincent van Gogh", correct: true },
                { text: "B) Pablo Picasso", correct: false },
                { text: "C) Leonardo da Vinci", correct: false },
                { text: "D) Claude Monet", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro homem a pisar na Lua?",
            respostas: [
                { text: "A) Neil Armstrong", correct: true },
                { text: "B) Buzz Aldrin", correct: false },
                { text: "C) Yuri Gagarin", correct: false },
                { text: "D) Alan Shepard", correct: false }
            ]
        },
        {
            questao: "Qual é o maior planeta do sistema solar?",
            respostas: [
                { text: "A) Terra", correct: false },
                { text: "B) Júpiter", correct: true },
                { text: "C) Saturno", correct: false },
                { text: "D) Netuno", correct: false }
            ]
        },
        {
            questao: "Quem foi o fundador do Facebook?",
            respostas: [
                { text: "A) Mark Zuckerberg", correct: true },
                { text: "B) Jeff Bezos", correct: false },
                { text: "C) Elon Musk", correct: false },
                { text: "D) Larry Page", correct: false }
            ]
        },
        {
            questao: "Qual é o rio mais extenso do mundo?",
            respostas: [
                { text: "A) Rio Nilo", correct: false },
                { text: "B) Rio Amazonas", correct: true },
                { text: "C) Rio Yangtzé", correct: false },
                { text: "D) Rio Mississipi", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro imperador romano?",
            respostas: [
                { text: "A) Júlio César", correct: false },
                { text: "B) Augusto", correct: true },
                { text: "C) Constantino", correct: false },
                { text: "D) Nero", correct: false }
            ]
        },
        {
            questao: "Qual é o maior deserto do mundo?",
            respostas: [
                { text: "A) Deserto do Saara", correct: true },
                { text: "B) Deserto da Arábia", correct: false },
                { text: "C) Deserto de Gobi", correct: false },
                { text: "D) Deserto de Atacama", correct: false }
            ]
        },
        {
            questao: "Quem foi o criador da teoria da relatividade?",
            respostas: [
                { text: "A) Isaac Newton", correct: false },
                { text: "B) Albert Einstein", correct: true },
                { text: "C) Niels Bohr", correct: false },
                { text: "D) Galileu Galilei", correct: false }
            ]
        },
        {
            questao: "Qual é o número atômico do oxigênio?",
            respostas: [
                { text: "A) 6", correct: false },
                { text: "B) 7", correct: false },
                { text: "C) 8", correct: true },
                { text: "D) 9", correct: false }
            ]
        },
        {
            questao: "Quem é conhecido como 'pai da psicanálise'?",
            respostas: [
                { text: "A) Carl Jung", correct: false },
                { text: "B) Sigmund Freud", correct: true },
                { text: "C) Ivan Pavlov", correct: false },
                { text: "D) B.F. Skinner", correct: false }
            ]
        },
        {
            questao: "Qual é a velocidade da luz no vácuo?",
            respostas: [
                { text: "A) 300.000 km/s", correct: true },
                { text: "B) 200.000 km/s", correct: false },
                { text: "C) 400.000 km/s", correct: false },
                { text: "D) 500.000 km/s", correct: false }
            ]
        },
        {
            questao: "Quem foi o fundador da Microsoft?",
            respostas: [
                { text: "A) Steve Jobs", correct: false },
                { text: "B) Bill Gates", correct: true },
                { text: "C) Tim Cook", correct: false },
                { text: "D) Larry Ellison", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro astronauta a dar uma volta completa na Terra?",
            respostas: [
                { text: "A) Yuri Gagarin", correct: true },
                { text: "B) Neil Armstrong", correct: false },
                { text: "C) John Glenn", correct: false },
                { text: "D) Buzz Aldrin", correct: false }
            ]
        },
        {
            questao: "Qual é o maior animal terrestre?",
            respostas: [
                { text: "A) Elefante africano", correct: true },
                { text: "B) Girafa", correct: false },
                { text: "C) Rinoceronte", correct: false },
                { text: "D) Hipopótamo", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro presidente do Brasil?",
            respostas: [
                { text: "A) Getúlio Vargas", correct: false },
                { text: "B) Juscelino Kubitschek", correct: false },
                { text: "C) Marechal Deodoro da Fonseca", correct: true },
                { text: "D) Café Filho", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro homem a escalar o Monte Everest?",
            respostas: [
                { text: "A) Edmund Hillary", correct: true },
                { text: "B) Reinhold Messner", correct: false },
                { text: "C) Tenzing Norgay", correct: false },
                { text: "D) Apa Sherpa", correct: false }
            ]
        },
        {
            questao: "Qual é a capital da França?",
            respostas: [
                { text: "A) Berlim", correct: false },
                { text: "B) Roma", correct: false },
                { text: "C) Paris", correct: true },
                { text: "D) Londres", correct: false }
            ]
        },
        {
            questao: "Quem foi o fundador da Apple Inc.?",
            respostas: [
                { text: "A) Steve Wozniak", correct: false },
                { text: "B) Steve Jobs", correct: true },
                { text: "C) Tim Cook", correct: false },
                { text: "D) Bill Gates", correct: false }
            ]
        },
        {
            questao: "Qual é a maior cordilheira do mundo?",
            respostas: [
                { text: "A) Cordilheira dos Andes", correct: false },
                { text: "B) Cordilheira do Himalaia", correct: true },
                { text: "C) Cordilheira dos Alpes", correct: false },
                { text: "D) Cordilheira do Atlas", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro cientista a formular a teoria heliocêntrica?",
            respostas: [
                { text: "A) Isaac Newton", correct: false },
                { text: "B) Galileu Galilei", correct: true },
                { text: "C) Johannes Kepler", correct: false },
                { text: "D) Nicolau Copérnico", correct: false }
            ]
        },
        {
            questao: "Qual é o maior estado do Brasil em área territorial?",
            respostas: [
                { text: "A) Amazonas", correct: true },
                { text: "B) Mato Grosso", correct: false },
                { text: "C) Minas Gerais", correct: false },
                { text: "D) Bahia", correct: false }
            ]
        },
        {
            questao: "Quem foi o autor de 'Dom Quixote'?",
            respostas: [
                { text: "A) William Shakespeare", correct: false },
                { text: "B) Miguel de Cervantes", correct: true },
                { text: "C) Gustave Flaubert", correct: false },
                { text: "D) Franz Kafka", correct: false }
            ]
        },
        {
            questao: "Qual é o segundo maior planeta do sistema solar?",
            respostas: [
                { text: "A) Marte", correct: false },
                { text: "B) Saturno", correct: true },
                { text: "C) Júpiter", correct: false },
                { text: "D) Urano", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro homem a viajar ao espaço?",
            respostas: [
                { text: "A) Yuri Gagarin", correct: true },
                { text: "B) Neil Armstrong", correct: false },
                { text: "C) Alan Shepard", correct: false },
                { text: "D) John Glenn", correct: false }
            ]
        },
        {
            questao: "Qual é o país com a maior população do mundo?",
            respostas: [
                { text: "A) Índia", correct: false },
                { text: "B) Estados Unidos", correct: false },
                { text: "C) China", correct: true },
                { text: "D) Brasil", correct: false }
            ]
        },
        {
            questao: "Quem descobriu a penicilina?",
            respostas: [
                { text: "A) Alexander Fleming", correct: true },
                { text: "B) Louis Pasteur", correct: false },
                { text: "C) Robert Koch", correct: false },
                { text: "D) Jonas Salk", correct: false }
            ]
        },
        {
            questao: "Qual é o nome do primeiro satélite artificial da Terra?",
            respostas: [
                { text: "A) Explorer 1", correct: false },
                { text: "B) Sputnik 1", correct: true },
                { text: "C) Vanguard 1", correct: false },
                { text: "D) Telstar 1", correct: false }
            ]
        },
        {
            questao: "Quem é considerado o 'pai da computação'?",
            respostas: [
                { text: "A) Alan Turing", correct: true },
                { text: "B) Bill Gates", correct: false },
                { text: "C) Tim Berners-Lee", correct: false },
                { text: "D) Steve Jobs", correct: false }
            ]
        },
        {
            questao: "Qual é a cidade conhecida como 'Cidade Maravilhosa'?",
            respostas: [
                { text: "A) Rio de Janeiro", correct: true },
                { text: "B) São Paulo", correct: false },
                { text: "C) Buenos Aires", correct: false },
                { text: "D) Lisboa", correct: false }
            ]
        },
        {
            questao: "Quem escreveu 'Romeu e Julieta'?",
            respostas: [
                { text: "A) William Shakespeare", correct: true },
                { text: "B) Charles Dickens", correct: false },
                { text: "C) Jane Austen", correct: false },
                { text: "D) F. Scott Fitzgerald", correct: false }
            ]
        },
        {
            questao: "Qual é a maior ilha do mundo?",
            respostas: [
                { text: "A) Madagascar", correct: false },
                { text: "B) Groenlândia", correct: true },
                { text: "C) Ilha de Baffin", correct: false },
                { text: "D) Ilha de Vancouver", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro homem a voar em um avião?",
            respostas: [
                { text: "A) Orville Wright", correct: false },
                { text: "B) Wilbur Wright", correct: true },
                { text: "C) Alberto Santos Dumont", correct: false },
                { text: "D) Louis Blériot", correct: false }
            ]
        },
        {
            questao: "Qual é o maior lago de água doce do mundo?",
            respostas: [
                { text: "A) Lago Vitória", correct: false },
                { text: "B) Lago Baikal", correct: true },
                { text: "C) Lago Superior", correct: false },
                { text: "D) Lago Titicaca", correct: false }
            ]
        },
        {
            questao: "Quem pintou 'Guernica'?",
            respostas: [
                { text: "A) Pablo Picasso", correct: true },
                { text: "B) Vincent van Gogh", correct: false },
                { text: "C) Leonardo da Vinci", correct: false },
                { text: "D) Claude Monet", correct: false }
            ]
        },
        {
            questao: "Qual é o maior arquipélago do mundo?",
            respostas: [
                { text: "A) Havaí", correct: false },
                { text: "B) Filipinas", correct: false },
                { text: "C) Indonésia", correct: true },
                { text: "D) Japão", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro imperador do Brasil?",
            respostas: [
                { text: "A) Dom Pedro I", correct: true },
                { text: "B) Dom Pedro II", correct: false },
                { text: "C) Getúlio Vargas", correct: false },
                { text: "D) José Bonifácio", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro homem a viajar ao espaço duas vezes?",
            respostas: [
                { text: "A) Yuri Gagarin", correct: false },
                { text: "B) John Glenn", correct: true },
                { text: "C) Neil Armstrong", correct: false },
                { text: "D) Alan Shepard", correct: false }
            ]
        },
        {
            questao: "Qual é a capital do Canadá?",
            respostas: [
                { text: "A) Toronto", correct: false },
                { text: "B) Vancouver", correct: false },
                { text: "C) Ottawa", correct: true },
                { text: "D) Montreal", correct: false }
            ]
        },
        {
            questao: "Quem foi o primeiro homem a pisar na Antártica?",
            respostas: [
                { text: "A) Roald Amundsen", correct: false },
                { text: "B) Robert Falcon Scott", correct: false },
                { text: "C) Richard E. Byrd", correct: false },
                { text: "D) Fabian Gottlieb von Bellingshausen", correct: true }
            ]
        },
        {
            questao: "Qual é o país com o maior número de ilhas no mundo?",
            respostas: [
                { text: "A) Suécia", correct: false },
                { text: "B) Filipinas", correct: false },
                { text: "C) Finlândia", correct: false },
                { text: "D) Suazilândia", correct: true }
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

            if(perguntaAleatoria.respostas[i].correct) {
                pontuacao[indiceJogador]++;
               ;
            }else{
                ;
            }
            function voltar(){
                results();

                document.getElementById('sair').onclick = 
                function(){
                document.querySelector(".container").style.pointerEvents = "auto";
                
                document.getElementById("ganhador").innerHTML="";
                document.querySelector(".container").style.display = "flex";
                for(let i = 0; i < botoesResposta.length; i++) {
                    botoesResposta[i].style.backgroundColor = "rgba(252, 184, 39, 0.866)"
                    botoesResposta[i].style.color = "rgb(112, 10, 123)";
                };
                document.querySelector("#popup").style.display = "none"
                document.querySelector("#telaprincipal").style.display="none";
                document.querySelector(".box-questoes").style.display="flex";}
            }
            function results(){
                
                document.querySelector(".box-questoes").style.display="none";
                document.querySelector("#popup").style.display = "block"
                document.querySelector(".lista-resultado").innerHTML="";
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
                
            }

            document.getElementById('next-btn').style.display = "block";
            if(pontuacao.includes(5)){
                document.getElementById("resultado").innerHTML="Resultado Final";
                function sair(){
                    window.location.href= 'principal.html'
                }
                document.getElementById('sair').innerHTML="Sair";
                document.getElementById('sair').onclick = sair;
                document.getElementById('next-btn').onclick = results
            }else{
                document.getElementById('next-btn').onclick = voltar;
            }

            
    }
}
}
