var gulp = require('gulp'),
    ngmin = require('gulp-ngmin'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

var jsFolder = ['./public/app/*.js', './public/app/*/*.js', './public/app/*/*/*.js'];

gulp.task('js', function () {
    // Minfiy app files
    gulp.src(jsFolder)
        .pipe(ngmin({dynamic:true}))
        //.pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./public/src'));
});

gulp.task('libs', function () {
    // Libs - if order is important add 0_, 1_, 2_ to your filenames
    gulp.src('./public/libs/*.js')
        .pipe(uglify())
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('./public/src'));
});

gulp.task('default', ['js', 'libs']);

gulp.task('develop', function () {
    watch(jsFolder, function () {
        gulp.run('js');
    });
});