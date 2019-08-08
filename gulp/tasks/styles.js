var gulp = require('gulp'), 
    postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
	mixins = require('postcss-mixins');
	hexrgba = require('postcss-hexrgba');
	const browserSync = require('browser-sync').create();
	
	
gulp.task('styles', function() {


	console.log("Styles task has started 3");
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins,cssvars, nested, hexrgba, autoprefixer]))
	.on('error',function(errorInfo)
	{
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));

	
});