const gulp = require('gulp');
const cnfg = require('../package.json').config;
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const include = require("gulp-include");
const uglify = require('gulp-uglify');
 
gulp.task('js', function () {
  return gulp.src(cnfg.src.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(include({
        extensions: "js",
        hardFail: true,
        includePaths: [
          __dirname + "/bower_components",
          __dirname + "/../src/js"
        ]
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cnfg.dist.js));
});
 
gulp.task('js:watch', function () {
  gulp.watch([cnfg.src.js, '/src/js/components/**/*.html'], ['js']);
});