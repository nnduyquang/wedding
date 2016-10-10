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
    'font_awesome':'./bower_components/components-font-awesome/',
    'layerslider':'./bower_components/layerslider/'
}

elixir(mix => {
    mix.sass('app.scss')
    .webpack('app.js');
    mix.sass([
        //paths.layerslider + 'css/_layerslider.scss',
        'advanced-responsive-video-embedder/arve-public.scss',
        'contact-form-7/styles.css',
        'custom-facebook-feed-pro/cff-style.css'
        //font awesome min
        /* 'final-tiles-gallery/ftg.css',
        //font awesome
        'style/style.css',
        'style/stylesheet.css',
        'style/style_dynamic.css',
        'elegant-icons/style.min.css',
        'ion-icons/ionicons.min.css',
        'linea-icons/style.css',
        'style/responsive.min.css',
        'style/style_dynamic_responsive.css',
        'style/vertical_responsive.min.css',
        'js_composer/js_composer.css',
        'style/custom_css.css',
        'style/webkit_stylesheet.css'*/
], 'public/css/all_third_party.css');
    mix.scripts([
       /* paths.layerslider + 'js/greensock.js',
        paths.layerslider + 'js/jquery.js',
        'vigor/jquery-migrate.min.js',
        paths.layerslider + 'js/layerslider.kreaturamedia.jquery.js',
        paths.layerslider + 'js/layerslider.transitions.js',

        'final-tiles-gallery/jquery.finalTilesGallery.js',
        'vigor/edgt-like.js',
        'vigor/plugins.js',
        'vigor/jquery.carouFredSel-6.2.1.js',
        'vigor/jquery.fullPage.min.js',
        'vigor/lemmon-slider.js',
        'vigor/jquery.mousewheel.min.js',
        'vigor/jquery.touchSwipe.min.js',
        'js_composer/isotope.pkgd.min.js',
        'vigor/default_dynamic.js',
        'vigor/default.js',
        'vigor/custom_js.js',
        'vigor/TweenLite.min.js',
        'vigor/ScrollToPlugin.min.js',
        'vigor/smoothPageScroll.js',
        'vigor/comment-reply.min.js',
        'js_composer/js_composer_front.js',*/
        'contact-form-7/jquery.form.mind.js',
        'contact-form-7/scripts.js',
        'custom-facebook-feed-pro/cff-scripts.js',
        'advanced-responsive-video-embedder/arve-public.js'

], 'public/js/all_third_party.js');
  /*  mix.copy([
        'resources/assets/fonts/elegant-icons/**',
        'resources/assets/fonts/js_composer/**',
        'resources/assets/fonts/linea-icons/**',
        'resources/assets/fonts/ion-icons/**'

    ],'public/fonts');*/
    //mix.copy('resources/assets/fonts/js_composer/**','public/fonts');
});
