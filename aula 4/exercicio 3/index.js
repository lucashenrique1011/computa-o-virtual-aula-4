const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let estaDesenhando = false;
let ultimaPosicao = { x: 0, y: 0 };

ctx.strokeStyle = 'black';
ctx.lineWidth = 4;
ctx.lineCap = 'round';

function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function desenhar(pos) {
    if (!estaDesenhando) return;

    ctx.beginPath();

    ctx.moveTo(ultimaPosicao.x, ultimaPosicao.y);

    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();

    ultimaPosicao = pos;
}

canvas.addEventListener('mousedown', (e) => {
    estaDesenhando = true;
    ultimaPosicao = getMousePos(e);
});

canvas.addEventListener('mousemove', (e) => {
    if (estaDesenhando) {
        desenhar(getMousePos(e));
    }
});

canvas.addEventListener('mouseup', () => {
    estaDesenhando = false;
});

canvas.addEventListener('mouseout', () => {
    estaDesenhando = false;
});

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.limparCanvas = limparCanvas; 
