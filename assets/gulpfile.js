const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-dart-sass');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify')
const sassGlob = require('gulp-sass-glob-use-forward');
const mqpacker = require('gulp-css-mqpacker');
const sortMediaQueries = require('postcss-sort-media-queries');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssSorter = require('css-declaration-sorter');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps  = require('gulp-sourcemaps');


function styling() {
    return src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(mqpacker())
    .pipe(postcss([
        sortMediaQueries({
          sort: 'desktop-first'
        }),
        cssSorter({ 
            order: "smacss" 
        }),
        autoprefixer(

        ),

    ]))
    .pipe(dest('css'))
}
function minifying() {
    return src(['css/*.css',"!css/*.min.css"])
    .pipe(sourcemaps.init())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest('css'))
}

exports.watch = function (){
    watch('scss/**/*.scss', series(styling,minifying));
}