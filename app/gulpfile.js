const browserify = require("browserify");
const gulp = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean");
const sourceStream = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const log = require("gulplog");
const uglify = require("gulp-uglify");
const gulpSequence = require("gulp-sequence");
const imagemin = require("gulp-imagemin");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("babelify");

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
  let bundler = browserify(source + "js/app.js", { debug: true }).transform(
    "babelify",
    { presets: ["env"] }
  );

  bundler
    .bundle()
    .on("error", function(err) {
      console.error(err);
      this.emit("end");
    })
    .pipe(sourceStream("app.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(destination + "js/"));
});

gulp.task("js:minify", () => {
  let bundler = browserify(source + "js/app.js", { debug: true }).transform(
    "babelify",
    { presets: ["env"] }
  );

  bundler
    .bundle()
    .on("error", function(err) {
      console.error(err);
      this.emit("end");
    })
    .pipe(sourceStream("app.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(destination + "js/"));
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
