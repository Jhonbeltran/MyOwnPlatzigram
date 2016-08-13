'use strict'
const yo = require('yo-yo')
const translate = require('../translate')


module.exports = function pictureCard(pic){
	let el;

	function render(picture) {
		return yo`<div class="card ${picture.liked ? 'liked' : ''}">
	    <div class="card-image">
	      <img class="activator" src="${picture.url}" ondblclick=${like.bind(null, null, true)} />
	      <i class="fa fa-heart like-heart ${picture.likeHeart ? 'likedMostrarCorazon': ''}"></i>
	    </div>
	    <div class="card-content">
	      	<a href="/${picture.user.username}" class="card-title">
				<img src="${picture.user.avatar}" class="avatar">
				<span class="username">${picture.user.username}</span>
			</a>
			<small class="right time">${translate.date.format(picture.createdAt)}</small>
			<p>
				<a class="left" href="#" onclick=${like.bind(null, true)}>
					<i class="fa fa-heart-o" aria-hidden="true"></i>
				</a>
				<a class="left" href="#" onclick=${like.bind(null, false)}>
					<i class="fa fa-heart" aria-hidden="true"></i>
				</a>
				<span class="left likes">${translate.message('likes', { likes: picture.likes })}</span>
			</p>
	    </div>
	  </div>`
	}
	//usamos bind para evitar un bucle infinito
  	function like(liked, dblclick) {
  		if (dblclick) {
  			pic.likeHeart = pic.liked = !pic.liked
  			liked = pic.liked;
  		}else{
  			pic.liked = liked
  		}

	  	pic.likes += liked ? 1 : -1
	  	
	  	function doRender() {
	  		let newEl = render(pic);
	  		yo.update(el, newEl)
	  	}

	  	doRender()

	  	setTimeout(function () {
	  		pic.likeHeart = false
	  		doRender()
	  	}, 300)

	  	return false

  	}

  	

  el = render(pic)
  return el
}