class Pathfinder {

    bower(path) {
        return 'bower_components/' + path;
    }

    node(path) {
        return 'node_modules/' + path;
    }

    resources(path) {
        return 'resources/assets/' + path;
    }

    sass(path) {
        return this.resources('sass/' + path);
    }

    js(path) {
        return this.resources('js/' + path);
    }

    fonts(path) {
        return this.resources('fonts/' + path);
    }

    images(path) {
        return this.resources('images/' + path);
    }

    libs(path) {
        return this.resources('library/' + path);
    }

    public(path) {
        return 'public/' + path;
    }

    assets(path) {
        return this.public('assets/' + path);
    }

    vendors(path) {
        return this.public('vendors/' + path);
    }

}

let paths = new Pathfinder();

const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.disableNotifications();

mix.js(paths.js('app.js'), paths.public('js'))
   .react(paths.js('test.js'), paths.public('js'))
   .react(paths.js('body.js'), paths.public('js'));

mix.sass(paths.sass('app.scss'), paths.public('css'))
   .sass(paths.sass('bootstrap.scss'), paths.public('css'));

//** vendors
mix.sass(paths.node('slick-carousel/slick/slick.scss'), paths.vendors('slick-carousel'))
    .sass(paths.node('slick-carousel/slick/slick-theme.scss'), paths.vendors('slick-carousel'));

mix.copy(paths.bower('bootstrap-sass/assets/javascripts/'), paths.vendors('bootstrap-sass'), false);
mix.copy(paths.bower('bootstrap-sass/assets/javascripts/bootstrap.min.js'), paths.public('js'));

mix.copy(paths.bower('font-awesome/fonts/'), paths.public('fonts'));
mix.copy(paths.bower('moment/min/'), paths.vendors('moment'));
mix.copy(paths.bower('jquery/dist/jquery.min.js'), paths.vendors(''));
mix.copy(paths.bower('moment-timezone/builds/'), paths.vendors('moment-timezone'));
mix.copy(paths.bower('matchHeight/jquery.matchHeight.js'), paths.vendors('matchHeight'));
mix.copy(paths.bower('maplace-js/src/'), paths.vendors('maplace-js'));
mix.copy(paths.bower('easydropdown/src/jquery.easydropdown.js'), paths.vendors('easydropdown'));
mix.copy(paths.bower('easydropdown/themes/'), paths.vendors('easydropdown'));
mix.copy(paths.bower('lightslider/dist/'), paths.vendors('lightslider'));
