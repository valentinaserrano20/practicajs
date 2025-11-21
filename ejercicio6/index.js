let nombre = prompt("Ingrese el nombre:").trim;
let sexo = parseInt(prompt("ingrese su sexo (m) masculino (f) femenino:"))

if (sexo.toLowerCase() == "f" && nombre[0].toLowerCase() < "m" || sexo.toLowerCase() == "m" && nombre[0].toLowerCase() > "n") {
  console.log("pertenece al grupo A");
}
else {
  "pertenece al grupo B"
}
