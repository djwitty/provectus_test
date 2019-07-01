const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        'build',
        [
            'sass:watch',
            'fonts:watch',
            'js:watch',
            'html:watch',
            "img:watch",
            "libs:watch"
        ],
        'server'
    );
});