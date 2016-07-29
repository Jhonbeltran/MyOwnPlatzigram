'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')

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



function compile(watch) {
	
	var bundle = browserify('./src/index.js')

	//ahora watchify está atento solo del bundle
	//Esto se va a ejecutar cada vez que hallan cambios
	if(watch){
		bundle = watchify(bundle)
		bundle.on('update', function(){
			console.log('--> Ejecutando una actualizacion *Bundling*')
			rebundle()
		})
	}

	function rebundle() {
		bundle
			.transform(babel, { presets: [ 'es2015' ], plugins: ['syntax-async-functions', 'transform-regenerator'] })
			.bundle()
			.on('error', function(err) {
				console.log(err)
				this.emit('end')
			})
			.pipe(source('index.js'))
			.pipe(rename('app.js'))
			.pipe(gulp.dest('public'))
	}

	
	rebundle()

}


//Tareas de build de nuestro proyecto

//Acá no se van a escuchar los cambios en los archivos
gulp.task('build', function() {
	return compile()
})

//Acá si
gulp.task('watch', function() {
	compile(true)
})

//Definimos la tarea por default
gulp.task('default', ['styles', 'assets', 'build'])