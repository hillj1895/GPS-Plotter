var map;
var myLocation = {lat: 43.3095, lng: -73.644};


function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
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
  console.log("Latitude: " + lt + ". Longitude: " + ln);

  var location = {lat: lt, lng: ln};
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lt, ln),
    map: map
  });
}
