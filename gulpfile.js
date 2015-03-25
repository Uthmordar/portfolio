var elixir = require('laravel-elixir');

var gulp=require('gulp'),
minifyCSS=require('gulp-minify-css'),
uglify = require('gulp-uglify');

elixir.extend("compress", function(from, to) {
    gulp.task('compress', function() {
      gulp.src(from)
        .pipe(uglify())
        .pipe(gulp.dest(to));
    });
    
    return this.queueTask("compress");
});

elixir.extend("minifycss", function(from, to) {
    gulp.task('minify-css', function(){
      return gulp.src(from)
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest(to));
    });
    
    return this.queueTask("minify-css");
});
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less([
        'app.less',
        'base.less',
        'index.less',
        'mixin.less'
    ]);
});

elixir(function(mix) {
    mix.styles([
        "reset.css",
        "base.css",
        "index.css"
    ], 'public/css/portfolio.css', 'public/css');
});

elixir(function(mix) {
    mix.minifycss('./public/css/portfolio.css', './public/css/dist/');
});

elixir(function(mix) {
    mix.scripts(['portfolio/app.js', 'portfolio/form.js', 'portfolio/portfolio.js', 'portfolio/parallax.js', 'portfolio/works.js', 'portfolio/menu.js'], 'resources/js/portfolio.js');
    mix.compress('resources/js/portfolio.js', 'public/js/portfolio');
});
