'use strict';
 
const gulp = require('gulp');
const cnfg = require('../package.json').config;
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileinclude = require('gulp-file-include');

gulp.task('html', function () {
  return gulp.src(cnfg.src.html + '/*.html')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
    .pipe(gulp.dest(cnfg.dist.html));
});
 
gulp.task('html:watch', function () {
  gulp.watch('src/**/*.html', ['html']);
});