// temas.js

const temas = {
    tecnologia: {
        palavras: [
            "computador",
            "internet",
            "programacao"
        ],
        dicas: [
            "Dispositivo eletrônico para processamento de dados",
            "Rede mundial de computadores",
            "Processo de criação de software"
        ]
    },
    animais: {
        palavras: [
            "elefante",
            "girafa",
            "tigre"
        ],
        dicas: [
            "Grande mamífero com tromba",
            "Animal com pescoço longo",
            "Felino grande e feroz"
        ]
    },
    frutas: {
        palavras: [
            "banana",
            "maca",
            "laranja"
        ],
        dicas: [
            "Fruta amarela e curva",
            "Fruta vermelha e crocante",
            "Fruta cítrica e laranja"
        ]
    },
    filmes: { // Novo tema "filmes"
        palavras: [
            "matrix",
            "inception",
            "avatar"
        ],
        dicas: [
            "Filme sobre uma realidade virtual com Keanu Reeves",
            "Filme de ficção científica com sonhos dentro de sonhos",
            "Filme sobre um mundo alienígena chamado Pandora"
        ]
    }
};

function escolherTema() {
    const selectTema = document.getElementById("tema");
    selectTema.addEventListener("change", function() {
        const temaSelecionado = this.value;
        atualizarTema(temaSelecionado);
    });

    // Inicializa o jogo com o tema padrão
    atualizarTema(selectTema.value);
}

function atualizarTema(tema) {
    if (temas[tema]) {
        palavras = temas[tema].palavras;
        dicas = temas[tema].dicas;
        iniciarJogo();
    } else {
        palavras = [];
        dicas = [];
        alert('Tema inválido ou não selecionado!');
    }
}

// Inicializa a escolha de tema quando a página carrega
document.addEventListener("DOMContentLoaded", escolherTema);
