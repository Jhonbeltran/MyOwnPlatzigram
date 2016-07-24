//En este archivo vamos a incluir toda la logica de js del lado del cliente
'use strict'

const page = require('page')
const yo = require('yo-yo')
const empty = require('empty-element')

var main = document.getElementById('main-container')//nos traemos el section del index.pug

page('/', function (ctx, next) {
	main.innerHTML = '<a href="/signup">Signup</a>'
})

//Debemos crear la ruta en el server.js
page('/signup', function (ctx, next) {
	var el = yo`<div class="container">
			<div class="row">
				
				<div class="col s10 push-s1">
					
					<div class="row">
						
						<div class="col m5 hide-on-small-only">
							<img class="iphone" src="iphone.png"/>
						</div>
						
						<div class="col s12 m7">
							<div class="row">
								<div class="signup-box">
									<h1 class="platzigram">Platzigram</h1>
									<form class="signup-form">
									<h2>Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
									<div class="section">
										<a class="btn btn-fb hide-on-small-only">Iniciar sesión con facebook</a>
										
										<a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
									</div>
									<div class="divider"></div>
									<div class="section">
										<input type="email" name="email" placeholder="Correo electrónico"/>
										<input type="text" name="name" placeholder="Nombre Completo"/>
										<input type="text" name="username" placeholder="Nombre de usuario"/>
										<input type="password" name="password" placeholder="Contraseña"/>
										
										<button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
									</div>
									</form>
								</div>
							</div>
							<div class="row">
								<div class="login-box">
									¿Tienes una cuenta? <a href="/signin">Entrar</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`

	empty(main).appendChild(el)
})

page.start()