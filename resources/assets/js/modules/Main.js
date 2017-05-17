import Map from './Map';

export default class Main {

    constructor() {
      this.container = $('.main');
      this.gmap;
      this.houser_item_container = $('.houses-item-container');
      this.paginator_dom = this.container.find('.paginator');
      this.loading_dom = this.container.find('.loading');

      this.inititalize();
      this.gMap = new Map();
      this.gMap.inititalize();
    }

    inititalize() {
      let me = this;

      $('.item-slider').lightSlider({
        gallery: false,
        item: 1,
        loop: true,
        slideMargin: 0,
        pauseOnHover: true,
        mode: 'fade',
        pager: false,
      });

      //** Initialize matchHeight
      $('.item').matchHeight();

      //** Change map view when hovering on an `item`
      $('body').on('mouseover', '.item', function() {
        let this_index = $(this).data('index');
        me.gMap.viewOnMap(this_index + 1);
      });

      //** Footer events
      $('.footer-button').on('click', function() {
        $( ".footer" ).slideToggle( "slow" );
      });

      $('.close-footer-btn').on('click', function() {
        $( ".footer" ).slideToggle( "slow" );
      });

      /**
       * Pagination event
       */
      $('body').on('click', '.pagination a', function(e) {
        e.preventDefault();
        me.getHouseItems($(this));
      });
    }

    getHouseItems(_this) {
      let me = this;

      // Show loading state
      me.loading_dom.show();

      let url = _this.attr('href'); // Get target url
      $.ajax({
        url : url
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


}
