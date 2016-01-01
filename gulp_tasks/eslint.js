var gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  path = require('./paths.json');

gulp.task('lint', function () {
  return gulp.src(path.src.eslint.files)
      .pipe(eslint(path.src.eslint.rc))
      .pipe(eslint.format());
      //.pipe(eslint.failAfterError())
      //.pipe(gulp.dest(''));
});
