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

    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "blue");
}

graficarComida = function () {

    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}

iniciarJuego = function () {
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}

graficarRectangulo = function (x, y, ancho, alto, color) {

    contexto.fillStyle = color;
    contexto.fillRect(x, y, ancho, alto);
}




