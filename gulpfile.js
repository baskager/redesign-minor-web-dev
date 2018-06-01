const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpSequence = require('gulp-sequence');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('img', function () {
    return gulp.src('./assets/img/**/*')
        .pipe(gulp.dest('./build/assets/img'))
});

gulp.task('img:compress', function () {
    return gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/assets/img'))
});

gulp.task('js', function () {
    return gulp.src('./assets/js/**/*.js')
        .pipe(gulp.dest('./build/assets/js'))
});

gulp.task('js:minify', () => {
    return gulp.src('./build/assets/js/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./build/assets/js'))
});

gulp.task('css:minify',() => {
    return gulp.src('./build/assets/css/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});

gulp.task('watch', function () {
    gulp.watch('./assets/**/*', ['default']);
});

gulp.task('default', ['sass', 'js', 'img', 'twig']);
gulp.task('build',  gulpSequence('clean', ['sass', 'js', 'img'], ['js:minify', 'css:minify', 'img:compress']));