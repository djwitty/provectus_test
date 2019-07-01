'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const cnfg = require('../package.json').config;
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(cnfg.src.sass)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 4 versions', 'ie 10'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({
        dirname: "",
        basename: "main",
        prefix: "",
        suffix: ".min",
        extname: ".css"
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cnfg.dist.css));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.*', ['sass']);
});