'use strict'
const page = require('page')
const empty = require('empty-element')
const template = require('./template')

page('/signup', function (ctx, next) {
	var main = document.getElementById('main-container')
	empty(main).appendChild(template)
})