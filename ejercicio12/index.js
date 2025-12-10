// let numero;
const pedirNumero = () => {
  try {
    let numero = parseInt(prompt("Ingrese un numero"));
    if (numero <= 0) {
      throw new Error("Ingrese un numero entero positivo")
    }
    return numero;
  }
  catch (error) {
    console.log(error.message);
  }
}
let resultado = pedirNumero();

let numeros = "";

for (let i = resultado; i >= 0; i--){
  numeros += i;
  if (i != 0) {
    numeros += ","
  }
}
console.log(numeros);
