//Sumatoria

var n = prompt("Ingrese la cantidad de valores a sumar");

var suma = 0;
var x = 1;
var i = 1;
while (n >= x) {
  i = Number(prompt("Ingrese el valor N° " + x));
  suma = suma + i;
  x = x + 1;
}
document.write("El resultado es: " + suma);
