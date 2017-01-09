var map;
var myLocation = {lat: 41.8077, lng: -72.2540};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 13,
    center: myLocation,
    rotateControl: true
  });

  /* var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation:google.maps.Animation.DROP,
    title: 'Hello World!'
  }); */
}

function addMarker(lt, ln, prov)
{
  // Troubleshooting call:
  //console.log("Latitude: " + lt + ". Longitude: " + ln);

  var location = new google.maps.LatLng(lt, ln);
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
