const gulp = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const gulpSequence = require("gulp-sequence");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

const source = "./src/";
const destination = "./static/";

gulp.task("sass", function() {
  return gulp
    .src(source + "scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destination + "css"));
});

gulp.task("img", function() {
  return gulp.src(source + "img/**/*").pipe(gulp.dest(destination + "img"));
});

gulp.task("img:compress", function() {
  return gulp
    .src(source + "img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest(destination + "img"));
});

gulp.task("js", function() {
  return gulp
    .src(source + "js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .on("error", console.error.bind(console))
    .pipe(gulp.dest(destination + "js"));
});

gulp.task("js:minify", () => {
  return gulp
    .src(destination + "/js/**/*.js")
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest(destination + "js"));
});

gulp.task("css:minify", () => {
  return gulp
    .src(destination + "css/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest(destination + "css"));
});

gulp.task("clean", function() {
  return gulp.src(destination, { read: false }).pipe(clean());
});

gulp.task("watch", function() {
  gulp.watch(source + "**/*", ["default"]);
});

gulp.task("default", ["sass", "js", "img"]);
gulp.task(
  "build",
  gulpSequence(
    "clean",
    ["sass", "js", "img"],
    ["js:minify", "css:minify", "img:compress"]
  )
);
