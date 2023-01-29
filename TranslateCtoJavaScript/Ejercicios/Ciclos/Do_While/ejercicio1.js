do {
  var neto = prompt("Ingrese el valor neto: ");
  var total = neto * 1.19;
} while (neto <= 180);
document.write("El valor del producto con iva es: " + total);
