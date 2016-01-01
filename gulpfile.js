'use strict';

var gulp = require('gulp'),
    fs = require('fs');


var gulpDir = __dirname + '/gulp_tasks/',
  path = require(gulpDir + 'paths.json');

//load all files in task dir
var jsFiles = new RegExp("^.*\.(js)$", "i");
fs.readdirSync(gulpDir).forEach(function (fileName ) {
    if(jsFiles.test(fileName)) {
        require(gulpDir + fileName);
    }
});

var jsWatch = function () {
  gulp.watch(path.src.watch.js, ['lint', 'babel']);
};

var jadeWatch = function () {
  gulp.watch(path.src.watch.html, ['jade']);
};

gulp.task('js', ['lint', 'babel'], jsWatch);
gulp.task('html', ['jade'], jadeWatch);
//https://github.com/sergiodxa/es6/tree/master/examples/es6
//https://github.com/sindresorhus/esnext-showcase
//https://google.github.io/traceur-compiler/demo/repl.html
