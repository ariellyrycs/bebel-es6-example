  'use strict';


var gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserify = require('browserify'),
  babel = require('babelify'),
  path = require('./paths.json');

  var through2 = require('through2')
/*
var compile = function (watch) {
  var bundler = watchify(browserify(path.src.babel, { debug: true }).transform(babel));
  bundler.bundle()
    .on('error', function(err) { console.error(err); this.emit('end'); })
    .pipe(source('all.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.dest.babel));
  console.log('hehe');
}

gulp.task('babel', function () {
    return gulp.src(path.src.babel)
        .pipe(through2.obj(function (file, enc, next) {
            browserify(file.path, { debug: true })
                .transform(babel)
                .bundle(function (err, res) {
                    if (err) { return next(err); }
                    file.contents = res;
                    next(null, file);
                })
                .pipe(source('all.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({ loadMaps: true }))
                .pipe(sourcemaps.write('./'))
                .pipe(path.dest.babel);
        }))
        .on('error', function (err) {console.log(err); this.emit('end');});

});
*/

gulp.task('babel', function () {
  browserify(path.src.babel, { debug: true })
    .transform(babel)
    .bundle()
      .on('error', function (err) {console.log(err); this.emit('end');})
      .pipe(source('all.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.dest.babel));
});
