const cuadrado = function (x) {
  return x * x;
};

console.log(cuadrado(12)); // 144

const hacerSonido = function () {
  console.log("Pling!");
};

hacerSonido(); //Pling!

const potencia = function (base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }
  return resultado;
};

console.log(potencia(2, 10)); //1024

let x = 10;
if (true) {
  let y = 20;
  let z = 30;
  console.log(x + y + z); //60
}
console.log(x);

const dividirEnDos = function (numero) {
  return numero / 2;
};

let numero = 10;
console.log(dividirEnDos(100)); //50
console.log(numero);

const humus = function (factor) {
  const ingrediente = function (cantidad, unidad, nombre) {
    let cantidadIngrediente = cantidad * factor;
    if (cantidadIngrediente > 1) {
      unidad += "s";
    }
    console.log("${cantidadIngrediente} ${unidad} ${nombre}");
    ingrediente(1, "Lata", "Garbanzos");
    ingrediente(1, "Raspado", "Limon");
    ingrediente(1, "Taza", "Jugo de Limon");
    ingrediente(1, "Diente", "Ajo");
    ingrediente(1, "Cucharada", "Aceite de Oliva");
    ingrediente(1, "Cucharadita", "Comino");
    console.log("$cantidadIngrediente} ${unidad} ${nombre}");
  };
  ingrediente(1, "Lata", "Garbanzos");
  ingrediente(1, "Raspado", "Limon");
  ingrediente(1, "Taza", "Jugo de Limon");
  ingrediente(1, "Diente", "Ajo");
  ingrediente(1, "Cucharada", "Aceite de Oliva");
  ingrediente(1, "Cucharadita", "Comino");
  console.log("$cantidadIngrediente} ${unidad} ${nombre}");
};
