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

mix.sass([
    //paths.layerslider + 'css/_layerslider.scss',
    'admin/login/normalize.css',
    'admin/login/style.scss'
], 'public/css/login.css');

mix.sass([
    'bower_components/bootstrap/dist/css/bootstrap.min.cs',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/Ionicons/css/ionicons.min.css',
    'bower_components/iCheck/skins/flat/blue.css',
    'admin/morris/morris.css',
    'bower_components/jvectormap/jquery-jvectormap.css',
    'bower_components/datepicker/css/datepicker.css',
    'admin/daterangepicker/daterangepicker.css',
    'admin/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',


],'public/admin_third_party.css');


mix.scripts([
    // paths.layerslider + 'js/greensock.js',
    'scripts/libs-min.js',
    'scripts/application.js'
], 'public/js/all_third_party.js');

mix.scripts([
    // paths.layerslider + 'js/greensock.js',
    'admin/login/prefixfree.min.js',
    'admin/login/index.js'
], 'public/js/login.js');

mix.scripts([
    'bower_components/html5shiv/dist/html5shiv.min.js',
    'bower_components/respond/desr/respond.min.js',

],'public/js/admin_third_party.js');

mix.copy([
    'resources/assets/sass/admin/_all-skins.min.css',
    'resources/assets/sass/admin/AdminLTE.min.css',

], 'public/css');
//mix.copy('resources/assets/fonts/js_composer/**','public/fonts');
});
