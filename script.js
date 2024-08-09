const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor maneira de se combater o desmatamento?",
        alternativas: [
            "Reflorestamento de áreas degradadas",
            "Implementação de leis mais rigorosas para a proteção das florestas"
        ]
    },
    {
        enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?",
        alternativas: [
            "Implementar programas de educação e formação profissional acessíveis a todos",
            "Políticas de redistribuição de renda e oportunidades"
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

// código omitido

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// código omitido

mostraAlternativas();
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    atual++;
    mostraPergunta();
}

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();

// código omitido

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

// código omitido


