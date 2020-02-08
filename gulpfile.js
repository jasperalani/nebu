let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/sass/theme.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
});

gulp.task('watch-sass', function(){
    gulp.watch('src/sass/**/*', gulp.series('sass'));
});