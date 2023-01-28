document.write(
  "Ingrese 4 puntos del plano cartesiano, tales que sea: x1, x2, y1 e y2"
);
var x1 = prompt("Ingrese X1: ");
var x2 = prompt("Ingrese X2: ");
var y1 = prompt("Ingrese Y1: ");
var y2 = prompt("Ingrese Y2: ");
var resultado = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
document.write("La diferencia entre los puntos es: " + resultado);
