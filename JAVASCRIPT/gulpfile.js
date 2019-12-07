let { dest } = require("gulp");
var babelify = require("babelify");
var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var source = require("vinyl-source-stream");

function minifyjs() {
  return browserify({
    entries: ["./src/index.js"],
    transform: [babelify]
  })
    .bundle()
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe(dest("build/"));
}

exports.minifyjs = minifyjs;
