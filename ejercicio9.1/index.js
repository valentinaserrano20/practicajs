const numeros = [];

let cantidad = parseInt(prompt("¿Para cuantos numeros desea saber la media?"));

for (i = 1; i <= cantidad; i++){
  let numero = parseInt(prompt(`ingrese el numero ${i}`));
  numeros.push(numero);
}

const calcularMedia = arregloNumeros => {

  let sumas = 0;
  for (const number of arregloNumeros) {
    sumas += number;
  }
  return sumas /arregloNumeros.length;
};

console.log((calcularMedia(numeros)));



