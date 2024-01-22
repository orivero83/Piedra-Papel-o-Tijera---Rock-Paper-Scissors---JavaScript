// Definir variables

let P1, PC;
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");

let jugador = document.querySelector('.jugador');
let computadora = document.querySelector('.computadora');
let resultado = document.querySelector('.resultado');

// Funcion logica del juego / Con operadores Ternarios

function game() {

    // Opcion de la computadora aleatorio
    let rN = Math.floor(Math.random() * 3);
    PC = rN === 0 ? 'Papel' : rN === 1 ? 'Piedra' : 'Tijera';

    // Mostrar la eleccion del Jugador, Computadora y resultado

    jugador.textContent = `jugador ha seleccionado: ${P1}`;
    computadora.textContent = `computadora ha seleccionado: ${PC}`;

    resultado.textContent =
        P1 === PC ? 'Empate' :
        P1 === 'Piedra' && PC === 'Papel' ? 'Computadora Gano!' :
        P1 === 'Papel' && PC === 'Tijera' ? 'Computadora Gano!' :
        P1 === 'Tijera' && PC === 'Piedra' ? 'Computadora Gano!' :
        'Jugador Gano!';
};

// Agregamos los eventos a los Botones

piedra.addEventListener('click', function () {
    P1 = 'Piedra';
    game();
});

papel.addEventListener('click', function () {
    P1 = 'Papel';
    game();
});

tijera.addEventListener('click', function () {
    P1 = 'Tijera';
    game();
});