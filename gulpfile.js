var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass-compile', function(){
    return  gulp.src('./src/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
})
gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.sass', gulp.series('sass-compile'))
})