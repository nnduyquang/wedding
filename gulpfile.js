const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
var paths = {
    'jquery': './bower_components/vigor/',
    'bootstrap': './bower_components/bootstrap-sass/assets/',
    'font_awesome': './bower_components/components-font-awesome/',
    'layerslider': './bower_components/layerslider/'
}

elixir(mix => {
    mix.sass('app.scss')
    .webpack('app.js');
mix.sass([
    //paths.layerslider + 'css/_layerslider.scss',
    'styles/application.css'
], 'public/css/all_third_party.css');
mix.scripts([
    // paths.layerslider + 'js/greensock.js',
    'scripts/libs-min.js',
    'scripts/application.js'
], 'public/js/all_third_party.js');
mix.copy([
    //'resources/assets/fonts/elegant-icons/**',

], 'public/fonts');
//mix.copy('resources/assets/fonts/js_composer/**','public/fonts');
});
