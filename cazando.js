let canvas = document.getElementById("areaJuego");
let contexto = canvas.getContext("2d");

graficarGato = function () {
    contexto.fillStyle = "blue";
    contexto.fillRect(200, 200, 100, 100);
}