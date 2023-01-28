var x = prompt("Ingrese el valor: ");
if (x < 0) {
  x = x * x - 2 * x - 5;
  document.write("Opcion 1: " + x);
} else {
  if (0 <= x && x < 3) {
    x = x * x * x + 3 * (x * x);
    document.write("Opcion 2: " + x);
  } else {
    if (3 <= x && x < 5) {
      x = x * x * x * x + 4 * (x * x);
      document.write("Opcion 3: " + x);
    }
  }
}
