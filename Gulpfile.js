'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

//Definimos una tarea para gulp
gulp.task('styles', function(){
	//En este caso le estamos diciendo a gulp que tome el archivo
	//lo preprocese con sass
	//Y lo cuarde en la carpeta de public
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
})

//Definimos la tarea por default
gulp.task('default', ['styles'])