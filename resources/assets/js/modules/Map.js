export default class Map {

  constructor() {
    this.container = $('.main');
    this.gmap;


  }

  inititalize() {
    let me = this;
    let loc = this.getAllLocations();

    this.gmap = new Maplace({
          locations: loc,
          controls_on_map: false,
          map_div: '#google-map',
          show_markers: true,
          map_options: {zoomControlOptions: {position: google.maps.ControlPosition.TOP_RIGHT}},
          visualRefresh: true,
      });

    this.gmap.Load();

  }

  getAllLocations() {
    let locations = [];
    this.container.find('.item').each(function(index, el) {
      let lat = $(this).data('lat');
      let long = $(this).data('long');
      let price = $(this).data('price');
      let name = $(this).data('name');

      let location = {
        lat: lat,
        lon: long,
        zoom: 14,
        visible: true,
        title: price,
        html: [
          '<h4>' + name + '</h4>',
          '<p style="margin-top: -10px; font-weight: bolder;">&#8369;' + price + '</p>'
      ].join(''),
        show_infowindow: true,
      };
      locations.push(location);
    });

    return locations;
  }

  removeAllLocations() {
    let locations = [];
    // Get all `items` save to array
    this.container.find('.item').each(function(index, el) {
      locations.push(index);
    });
    // Remove locations method on `maplace-js`
    this.gmap.RemoveLocations(locations);
    this.gmap.Load(); // Load to refresh map
  }

  viewOnMap(index) {
    this.gmap.ViewOnMap(index);
  }

  reload() {
    // Add locations on the map this is the new locations comes from the call
    this.gmap.AddLocations(this.getAllLocations());

    this.gmap.Load();
  }

}
