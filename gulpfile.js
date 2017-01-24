'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-html-replace');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('prod', function() {
    gulp.src([
        './node_modules/angular/angular.js',
        './node_modules/angular-route/angular-route.js',
        'app.js',
        'services/*.js',
        'controllers/*.js'
    ])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
    gulp.src('css/*.css')
        .pipe(minify('all.css'))
        .pipe(gulp.dest('dist'));
    gulp.src(['views/*.html', 'img/*'],{base:"."})
        .pipe(gulp.dest('dist'));
    gulp.src('index.html')
        .pipe(replace({
            'js': 'all.min.js',
            'css': 'main.css'
        }))
        .pipe(gulp.dest('dist'));
});
