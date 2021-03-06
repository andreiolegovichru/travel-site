var gulp = require('gulp'), watch = require('gulp-watch'),
postcss = require('gulp-postcss'),autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('default', function(){
	console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your html here.");
});

gulp.task('styles', function() {
	console.log("Imagine Sass or PostCSS tasks running here.");
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/assets/temp/styles'));
	
});

gulp.task('watch', function(){
	
	browserSync.init({
		notify: false,
		server:{
		   baseDir: "app"
		}
	});
	
	watch('./app/index.html',function(){
		browserSync.reload();
	});
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
		
	});
});

gulp.task('cssInject', ['styles'], function() {
   return gulp.src('./app/temp/styles/styles.css')
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.stream());
	  
});