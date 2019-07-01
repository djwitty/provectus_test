const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', function() {
    runSequence(
        'sass',
        'html',
        'js',
        'fonts',
        "img:watch",
        "libs"
    );
});