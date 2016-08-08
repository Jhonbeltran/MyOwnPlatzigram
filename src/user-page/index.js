//definimos la ruta
'use strict'
import page from 'page'
import header from '../header'
import title from 'title'
import empty from 'empty-element'
import template from './template'

//Para poner parametros en page usamos ":"
/*los middlewares son funciones que se ejecutan una despues de la otra
En este se separa una de otra con comas, al final de cada una se llama
el parametro next si todo fue bien*/
page('/:username', header, function (ctx, next) {
	const main = document.getElementById('main-container')
	title(`Platzigram - ${ctx.params.username}`)
	empty(main).appendChild(template(ctx.params.username))
})