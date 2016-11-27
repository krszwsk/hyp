const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const header = require('gulp-header')
const npm = require('./package.json')
const desc = `\/*\nhyp ${npm.version}\nCopyright 2016 Krzysztof Kraszewski\nFree to use under MIT licence. \n*\/\n`
const concat = require('gulp-concat')

gulp.task('default', ['css'], function () {
  gulp.watch('src/**/*.css', ['css'])
})

gulp.task('css', function () {
  return gulp.src(['src/main.css', ['src/typography.css'], 'src/grid.css', 'src/forms.css', 'src/buttons.css', 'src/utils.css'])
    .pipe(cleanCSS())
    .pipe(concat('hyp.min.css'))
    .pipe(header(desc))
    .pipe(gulp.dest('dist'))
})