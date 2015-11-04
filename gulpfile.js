var gulp = require('gulp');

//***********************************************
// SETTINGS
//***********************************************

// File paths
var root = 'vzurl/resources/';

// Options for AutoPrefixer
var autoprefixerOpts = [
    'last 2 versions',
    '> 1%',
    'ie >= 8',
    'android >= 4'
];


//***********************************************
// STYLES
//***********************************************

var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({ browsers: autoprefixerOpts, sourceMap: false }))
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(gulp.dest(root+'css'));
});


//***********************************************
// JAVASCRIPT
//***********************************************

var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    return gulp.src('src/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(root+'js'));
});


//***********************************************
// DEFAULT
//***********************************************

// Default Task
gulp.task('default', function() {
    gulp.start('styles', 'scripts');
});
