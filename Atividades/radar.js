function verificarVelocidade() {
    const velocidade = parseInt(document.getElementById("vel").value);
    const resultado = document.getElementById("res");

    if (isNaN(velocidade)) {
        resultado.innerHTML = "Por favor, insira um número válido.";
        return;
    }

    if (velocidade > 80) {
        if (velocidade <= 120) {
            resultado.innerHTML = "Você foi multado! Infração média.";
        } else {
            resultado.innerHTML = "Você foi multado! Infração grave.";
        }
    } else {
        resultado.innerHTML = "Velocidade dentro do limite. Sem multa.";
    }
}