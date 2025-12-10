let ArregloNumeros = [];

const pedirNumero = () => {
  let numero = parseInt(prompt("Ingrese el numero que desea agregar al arreglo (si desea terminar el ciclo, ingrese un numero negativo)"));
  return numero;
}

while (true) {
  let number = pedirNumero();
  if (number < 0) {
    break
  }
  else {
    ArregloNumeros.push(number)
  }
}

console.log(ArregloNumeros);

const mayorElemento = (ArregloNumeros) => {
  let mayor = ArregloNumeros[0];

  for (let i = 1; i < ArregloNumeros.length; i++){
    if (ArregloNumeros[i] > mayor) {
      mayor = ArregloNumeros[i];
    }
  }
  return mayor;
}

let resultado= mayorElemento(ArregloNumeros);

console.log(resultado);



