'use strict'
const yo = require('yo-yo')

//Esto es para cuando safari no lo soporta
if (!window.Intl) {
    window.Intl = require('intl') // polyfill for `Intl`
    require('intl/locale-data/jsonp/en-US.js')
    require('intl/locale-data/jsonp/es.js')
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat')
require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')


/*https://github.com/yahoo/intl-relativeformat*/

var rf = new IntlRelativeFormat('es')
// var rf = new IntlRelativeFormat('en-US')

module.exports = function pictureCard(pic){
	let el;

	function render(picture) {
		return yo`<div class="card ${picture.liked ? 'liked' : ''}">
	    <div class="card-image">
	      <img class="activator" src="${picture.url}">
	    </div>
	    <div class="card-content">
	      	<a href="/user/${picture.user.username}" class="card-title">
				<img src="${picture.user.avatar}" class="avatar">
				<span class="username">${picture.user.username}</span>
			</a>
			<small class="right time">${rf.format(picture.createdAt)}</small>
			<p>
				<a class="left" href="#" onclick=${like.bind(null, true)}>
					<i class="fa fa-heart-o" aria-hidden="true"></i>
				</a>
				<a class="left" href="#" onclick=${like.bind(null, false)}>
					<i class="fa fa-heart" aria-hidden="true"></i>
				</a>
				<span class="left">${picture.likes}</span>
			</p>
	    </div>
	  </div>`
	}
	//usamos bind para evitar un bucle infinito
  	function like(liked) {
	  	pic.liked = liked
	  	pic.likes += liked ? 1 : -1
	  	let newEl = render(pic);
	  	yo.update(el, newEl)
	  	return false

  	}

  	

  el = render(pic)
  return el
}