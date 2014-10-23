var gulp = require('gulp')
  , mocha = require('gulp-mocha')
  , notify = require('gulp-notify')
  , plumber = require('gulp-plumber')
  , notifierReporter = require('mocha-notifier-reporter')

var paths = {
  src: 'traitxjs/**/*.js',
  spec: 'test/**/*.js'
}

gulp.task('tdd', function () {
  gulp.watch([ paths.src, paths.spec ], [ 'test' ])
})

gulp.task('test', function () {
  gulp.src([ paths.src, paths.spec ])
    .pipe(plumber())
    .pipe(mocha({ reporter: notifierReporter.decorate('spec') }))
});
