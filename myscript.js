function initialize() {
    var mapOptions = {
            center: new google.maps.LatLng(40.435833800555567, -78.44189453125),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 11
          };	 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};