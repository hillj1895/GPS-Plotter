var map;
var markersArr = [];
var myLocation = {lat: 0, lng: 0};

// Map constructor
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: myLocation,
    rotateControl: true
  });
}

function updateMapCenter(fileData)
{
  var centerLat = 0;
  var centerLon = 0;
  var centerLatTotal = 0;
  var centerLonTotal = 0;
  for(var i=0; i<fileData.data.length; i++)
  {
    centerLatTotal += fileData.data[i].latitude;
    centerLonTotal += fileData.data[i].longitude;
  }
  centerLat = centerLatTotal / (fileData.data.length);
  centerLon = centerLonTotal / (fileData.data.length);
  var newCenter = {lat: centerLat, lng: centerLon};
  console.log("CenterLat: " + centerLatTotal + ". CenterLon: " + centerLonTotal);
  map.setCenter(newCenter);
  map.setZoom(8);
}

function addMarker(lt, ln, prov, timeMillis) {
  var location = new google.maps.LatLng(lt, ln);
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  if (prov == "GPS") {
    marker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
  }
  else {
    marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
  }
  marker.provider = prov;
  marker.timeStamp = timeMillis;
  markersArr.push(marker);
}


function updateMarkers(timeStart, timeEnd) {
  for (var i = 0; i < markersArr.length; i++) {
    thisMarker = markersArr[i];
    markerTime = thisMarker.timeStamp;
    if (markerTime < timeStart || markerTime > timeEnd) {
      thisMarker.setMap(null);
    }
    else {
      thisMarker.setMap(map);
    }
  }
}
