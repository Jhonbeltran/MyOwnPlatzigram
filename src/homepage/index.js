'use strict'
const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')
const request = require('superagent')
const axios = require('axios')
//Para poder usar el header
const header = require('../header')

//Lo que hace page dentro de la ruta '/' es:
//1. Cargar las pictures desde el server
//2. Agregar las imagenes en el DOM
page('/', header, asyncLoad, function (ctx, next) {
	title('Platzigram')
	const main = document.getElementById('main-container')
	empty(main).appendChild(template(ctx.pictures))
})


//next existe en las funciones, en page y en express(at least) 
//para llamar una funcion luego de terminar la funcion que la llama
function loadPictures(ctx, next) {
	//voy a usar superagent para hacer peticiones tipo ajax
	//Hacemos el request a nuestro servidor
	request
	.get('/api/pictures')
	.end(function (err, res) {
		if(err) return console.log(err)

		ctx.pictures = res.body
		next()
	})
}

function loadPicturesAxios(ctx, next) {
	//voy a usar axios (promises)
	axios
	.get('/api/pictures')
	.then(function (res) {
		ctx.pictures = res.data
		next()
	})
	.catch(function (err) {
		console.log(err)
	})
}

function loadPicturesFetch(ctx, next) {
	//https://github.github.io/fetch/
	fetch('/api/pictures')
	.then(function (res) {
		//Tomamos los datos y los convertimos en json
		return res.json()
	})
	.then(function(pictures){
		ctx.pictures = pictures
		next()
	})
	.catch(function (err) {
		console.log(err)
	})
}

async function asyncLoad(ctx, next) {
	try{
		//await detiene de ejecución del proceso hasta que se cumpla la promesa
		ctx.pictures = await fetch('/api/pictures').then(res => res.json())
		next()
	}
	catch(err){
		return console.log(err)
	}
}