var gulp = require('gulp'),
  jade = require('gulp-jade')
  paths = require('./paths.json');



gulp.task('jade', function () {
  return gulp.src(paths.src.jade)
    .pipe(jade({locals:{}}))
    .pipe(gulp.dest(paths.dest.html))
});
