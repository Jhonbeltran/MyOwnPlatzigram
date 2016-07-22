//En este archivo vamos a incluir toda la logica de js del lado del cliente
'use strict'

//Ejemplo de uso de ES6

//antes 

var numeros = [ 1, 2 ,3, -34, 4000]
//.map es una funcion que tienen todos los arrays para poder recorrerlos 
var numerosMas1 = numeros.map(function(numero) {
	return numero + 1
})
console.log(numerosMas1)

//Con ES6
let numerosES6 = [ 1, 2 ,3, -34, 4000]
//.map es una funcion que tienen todos los arrays para poder recorrerlos 
let numerosMas1ES6 = numeros.map(numero => numero + 1)
console.log(numerosMas1ES6)