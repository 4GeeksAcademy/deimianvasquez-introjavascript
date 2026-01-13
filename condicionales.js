// operadores lógicos

let num1 = 15 // number - 15
let num2 = 17 // string - 15
let name = "Juanita"

// console.log( num2 === num1)
// console.log(num1 != num2)
// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 >= num2)
// console.log(num1 <= num2)

let ropa = "Black"
let age = 17
let money = 199


// // AND -> && 
// console.log(age >= 18 && ropa == "White" && money >= 200) // Ambas tienen que cumplirse para dar verdadero


// OR -> || 
// console.log(age >= 18 || ropa == "White" || money >= 200) 


// let usernameDb = "deimian"
// let passwordDb = "12345"


// // usuario usa mucho la capa 8 
// let user = "deimian"
// let pass = " 12345"

// if (usernameDb == (user.trim() != "")){
//     if (passwordDb == pass.trim()){
//         console.log("Bienvenido")
//     }else{
//         console.log("Contraseña invalida")
//     }
// }else{
//     console.log("User not found 404")
// }





// Condicionales

let noLike = "azul"
let colorSelected = "azul"


// if(noLike != colorSelected){
//     console.log("Ese me hace ver delgado")
// }else{
//     console.log("Odio ese color, me hace ver gordo");
// }


// let sientoQueMeAtropelloUnTren = true;
// let meAtropelloUnTren = false;

// if(sientoQueMeAtropelloUnTren == true) {

//   if(meAtropelloUnTren == true) {
//     console.log("No tienes gripe");
//   }
//   else{
//     console.log("Tienes gripe, estas con san Pedro");
//   }

// }
// else{
//   console.log("No tienes gripe");
// }


// if(sientoQueMeAtropelloUnTren == false || meAtropelloUnTren == true) {
//   console.log("No tienes gripe");
// }
// else if(sientoQueMeAtropelloUnTren == true && meAtropelloUnTren == false) {
//   console.log("Tienes gripe")
// }
// else{
//   console.log("No tengo idea, anda al medico");
// }



let totalPeople = 101 // --> In form


// if(totalPeople >= 0 && totalPeople<=50){
//     console.log("EL costo es 100$")
// }else if (totalPeople >=51 && totalPeople <= 100){
//     console.log("El costo es 200$")
// }else {
//     console.log("El costo es 500$ hasta mil personas")
// }


// let diaSemana = 'viernes';

// switch(diaSemana.toLowerCase())
// {
// 	case "lunes":
// 		console.log('Buen día para trabajar');
//         break; // o un return
// 	case "viernes":
// 		console.log('Vamos a tomar café');
//         return;
// 	default:
// 		console.log('Es otro día');
// }


let color = "azul"


if (color.toLowerCase() == "azul") {
	console.log("No me gusta el color")
} else {
	console.log("Es bonito")
}


// operador ternario 
color.toLowerCase() == "azul" ? 
	console.log("No me gusta el color") : 
	console.log("Es bonito")
