var map;
var myLocation = {lat: 43.3095, lng: -73.644};
function initMap() {
  var myLatLng = myLocation;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
    rotateControl: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation:google.maps.Animation.DROP,
    title: 'Hello World!'
  });

  var infoWindow = new google.maps.InfoWindow({content:"Hello"});
  google.maps.event.addListener(marker,'click',function(e){

    infoWindow.open(map, marker);
    });
}
