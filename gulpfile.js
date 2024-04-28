const { src, dest, watch, parallel } = require("gulp");

// CSS y SASS
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");

const paths = {
  scss: "scss/**/*.scss"
};
function css() {
  return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));
}


function dev(done) {
  watch(paths.scss, css);
  done();
}

exports.css = css;
exports.dev = dev;
exports.dev = parallel(css, dev);
