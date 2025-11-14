let edad = parseInt(prompt("ingrese su edad"))

if (edad <0){
    console.log("ingrese un numero positivo");
}
else{
    console.log("El numero es positivo");

    if (edad >=18){
        console.log("Usted es mayor de edad");
    }
    else{
        console.log("Usted es menor de edad");
    }
}

