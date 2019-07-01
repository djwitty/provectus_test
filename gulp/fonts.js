const gulp = require('gulp');
const cnfg = require('../package.json').config;

gulp.task('fonts', function () {
    gulp.src(cnfg.src.fonts)
      .pipe(gulp.dest(cnfg.dist.fonts));
  });
   
  gulp.task('fonts:watch', function () {
    gulp.watch(cnfg.dist.fonts, ['fonts']);
  });