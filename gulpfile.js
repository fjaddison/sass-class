// https://www.youtube.com/watch?v=rmXVmfx3rNo
const gulp = require('gulp')
const broswerSync = require('browser-sync').create()
const sass = require('gulp-sass')

// compile my SASS!
gulp.task('sass', function () {
  return gulp.src(['src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(broswerSync.stream())
})

// watch & serve
gulp.task('serve', ['sass'], function () {
  broswerSync.init({
    server: './src'
  })
  gulp.watch(['src/scss/*.scss'], ['sass'])
  gulp.watch(['src/*.html']).on('change', broswerSync.reload)
})

// default task for gulp to run
gulp.task('default', ['serve'])
