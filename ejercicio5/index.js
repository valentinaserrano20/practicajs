let edad = parseInt(prompt("ingrese su edad:"));
let ingresos = parseFloat(prompt("digite sus ingresos mensuales: "));

if (edad > 16 && ingresos >= 1000) {
  console.log("Debe tributar");
}
else {
  console.log("no debe tributar");
}

