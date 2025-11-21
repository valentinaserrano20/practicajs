let renta = parseInt(prompt("ingrese su usuario su renta anual:"))

if (renta >=10000 && renta < 20000) {
  console.log("El impositivo asignado para usted es del 5%");
}
else if (renta >=20000 && renta <35000) {
  console.log("El impositivo asignado para usted es del 10%");
}
else if (renta >=35000 && renta <60000) {
  console.log("El impositivo asignado para usted es del 20%");
}
else if (renta >=60000) {
  console.log("El impositivo asignado para usted es del 45%");
}
else {
  console.log("no tiene impositivo asignado");
}