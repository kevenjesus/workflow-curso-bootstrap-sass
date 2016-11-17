const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const notify 	= require("gulp-notify");

gulp.task("default", function(){
	return gulp.src(["./*.scss","./*.sass"])
				.pipe(sass())
				.pipe(gulp.dest("./"))
});