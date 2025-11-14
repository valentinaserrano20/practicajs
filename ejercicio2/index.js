const variable = "contraseña123";

let acceso = prompt("Ingrese la contraseña")

if (acceso.toLowerCase() == variable){
    console.log("La contraseña es correcta");
}
else{
    console.log("La contraseña es incorrecta");
}