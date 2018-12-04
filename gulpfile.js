const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
	return gulp.src('src/styles/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/styles'))
		.pipe(browserSync.reload({
				stream: true
			}));
});

gulp.task('watch', function(){
	gulp.watch('src/styles/**/*.scss', ['sass']);
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/js/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		},
	});
});

gulp.task('default', ['browserSync', 'sass','watch'], function (){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('src/**/*.html', browserSync.reload);
	gulp.watch('src/js/*.js', browserSync.reload);
});