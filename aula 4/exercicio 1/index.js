const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

let cont = 0;

const botao = {
    x: 150,
    y: 80,
    largura: 100,
    altura: 40,
    texto: "Clique Aqui"
};

function redesenharTudo() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    desenharBotao('#007bff'); 

    desenharContador();
}

function desenharBotao(cor) {
    ctx.fillStyle = cor; 
    ctx.fillRect(botao.x, botao.y, botao.largura, botao.altura);

    ctx.fillStyle = 'white';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const textoX = botao.x + botao.largura / 2;
    const textoY = botao.y + botao.altura / 2;

    ctx.fillText(botao.texto, textoX, textoY);
}

function desenharContador() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    const contadorX = botao.x + botao.largura + 20; 
    const contadorY = botao.y + 10;
    
    const textoContador = `Cliques: ${cont}`;

    ctx.fillText(textoContador, contadorX, contadorY);
}
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX >= botao.x &&
        mouseX <= botao.x + botao.largura &&
        mouseY >= botao.y &&
        mouseY <= botao.y + botao.altura) {

        cont++;

        desenharBotao('#28a745'); 
        
        setTimeout(() => {
            redesenharTudo();
        }, 100); 

    }
});

redesenharTudo();