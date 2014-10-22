var gulp = require('gulp'),
    nodeunit = require('gulp-nodeunit');

gulp.task('default', function() {
    gulp.src('tests/*.js')
        .pipe(nodeunit({
            reporter: 'junit',
            reporterOptions: {
                output: 'tests'
            }
        }));
});

