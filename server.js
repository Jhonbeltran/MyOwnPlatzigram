'use strict'

const express = require('express')//Importamos nuestro microframework para servidores web
const app = express()
const port = process.env.PORT || 8080//definimos el puerto al que va a escuchar el servidor
const ext = require('file-extension')
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' +ext(file.originalname))
  }
})
 
const upload = multer({ storage: storage }).single('picture')


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
			likes: 1,
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

	
	setTimeout(() => res.send(pictures), 2000)
		
	
	
})

app.post('/api/pictures', function (req, res) {
	upload(req, res, function(err) {
		if (err) {return res.send(500, "Error Uploading file")}

		res.send('File uploaded')
	})
})

//Definimos la ruta de las imagenes(por ahora son estaticas)
app.get('/api/user/:username', (req, res) => {
  const user = {
    username: 'Jhonbeltran',
    avatar: 'https://pbs.twimg.com/profile_images/762748755087089666/3ubjcOs4.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/13129218_1692859530968044_751360067_n.jpg?ig_cache_key=MTI0MjIzMTY4MzQ5NzU1MTQxOQ%3D%3D.2.c',
        likes: 3
      },
      {
        id: 2,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/13126768_259576907723683_861119732_n.jpg?ig_cache_key=MTIzODYzMjE4NDk1NDk3MTY5OQ%3D%3D.2',
        likes: 1
      },
      {
        id: 3,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/s640x640/sh0.08/e35/13118139_1705318183067891_1113349381_n.jpg?ig_cache_key=MTI0MTQwNzk1ODEyODc0ODQ5MQ%3D%3D.2',
        likes: 10
      },
      {
        id: 4,
        src: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12940327_1784772678421526_1500743370_n.jpg?ig_cache_key=MTIyMzQxODEwNTQ4MzE5MjE4OQ%3D%3D.2',
        likes: 0
      },
      {
        id: 5,
        src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/e35/11934723_222119064823256_2005955609_n.jpg?ig_cache_key=MTIyMzQwOTg2OTkwODU2NzY1MA%3D%3D.2',
        likes: 23
      },
      {
        id: 6,
        src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12904985_475045592684864_301128546_n.jpg?ig_cache_key=MTIyMzQwNjg2NDA5NDE2MDM5NA%3D%3D.2',
        likes: 11
      }
    ]
  }

  res.send(user);
})

//la ruta de usuario como recibe un parametro debemos definirla al final
app.get('/:username', function (req, res){
	res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.get('/:username/:id', function (req, res){
  res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.listen(port, function(err){
	//Si hubo un error muestrelo en consola y termine la ejecucion
	if(err) return console.log("Hubo un error"),process.exit(1)

	console.log(`El servidor ha iniciado y está escuchando en el puerto: ${port}`)
})