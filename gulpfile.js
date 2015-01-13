var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    log = util.log;

var scssSrc = 'src/scss/**/*.scss';
var cssDist = 'css';

var jsSrc = 'src/js/**/*.js';
var jsDist = 'js';

gulp.task('sass', function(){
    log('Generate CSS files ' + (new Date()).toString());

    gulp.src(scssSrc)
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 3 version','safari 5', 'ie 8', 'ie 9'))
        // .pipe(gulp.dest(cssDist))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDist));
});

// gulp.task('js', function() {
//     log('Generate JS files ' + (new Date()).toString());
//
//     gulp.src(jsSrc)
//         .pipe(uglify())
//         .pipe(concat('app.js'))
//         .pipe(gulp.dest(jsDist));
// });

gulp.task('watch', function(){
    log('Watching scss files for modifications');
    gulp.watch(scssSrc, ['sass']);
});

gulp.task("default", ['sass']);
