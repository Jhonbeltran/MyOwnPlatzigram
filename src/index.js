//En este archivo vamos a incluir toda la logica de js del lado del cliente
'use strict'

const page = require('page')
const yo = require('yo-yo')

var main = document.getElementById('main-container')//nos traemos el section del index.pug

page('/', function (ctx, next) {
	
})

//Debemos crear la ruta en el server.js
page('/signup', function (ctx, next) {
		
})

page.start()