let dividendo = parseInt(prompt("Ingrese el primer numero"))

let divisor = parseInt(prompt("Ingrese el segundo numero"))

if (divisor === 0) {
    console.log("Error, no se puede dividir por cero");
}
else{
    let division=dividendo/divisor;
    console.log(`la division es ${division}`);
    
}