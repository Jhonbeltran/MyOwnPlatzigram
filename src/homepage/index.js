'use strict'
const page = require('page')
const title = require('title')

page('/', function (ctx, next) {
	title('Platzigram')
	var main = document.getElementById('main-container')
	main.innerHTML = '<a href="/signup">Signup</a>'
})