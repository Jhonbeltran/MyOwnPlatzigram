'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')

//Definimos una tarea para gulp
gulp.task('styles', function(){
	//En este caso le estamos diciendo a gulp que tome el archivo
	//lo preprocese con sass
	//Y lo cuarde en la carpeta de public
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'))
})

//Vamos a autogenerar la carpeta public que borramos
gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'))
})

//Definimos una tarea para que gul procese el archivo index.js de src y asu poder usar ES6
//bundle nos genera el archivo
//source trasnforma lo que devuelve el bundle a algo que entienda gulp
gulp.task('scripts', function(){
	browserify('./src/index.js')
		.transform(babel)
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'))
})


//Definimos la tarea por default
gulp.task('default', ['styles', 'assets', 'scripts'])