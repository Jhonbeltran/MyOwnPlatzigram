'use strict'
const yo = require('yo-yo')

//Definiremos la estructura del celular a la izquierda y una caja a la derecha

module.exports = function landing(box) {
	return yo`<div class="container landing">
			<div class="row">
				
				<div class="col s10 push-s1">
					
					<div class="row">
						
						<div class="col m5 hide-on-small-only">
							<img class="iphone" src="iphone.png"/>
						</div>
						
						${box}
					</div>
				</div>
			</div>
		</div>`
}

