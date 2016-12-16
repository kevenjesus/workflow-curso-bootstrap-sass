const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const notify 	= require("gulp-notify");

gulp.task("scss", function(){
	return gulp.src(["./*.scss","./*.sass"])
				.pipe(sass())
				.pipe(gulp.dest("./"))
});

gulp.task('watch', function(){
	gulp.watch('./*.scss', ['scss']);
});

gulp.task("default", ['scss', 'watch']);