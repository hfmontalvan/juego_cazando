let canvas = document.getElementById("areaJuego");
let contexto = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 100;
const ANCHO_GATO = 100;
const ALTO_COMIDA = 40;
const ANCHO_COMIDA = 40;

graficarGato = function () {
    contexto.fillStyle = "blue";
    contexto.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

graficarComida = function () {
    contexto.fillStyle = "red";
    contexto.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

iniciarJuego = function () {
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}




