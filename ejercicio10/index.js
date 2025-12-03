// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

const parciales=[];

for(let i=1; i <= 3; i++)
{
    let nota= parseFloat(prompt(`Ingrese la nota del parcial ${i}`));
    parciales.push(nota);
}

let examenFinal= parseFloat(prompt(`Ingrese la nota del examen final?`));
let trabajoFinal= parseFloat(prompt(`Ingrese la nota del trabajo final?`));


const calcularMedia = notas => {
    let suma=0;
    for(const numeros of notas){
        suma+=numeros;
    }
    return suma / notas.length;
}

let media= calcularMedia(parciales);

const calcularPromedioFinal = (examenFinal,trabajoFinal,media) => {
    let porcentajeExamen = examenFinal*0.3;
    let porcentajeTrabajo= trabajoFinal*0.15;
    let porcentajeCalificacion= media*0.55;

    let suma = porcentajeTrabajo+porcentajeExamen+porcentajeCalificacion;
    console.log(porcentajeCalificacion);
    console.log(porcentajeTrabajo);
    console.log(porcentajeExamen);
    
    return suma;
}

console.log(`el promedio de las 3 calificaciones es: ${media}`);

console.log(`el promedio final es: ${calcularPromedioFinal(examenFinal,trabajoFinal, media)}`);


