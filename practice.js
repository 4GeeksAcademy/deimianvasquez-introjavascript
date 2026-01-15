// # Ejercicio: Evaluar el resultado de un estudiante

// ## Enunciado

// Un estudiante presenta un examen y obtiene una **nota numérica entre 0 y 100**.

// Desarrolla un programa en **JavaScript** que:

// 1. Guarde la nota del estudiante en una variable.
// 2. Determine si el estudiante **aprueba o reprueba** el examen.
// 3. Muestre un mensaje por consola indicando el resultado.

// ### Reglas
// - Si la nota es **mayor o igual a 60**, el estudiante **aprueba**.
// - Si la nota es **menor a 60**, el estudiante **reprueba**.

// ### Requisitos
// - Debes usar:
//   - Variables
//   - Tipos de datos (`number`, `string`, `boolean`)
//   - Condicionales (`if / else`)
// - No usar ciclos ni funciones.


// let nota = 75 
// let aprueba = false 
// let message = ""


// if(nota >= 60){
//     aprueba = true
//     message = `Felicitaciones, has aprobado`
// }else{
//     aprueba = false
//     message = `:( Debes estudiar más`
// }

// console.log("Nota:", nota)
// console.log("Aprueba:", aprueba)
// console.log(message)

/*
    Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos
    por su coche y el número de litros consumidos.

    El script debe mostrar el consumo de combustible por kilómetro.

*/


// let litros = window.prompt("Cantidad de litros: ")
// let kilometros = window.prompt("Ingresa kilómetros recorridos: ")

// function calculus(ltrs = 0, kils = 0) {

//     let resultado = 0
//     ltrs = Number(ltrs)
//     kils = Number(kils)

//     if (typeof (ltrs) != "number" && typeof (kils) != "number") {
//         alert("Ambos datos ingresados deben ser números")
//     } else {
//         resultado = ltrs / kils
//         resultado = resultado.toFixed(2)
//     }

//     alert(`El consumo de combustible es ${resultado} litros por kilometro `)

//     return resultado
// }

// calculus(litros, kilometros)



