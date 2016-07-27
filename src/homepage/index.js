'use strict'
const page = require('page')
const empty = require('empty-element')
const template = require('./template')
const title = require('title')

page('/', function (ctx, next) {
	title('Platzigram')
	const main = document.getElementById('main-container')

	let pictures = [
		{
			user:{
				username: 'Jhonbeltran',
				avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12472594_1009674449067790_8222690340070613564_n.jpg?oh=ce6c44f315ae86ef6c299a6118da9b15&oe=58147F46'
			},
			url: 'http://materializecss.com/images/office.jpg',
			likes: 0,
			liked: false,
			createdAt: new Date()
		},
		{
			user:{
				username: 'Jhonbeltran',
				avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12472594_1009674449067790_8222690340070613564_n.jpg?oh=ce6c44f315ae86ef6c299a6118da9b15&oe=58147F46'
			},
			url: 'http://materializecss.com/images/office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate()-10)
		}
	]

	empty(main).appendChild(template(pictures))
})