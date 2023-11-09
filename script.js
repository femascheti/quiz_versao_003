import {aleatorio, nome} from './nomes.js';
import {perguntas} from './perguntas.js';

let atual = 0;
let perguntaAtual;
let historia = "";

const textoPergunta = document.getElementById("perguntas");
const caixaOpcoes = document.getElementById("caixa-opcoes");
const resultadoTexto = document.getElementById("resultado");
const elementoResultado = document.getElementById("caixa-resultado");

function mostraPerguntaAtual() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    textoPergunta.textContent = perguntaAtual.pergunta;
    caixaOpcoes.textContent = "";
    mostraOpcoesAtuais();
}

function mostraOpcoesAtuais() {
    for (const opcao of perguntaAtual.opcoes) {
        const elementoOpcoes = document.createElement("button");
        elementoOpcoes.textContent = opcao.texto;
        elementoOpcoes.addEventListener("click", () => respostaSelecionada(opcao));
        caixaOpcoes.appendChild(elementoOpcoes);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const resposta = aleatorio(opcaoSelecionada.afirmacao);
    historia += resposta + "<br/>";
    atual++;
    mostraPerguntaAtual();
}

function mostraResultado() {
    textoPergunta.textContent = `${nome},`;
    caixaOpcoes.textContent = "";
    resultadoTexto.innerHTML = historia; // Alterado para innerHTML para interpretar as tags <br/>
    elementoResultado.classList.add("mostrar");
}

mostraPerguntaAtual();
