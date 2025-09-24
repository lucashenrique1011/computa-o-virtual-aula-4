document.addEventListener('DOMContentLoaded', function () {

    const canvas = document.getElementById('colorCanvas');
    if (!canvas) {
        console.error("Erro: O elemento Canvas (id='colorCanvas') não foi encontrado.");
        return; 
    }

    const ctx = canvas.getContext('2d');

    const rangeR = document.getElementById('rangeR');
    const rangeG = document.getElementById('rangeG');
    const rangeB = document.getElementById('rangeB');

    const valorR = document.getElementById('valorR');
    const valorG = document.getElementById('valorG');
    const valorB = document.getElementById('valorB');

    function atualizarInterface() {
        const r = parseInt(rangeR.value);
        const g = parseInt(rangeG.value);
        const b = parseInt(rangeB.value);

        valorR.textContent = r;
        valorG.textContent = g;
        valorB.textContent = b;

        const corRGB = `rgb(${r}, ${g}, ${b})`;

        ctx.fillStyle = corRGB;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    rangeR.addEventListener('input', atualizarInterface);
    rangeG.addEventListener('input', atualizarInterface);
    rangeB.addEventListener('input', atualizarInterface);

    atualizarInterface();
});