const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();


gulp.task('watch', function()
{
	console.log('watch task is running');
	browserSync.init(
	{// notify: false,
		server:"./app"
		
	});
	
	watch('./app/index.html', function()
	{
		browserSync.reload();
	});
	watch('./app/assets/styles/**/*.css', function()
	{
		console.log('I want to start cssInject task');
		gulp.start('cssInject');
		
	});
});

gulp.task('cssInject', ['styles'], function() {
   console.log('cssInject task is running');

   return gulp.src('./app/temp/styles/styles.css')
        // .pipe(gulp.dest('./app/temp/styles/styles.css'))
        .pipe(browserSync.stream());
	  
});