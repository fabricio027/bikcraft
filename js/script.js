// Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const numPergunta = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(numPergunta);
    
    resposta.classList.toggle('ativa');
    pergunta.setAttribute('aria-expanded', resposta.classList.contains('ativa'));
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;

    if (matchMedia('(min-width: 1000px)').matches) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

