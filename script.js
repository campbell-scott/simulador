function promedio(x){
    const total = x.reduce((a, b) => a + b, 0)
    return total/(x.length)
}

let cantAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))
let numeros = []
let entrada

for (let i = 1; i <= cantAlumnos; i++) {
    let nombre = prompt("Ingrese el nombre del alumno")
    do{
        entrada = parseInt(prompt("ingrese notas del alumno, para salir ingrese '0'"))
        if (entrada != 0) {
            numeros.push(entrada)
        }
     } while (entrada != 0);
     let promNotas = promedio(numeros)
    console.log("La nota final de "+nombre+" es: ",promNotas)
}

console.log("Fin programa")