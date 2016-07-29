'use strict'

const express = require('express')//Importamos nuestro microframework para servidores web
const app = express()
const port = process.env.PORT || 8080//definimos el puerto al que va a escuchar el servidor

//vamos a indicarle a express que nuestra aplicacion va a usar un motor de vistas
app.set('view engine', 'pug')

app.use(express.static('public'))//Le indicamos al server que se sirva el directorio

app.get('/', function (req, res) {
	res.render('index', { title: 'Platzigram' })//acá se va a llamar al motor de vistas 'pug' 
})

app.get('/signup', function (req, res) {
	res.render('index', { title: 'Platzigram - Signup' })//acá se va a llamar al motor de vistas 'pug' 
})

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Platzigram - Signin' })//acá se va a llamar al motor de vistas 'pug' 
})

//Esta es la ruta de nuestra API
app.get('/api/pictures', function (req, res) {
	let pictures = [
		{
			user:{
				username: 'Jhonbeltran',
				avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12472594_1009674449067790_8222690340070613564_n.jpg?oh=ce6c44f315ae86ef6c299a6118da9b15&oe=58147F46'
			},
			url: 'http://phandroid.s3.amazonaws.com/wp-content/uploads/2014/07/Lowpoly_Landscape.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date().getTime()
		},
		{
			user:{
				username: 'Jbeltranleon',
				avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12472594_1009674449067790_8222690340070613564_n.jpg?oh=ce6c44f315ae86ef6c299a6118da9b15&oe=58147F46'
			},
			url: 'http://jordanbannister.co.uk/wp-content/uploads/2013/08/Poly-Landscape_2.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate()-10)
		}
	]

	
	setTimeout(function(){
		res.send(pictures)
	}, 2000)
	
})




app.listen(port, function(err){
	//Si hubo un error muestrelo en consola y termine la ejecucion
	if(err) return console.log("Hubo un error"),process.exit(1)

	console.log(`El servidor ha iniciado y está escuchando en el puerto: ${port}`)
})