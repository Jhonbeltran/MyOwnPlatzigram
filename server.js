'use strict'

const express = require('express')//Importamos nuestro microframework para servidores web
const app = express()
const port = process.env.PORT || 8080//definimos el puerto al que va a escuchar el servidor

//vamos a indicarle a express que nuestra aplicacion va a usar un motor de vistas
app.set('view engine', 'pug')

app.use(express.static('public'))//Le indicamos al server que se sirva el directorio

app.get('/', function (req, res) {
	res.render('index')//acá se va a llamar al motor de vistas 'pug' 
})

app.get('/signup', function (req, res) {
	res.render('index')//acá se va a llamar al motor de vistas 'pug' 
})

app.get('/signin', function (req, res) {
	res.render('index')//acá se va a llamar al motor de vistas 'pug' 
})

app.listen(port, function(err){
	//Si hubo un error muestrelo en consola y termine la ejecucion
	if(err) return console.log("Hubo un error"),process.exit(1)

	console.log(`El servidor ha iniciado y está escuchando en el puerto: ${port}`)
})