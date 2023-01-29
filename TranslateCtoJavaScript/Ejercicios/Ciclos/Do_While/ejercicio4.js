//Edad mayor, menor, promedio y suma

var n = Number(prompt("Cuantas edades quieres promediar: "));

var mayor = -999;
var menor = 999;
var i = 1;
var suma = 0;

while (n >= i) {
  do {
    var edad = Number(prompt("Ingrese la edad N°" + i));
  } while (edad > 120 && edad < 0);
  if (mayor < edad) {
    mayor = edad;
  }
  if (menor > edad) {
    menor = edad;
  }
  i++;
  suma = suma + edad;
}
var promedioEdad = suma / (i - 1);
document.write("El promedio es: " + promedioEdad);
document.write("El mayor es: " + mayor);
document.write("El menor es: " + menor);
