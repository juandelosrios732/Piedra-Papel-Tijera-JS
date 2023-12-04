let puntosJugador = 0;
let puntosPC = 0;

let instrucciones = document.querySelector('#instrucciones');
let contenedorPuntosJugador = document.querySelector('#puntos_jugador');
let contenedorPuntosPC = document.querySelector('#puntos_computadora');
let mensaje = document.querySelector('#mensaje');
let contenedorGanaPunto = document.querySelector('#gana_punto');
let elegirArma = document.querySelector('#elegir_arma');

let contenedorEleccionJugador = document.querySelector('#eleccion_jugador');
let contenedorEleccionPC = document.querySelector('#eleccion_computadora');

let botonesArmas = document.querySelectorAll('.arma');
botonesArmas.forEach(boton => {
    boton.addEventListener('click', iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionJugador = e.currentTarget.id;

    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel📄";
    } else {
        eleccionPC = "tijera✂️";
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    if (
        (eleccionJugador === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionJugador === "tijera✂️" && eleccionPC === "papel📄") ||
        (eleccionJugador === "papel📄" && eleccionPC === "piedra🪨")
    ) {
        ganaJugador();
    } else if (
        (eleccionPC === "piedra🪨" && eleccionJugador === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionJugador === "papel📄") ||
        (eleccionPC === "papel📄" && eleccionJugador === "piedra🪨")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove('oculto');
    contenedorEleccionJugador.innerText = eleccionJugador;
    contenedorEleccionPC.innerText = eleccionPC;

    if (puntosJugador === 5 || puntosPC === 5) {
        if (puntosJugador === 5) {
            instrucciones.innerText = "🔥¡Ganaste el juego!🔥";
        }

        if (puntosPC === 5) {
            instrucciones.innerText = "😭¡La computadora ganó el juego!😭";

        }

        elegirArma.classList.add('oculto');
        reiniciar.classList.remove('oculto');
        reiniciar.addEventListener('click', reiniciarJuego);
    }

}

function ganaJugador() {
    puntosJugador++;
    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥";
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora ganó un punto! 😭";
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 🙃";
}

function reiniciarJuego () {
    reiniciar.classList.add('oculto');
    elegirArma.classList.remove('oculto');
    mensaje.classList.add('oculto');

    puntosJugador = 0;
    puntosPC = 0;

    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana"
}



