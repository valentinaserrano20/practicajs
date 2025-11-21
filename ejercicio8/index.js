let puntuacion = parseFloat(prompt("ingrese su puntuacion(0.0,0.4,0.6)"));

const base = 2400;

let sueldo = base * puntuacion;

if (puntuacion === 0.0) {
  console.log("Su nivel de puntuacion es inaceptable, por lo tanto no recibira dinero");
}
else if (puntuacion === 0.4) {
  console.log("Su nivel de puntuacion es aceptable");
  console.log(`la cantidad de dinero que obtuvo en este mes sera: ${base+sueldo}`);
  
}
else if (puntuacion >= 0.6) {
  console.log("Su nivel de puntuacion es meritorio");
  console.log(`la cantidad de dinero que obtuvo en este mes sera: ${base+sueldo}`);
}
else {
  console.log("ingrese una puntuacion valida");
}