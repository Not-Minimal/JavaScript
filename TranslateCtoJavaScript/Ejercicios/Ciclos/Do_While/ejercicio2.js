var x = prompt("Ingrese numero a mulplicar");
var n = prompt("Ingrese la cantidad multiplicaciones: ");
var i = 1;
while (i <= n) {
  var multiplo = i * x;
  document.write(multiplo);
  i = i + 1;
  document.write(" ");
}
