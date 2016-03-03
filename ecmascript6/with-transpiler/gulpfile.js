var gulp = require('gulp'),
	babel = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	exec = require('child_process').exec;

gulp.task('dev', ['js'], function () {
	gulp.watch('src/**/*.js', [ 'js' ]);
});

gulp.task('js', function() {
	gulp.src('src/app.js')
		.pipe(plumber())
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(gulp.dest('dist'));
	exec('npm start', function(error, stdout, stderror) {
		console.log('stdout: ' + stdout);
		if (stderror)
			console.log('stderr: ' + stderror);
		if (error)
			console.log('error: ' + error);
	});
});