"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create(),
  del = require("del"),
  imagemin = require("gulp-imagemin"),
  uglify = require("gulp-uglify"),
  path = require("path"),
  rev = require("gulp-rev"),
  cleanCss = require("gulp-clean-css"),
  flatmap = require("gulp-flatmap"),
  usemin = require("gulp-usemin"),
  htmlmin = require("gulp-htmlmin");

sass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp.src("./css/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./css/*.scss", gulp.series("sass"));
});

gulp.task("browser-sync", function () {
  var files = ["./*.html", "./css/*.css", "./js/*.js", "./media/*.{png, jpeg, jpg, gif}"];
  browserSync.init(files, {
    server: {
      baseDir: "./",
    },
  });
  gulp.watch(files).on("change", browserSync.reload);
});

gulp.task("clean", function () {
  return del(["./dist"]);
});

gulp.task("imagemin", function () {
  return gulp
    .src("./media/*.{png,jpg,jpeg,gif}")
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 75, progressive: true }),
          imagemin.optipng({ optimizationLevel: 3 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(gulp.dest("dist/media"));
});

gulp.task("copyfonts", function () {
  return gulp
    .src("./node_modules/open-iconic/font/fonts/*.{ttf,woff,eof,svg,eot,otf}")
    .pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("usemin", function () {
  return gulp
    .src("./*.html")
    .pipe(
      flatmap(function (stream, file) {
        return stream.pipe(
          usemin({
            css: [rev()],
            html: [htmlmin({ collapseWhitespace: true })],
            js: [uglify(), rev()],
            inlinejs: [uglify()],
            inlinecss: [cleanCss(), "concat"],
          })
        );
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("build", gulp.series("clean", "copyfonts", "imagemin", "usemin"));

gulp.task("default", gulp.parallel("browser-sync", "sass:watch"));
