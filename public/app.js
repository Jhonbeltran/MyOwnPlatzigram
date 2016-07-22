(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//En este archivo vamos a incluir toda la logica de js del lado del cliente
'use strict';

//Ejemplo de uso de ES6

//antes 

var numeros = [1, 2, 3, -34, 4000];
//.map es una funcion que tienen todos los arrays para poder recorrerlos 
var numerosMas1 = numeros.map(function (numero) {
	return numero + 1;
});
console.log(numerosMas1);

//Con ES6
let numerosES6 = [1, 2, 3, -34, 4000];
//.map es una funcion que tienen todos los arrays para poder recorrerlos 
let numerosMas1ES6 = numeros.map(numero => numero + 1);
console.log(numerosMas1ES6);

},{}]},{},[1]);
