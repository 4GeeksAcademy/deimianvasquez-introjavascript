function nombreFuncion(/*insumos (cualquir tipo de dato)*/) {
    // se hace el proceso para obtener un resultado
    // deben devolver algo (resultado, null)
}

function sum(num1 = 0, num2 = 0, num3 = 0) { // parametros por defecto

    let resultado = num1 + num2 + num3

    // if (typeof(resultado) == "number"){
    //     return resultado
    // }else{
    //     return "Debes enviar solo números"
    // }

    // if (typeof(num1) == "number" && typeof(num2) == "number" && typeof(num3) == "number" ){
    //     return resultado
    // }else{
    //      return "Debes enviar solo números"
    // }

    if (typeof (resultado) != "number") {
        return "Debes enviar solo números"
    } else {
        return resultado
    }


    // nada de lo que esta aquí se ejecuta
    console.log(" No me ignores plissss")
}

// console.log(sum(15, 89, "96"))





// function sumTwo(num1 = 0, num2 = 0, num3 = 0){
//     let total = 0

//     if(typeof(num1) == "number") {
//         total = total + num1
//     }

//     if(typeof(num2) == "number") {
//         total = total + num2
//     }

//     if(typeof(num3) == "number") {
//         total = total + num3
//     }
//     return total
// }

// console.log(sumTwo("10",63,"89"))



function sumRefactor(...args) {
    let total = 0

    for (let num of args) {
        if (typeof (num) == "number") {
            total = total + num
        }
    }

    return total
}

// console.log(sumRefactor("23",45, 78))





// const multi = function(num1=0, num2=0){
//     let result = num1*num2
//     return result
// }



// console.log(multi(sum(11,89),multi(5,5)))

const multi = (num1 = 0, num2 = 0) => num1 * num2 


console.log(multi(58,96))