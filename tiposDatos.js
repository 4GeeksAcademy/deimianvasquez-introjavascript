// Boolean -- true / false

let acceso = false
acceso = true
// console.log(acceso)


// Strings --> cadena de caracteres
let saludaSimple = "Hola, comilla simple, 'Hola desde comillas', \"hola\""

let name = "Maxwel Hernandez"
let saludo = "Hola ¿qué tal?"
let edad = 24
let country = "Venezuela"

// concatenar 
let saludoCompelto = saludo + " " + name + " " + "mi edad es " + edad + " años" + " " + "vivo en" + " " + country
let saludoCompeltoDos = `${saludo} ${name} mi edad es ${edad} años vivo en ${country}`

// console.log(saludoCompelto)
// console.log(saludoCompeltoDos)


// Number
let num = 15.10;
let num2 = "20";

// console.log(num + Number(num2))


// Undefined --> Cuando esta definido
function multi(num, num2) {
    result = num * num2
}

let obj = {
    name: "Juana"
}

// console.log(obj["lastname"])
// console.log(multi(10,10))

// Arrays --> Lista de tipos de datos (todos)

let arrayRandom = ["Deimia", 10, { age: 20 }, true]
let humans = {
    "name": "juana"
}

console.log(Array.isArray(arrayRandom))
console.log(Array.isArray(humans))



// Objects
let humanOne = {
    // llave - valor
    name: "Marcos",
    latsName: "Cortez",
    gender: "Male"
}

let humanTwo = {
    name: "Juan",
    latsName: "Salazar",
    gender: "Male",
}
humanOne["pets"] = ["Cat", "Dog"]

console.log(`Hola ¿qué tal ${humanOne.name} ${humanOne.latsName}? soy ${humanOne.gender}`)

console.log(humanOne)
// console.log(Math.random())


// Null --> Se le asigno null

// Simulacion a consulta de database
let username = "deimian";
let access_token = null

if(access_token == null) return
console.log(username)