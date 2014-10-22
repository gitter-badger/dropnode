var gulp = require('gulp');
var nodeunit = require('gulp-nodeunit');

gulp.task('default', function(){
    //
});

gulp.task('default', function() {
    gulp.src('tests/*.js')
        .pipe(nodeunit({
            reporter: 'junit',
            reporterOptions: {
                output: 'test'
            }
        }));
});
