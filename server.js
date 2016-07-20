'use strict'

const express = require('express')//Importamos nuestro microframework para servidores web
const app = express()
const port = process.env.PORT || 8080//definimos el puerto al que va a escuchar el servidor

app.get('/', function (req, res) {
	res.send('Dudeeee')
})

app.listen(port, function(err){
	//Si hubo un error muestrelo en consola y termine la ejecucion
	if(err) return console.log("Hubo un error"),process.exit(1)

	console.log(`El servidor ha iniciado y está escuchando en el puerto: ${port}`)
})