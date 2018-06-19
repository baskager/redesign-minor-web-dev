const browserify = require("browserify");
const gulp = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean");
const babel = require("gulp-babel");
const sourceStream = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const log = require("gulplog");
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
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: source + "js/app.js",
    debug: true
    // defining transforms here will avoid crashing your stream
    // transform: [env]
  });

  return (
    b
      .bundle()
      .pipe(sourceStream("app.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      // Add transformation tasks to the pipeline here.
      // .pipe(uglify())
      .on("error", log.error)
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest(destination + "js/"))
  );
});

gulp.task("js:minify", () => {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: source + "js/app.js",
    debug: true
    // defining transforms here will avoid crashing your stream
    // transform: [env]
  });

  return (
    b
      .bundle()
      .pipe(sourceStream("app.js"))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      // Add transformation tasks to the pipeline here.
      .pipe(uglify())
      .on("error", log.error)
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest(destination + "js/"))
  );
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
