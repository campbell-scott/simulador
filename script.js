function promedio(){
    let nota1 = parseInt(prompt("Ingrese la primer nota"))
    let nota2 = parseInt(prompt("Ingrese la segunda nota"))
    let nota3 = parseInt(prompt("Ingrese la tercer nota"))
    return (nota1+nota2+nota3)/3
}

let cantAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))

for (let i = 1; i <= cantAlumnos; i++) {
    let nombre = prompt("Ingrese el nombre del alumno")
    let promNotas = promedio()
    console.log("La nota final de "+nombre+" es: ",promNotas)
}

console.log("Fin programa")