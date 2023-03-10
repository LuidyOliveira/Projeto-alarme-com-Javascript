let display = document.getElementById("display");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let começar = document.getElementById("começar");
let cronometroSeg;
let minutoAtual;
let segundoAtual;

for (let i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value= "' + i + '"> ' + i + "</option>";
}

for (let i = 1; i <= 60; i++) {
    segundos.innerHTML += '<option value= "' + i + '"> ' + i + "</option>";
}

começar.addEventListener("click", function () {
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML = minutoAtual + " : " + segundoAtual;

    let interval = setInterval(function () {
        segundoAtual--;
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--;
                segundoAtual = 59;
            } else {
                const music = new Audio("alarme.mp4");
                music.play();
                let limpar = document.getElementById("começar");
                limpar.innerHTML = "Reiniciar";
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ": " + segundoAtual;
    }, 1000);
});
