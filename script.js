import {aleatorio, nome} from './nomes.js';
import {perguntas} from './perguntas.js';

let atual = 0;
let perguntaAtual;
let historia = "";

const textoPergunta = document.querySelector(".caixa-perguntas");
const caixaOpcoes = document.querySelector(".caixa-opcoes");
const resultadoTexto = document.querySelector(".texto-resultado");
const elementoResultado = document.querySelector(".caixa-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

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
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

// trocar nomes 
function substituiNomePerguntas() {
    for (const nomesAleatorios of perguntas) {
        nomesAleatorios.pergunta = nomesAleatorios.pergunta.replace(/!!você/g, nome);
    }
}

function jogarNovamente() {
    atual = 0;
    historia = "";
    elementoResultado.classList.remove("mostrar");
    mostraPerguntaAtual();
}

substituiNomePerguntas();
mostraPerguntaAtual();
