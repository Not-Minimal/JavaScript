function greet(name, lastName) {
  if (name && lastName) {
      console.log(`Hola ${name} ${lastName}`);
  } else {
      console.log("Por favor proporciona un nombre y apellido.")
  }
}

// Argumento para la funcion
greet('Saul', 'Muñoz');

//Calcular el cuadrado de un numero
function elevarAlCuadrado(number) {
return number * number;
}

console.log(elevarAlCuadrado(3));
