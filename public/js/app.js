/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 226);
/******/ })
/************************************************************************/
/******/ ({

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Main = __webpack_require__(200);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _Main2.default();

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Map = __webpack_require__(201);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.container = $('.main');
    this.gmap;
    this.houser_item_container = $('.houses-item-container');
    this.paginator_dom = this.container.find('.paginator');
    this.loading_dom = this.container.find('.loading');

    this.inititalize();
    this.gMap = new _Map2.default();
    this.gMap.inititalize();
  }

  _createClass(Main, [{
    key: 'inititalize',
    value: function inititalize() {
      var me = this;

      $('.item-slider').lightSlider({
        gallery: false,
        item: 1,
        loop: true,
        slideMargin: 0,
        pauseOnHover: true,
        mode: 'fade',
        pager: false
      });

      //** Initialize matchHeight
      $('.item').matchHeight();

      //** Change map view when hovering on an `item`
      $('body').on('mouseover', '.item', function () {
        var this_index = $(this).data('index');
        me.gMap.viewOnMap(this_index + 1);
      });

      //** Footer events
      $('.footer-button').on('click', function () {
        $(".footer").slideToggle("slow");
      });

      $('.close-footer-btn').on('click', function () {
        $(".footer").slideToggle("slow");
      });

      /**
       * Pagination event
       */
      $('body').on('click', '.pagination a', function (e) {
        e.preventDefault();
        me.getHouseItems($(this));
      });
    }
  }, {
    key: 'getHouseItems',
    value: function getHouseItems(_this) {
      var me = this;

      // Show loading state
      me.loading_dom.show();

      var url = _this.attr('href'); // Get target url
      $.ajax({
        url: url
      }).done(function (data) {
        // Request is done
        // First remove all map locations
        me.gMap.removeAllLocations();

        // Append houses as `items` on the container
        me.houser_item_container.html(data.items);

        me.gMap.reload();

        me.inititalize();

        // Recreate paginator view
        me.paginator_dom.empty();
        me.paginator_dom.append(data.paginator);

        $("html, body").animate({
          scrollTop: 0
        }, 500); // Scroll to top

        me.loading_dom.hide();
      }).fail(function () {
        alert('Houses could not be loaded.');
      });
    }
  }]);

  return Main;
}();

exports.default = Main;
module.exports = exports['default'];

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
  function Map() {
    _classCallCheck(this, Map);

    this.container = $('.main');
    this.gmap;
  }

  _createClass(Map, [{
    key: 'inititalize',
    value: function inititalize() {
      var me = this;
      var loc = this.getAllLocations();

      this.gmap = new Maplace({
        locations: loc,
        controls_on_map: false,
        map_div: '#google-map',
        show_markers: true,
        map_options: { zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT } },
        visualRefresh: true
      });

      this.gmap.Load();
    }
  }, {
    key: 'getAllLocations',
    value: function getAllLocations() {
      var locations = [];
      this.container.find('.item').each(function (index, el) {
        var lat = $(this).data('lat');
        var long = $(this).data('long');
        var price = $(this).data('price');
        var name = $(this).data('name');

        var location = {
          lat: lat,
          lon: long,
          zoom: 14,
          visible: true,
          title: price,
          html: ['<h4>' + name + '</h4>', '<p style="margin-top: -10px; font-weight: bolder;">&#8369;' + price + '</p>'].join(''),
          show_infowindow: true
        };
        locations.push(location);
      });

      return locations;
    }
  }, {
    key: 'removeAllLocations',
    value: function removeAllLocations() {
      var locations = [];
      // Get all `items` save to array
      this.container.find('.item').each(function (index, el) {
        locations.push(index);
      });
      // Remove locations method on `maplace-js`
      this.gmap.RemoveLocations(locations);
      this.gmap.Load(); // Load to refresh map
    }
  }, {
    key: 'viewOnMap',
    value: function viewOnMap(index) {
      this.gmap.ViewOnMap(index);
    }
  }, {
    key: 'reload',
    value: function reload() {
      // Add locations on the map this is the new locations comes from the call
      this.gmap.AddLocations(this.getAllLocations());

      this.gmap.Load();
    }
  }]);

  return Map;
}();

exports.default = Map;
module.exports = exports['default'];

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(188);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(191);
module.exports = __webpack_require__(192);


/***/ })

/******/ });