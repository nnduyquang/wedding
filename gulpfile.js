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
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/font-awesome/css/font-awesome.min.css',
    './bower_components/Ionicons/css/ionicons.min.css',
    './bower_components/iCheck/skins/flat/blue.css',
    'admin/morris/morris.css',
    'admin/jvectormap/jquery-jvectormap-1.2.2.css',
    //'./bower_components/jvectormap/jquery-jvectormap.css',
    './bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
    'admin/daterangepicker/daterangepicker.css',
    'admin/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',


], 'public/css/admin_third_party.css');


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
    './bower_components/html5shiv/dist/html5shiv.min.js',
    './bower_components/respond/dest/respond.min.js',
    'admin/jQuery/jquery-2.2.3.min.js',
    'admin/jQuery/jquery-ui.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/raphael/raphael.min.js',
    'admin/morris/morris.js',
    'admin/sparkline/jquery.sparkline.min.js',
    'admin/jvectormap/jquery-jvectormap-1.2.2.min.js',
    'admin/jvectormap/jquery-jvectormap-world-mill-en.js',
    //'./bower_components/jvectormap/jquery-jvectormap.js',
    //'./bower_components/jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js',
    'admin/knob/jquery.knob.js',
    './bower_components/moment/min/moment.min.js',
    'admin/daterangepicker/daterangepicker.js',
    './bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
    'admin/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
    './bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
    './bower_components/fastclick/lib/fastclick.js',

], 'public/js/admin_third_party.js');

mix.copy([
    'resources/assets/sass/admin/_all-skins.min.css',
    'resources/assets/sass/admin/AdminLTE.min.css',
], 'public/css');

mix.copy([
    'resources/assets/js/admin/app.min.js',
    'resources/assets/js/admin/dashboard.js',
    'resources/assets/js/admin/demo.js',
], 'public/js');

mix.copy([
    'bower_components/bootstrap/dist/fonts/**',
    'bower_components/Ionicons/fonts/**',
    'bower_components/font-awesome/fonts/**',

], 'public/fonts');

mix.copy([
    'bower_components/bootstrap-datepicker/dist/locales/**',

], 'public/locales');

});
