const gulp = require('gulp');
const sass = require('gulp-sass');
const cnfg = require('../package.json').config;
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const importCss = require('gulp-import-css');
const babel = require('gulp-babel');
const include = require('gulp-include');
const uglify = require('gulp-uglify');

gulp.task('libs', function () {
    gulp.src(cnfg.libs.css)
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(importCss())
      .pipe(cssnano())
      .pipe(rename({
          dirname: "",
          basename: "libs",
          prefix: "",
          suffix: ".min",
          extname: ".css"
        }))
      .pipe(gulp.dest(cnfg.dist.css));
    gulp.src(cnfg.libs.js)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(include({
            extensions: "js",
            hardFail: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest(cnfg.dist.js));
  });
   
  gulp.task('libs:watch', function () {
    gulp.watch(cnfg.libs.css, ['libs']);
    gulp.watch(cnfg.libs.js, ['libs']);
  });