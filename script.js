const nomes = ["Giulliana", "Amanda", "Marcelo", "Maria", "Jackeline"];
function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}
const nome = aleatorio(nomes);

const perguntas = [
    {
        texto: "Como o uso de computadores em larga escala afeta o consumo de energia global?",
        opcoes: [
            {
                texto: "Aumenta significativamente devido à demanda constante de energia para operar e resfriar os dispositivos.",
                respostas: ["Reconhece que a tecnologia traz desafios para a sustentabilidade energética.",
                            "Acredita na inovação, mas também reflete sobre como a automação pode afetar o emprego e a dinâmica da equipe"]
            },
            {
                texto: "Não afeta muito, pois os computadores modernos são projetados para serem eficientes em energia.",
                respostas: ["Tem uma visão otimista da eficiência energética dos dispositivos modernos.",
                            "Defende o uso da ... como uma ferramenta para promover melhor uso de energia ."]
            },
            {
                texto: "Reduz o consumo, substituindo atividades que exigiriam mais energia sem tecnologia.",
                respostas: ["Acredita na substituição de processos antigos por tecnologias mais limpas como forma de economizar energia.",
                            "Promove sistemas de IA que otimizam o uso de recursos naturais em processos industriais."]
            },
        ]
    },
    {
        texto: "Qual é o impacto ambiental da mineração de criptomoedas, que depende fortemente de computação intensiva?",
        opcoes: [
            {
                texto: "Contribui para o aumento do consumo de energia, muitas vezes dependendo de fontes não renováveis.",
                respostas: ["Está ciente dos desafios ambientais associados às novas tecnologias financeiras.",
                            "defensora da ética na IA, assegurando que as máquinas sejam justas e compreensíveis para todos."]
            },
            {
                texto: "Tem um impacto neutro, pois a mineração pode ser feita usando energia renovável.",
                respostas: ["Tem esperança na capacidade de harmonizar avanços tecnológicos com sustentabilidade.",
                            "competição é um fator chave, mas deve ser balanceada com colaboração e desenvolvimento coletivo."]
            },
            {
                texto: "Beneficia o meio ambiente ao incentivar o desenvolvimento de tecnologias mais eficientes.",
                respostas: ["Vê o potencial de inovação tecnológica como um motor para melhorias ambientais.",
                            "Focar apenas nos benefícios econômicos que a IA pode trazer para as empresas."]
            },
        ]
    },
    {
        texto: "De que maneira a computação em nuvem pode influenciar o consumo de energia?",
        opcoes: [
            {
                texto: "Centraliza dados e processamento, potencialmente aumentando a eficiência energética.",
                respostas: ["Entende que soluções centralizadas podem levar a uma gestão de energia mais eficiente."]
            },
            {
                texto: "Pode aumentar o consumo devido à necessidade de manter servidores em funcionamento constante.",
                respostas: ["Preocupa-se com o consumo contínuo de energia necessário para manter a infraestrutura de TI."]
            },
            {
                texto: "Tem pouco impacto, pois os servidores são apenas uma pequena parte do consumo de energia global.",
                respostas: ["Considera o consumo de energia dos servidores como um aspecto menor no quadro geral."]
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historia = "";

const textoPergunta = document.getElementById("perguntas");
const caixaOpcoes = document.getElementById("container-opcoes");
const resultadoTexto = document.getElementById("resultado");
const elementoResultado = document.getElementById("container-resultado");

function mostraPerguntaAtual() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    textoPergunta.textContent = perguntaAtual.texto;
    caixaOpcoes.textContent = "";
    selecionaPergunta();
}

function selecionaPergunta() {
    for (const opcao of perguntaAtual.opcoes) {
        const elementoOpcoes = document.createElement("button");
        elementoOpcoes.textContent = opcao.texto;
        elementoOpcoes.addEventListener("click", () => respostaClicada(opcao));
        caixaOpcoes.appendChild(elementoOpcoes);
    }
}

function respostaClicada(opcaoSelecionada) {
    const resposta = aleatorio(opcaoSelecionada.respostas);
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
