var map;
var markersArr;
var myLocation = {lat: 0, lng: 0};
var classArr = [];
var markerColorsArr = [/* RED*/ "fe5748", /* BLUE*/ "67abfe", /* GREEN*/"69ea48", /* YELLOW*/"f5f500", /* ORANGE*/ "ff8e38"];

// Map constructor
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: myLocation,
    rotateControl: true
  });
}

function classify(fileData) {
  var classSet = new Set();
  classArr = [];
  for(var i=0; i < fileData.data.length-1; i++) {
    classSet.add(fileData.data[i].class);
  }
  for (let item of classSet.values()) {
    classArr.push(item);
  }
  assignColors();
}

function assignColors() {
  var colorArr = randomizeColors();
  console.log(classArr.length);
  for (var j = 0; j < markersArr.length; j++) {
    for (var i = 0; i < classArr.length; i++) {
      if (classArr[i] == markersArr[j].class_) {
        console.log(markersArr[j].class_ + " " + classArr[i]);
        markersArr[j].setIcon(new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + colorArr[i]));
      }
    };
  }
  addLegend(colorArr);
}

function randomizeColors() {
  var markerColors = markerColorsArr;
  var length = markerColorsArr.length;
  var randzdColors = [];
  for (var i = 0; i < classArr.length; i++) {
    var j = Math.floor(Math.random() * length);
    randzdColors.push(markerColors[j]);
    markerColors.splice(j, 1);
    length--;
  };
  return randzdColors;
}

function addLegend(colors) {
  document.getElementById("legend-heading").innerHTML = "Legend:" + "<br />";
  for (var i = 0; i < classArr.length; i++) {
    // Create a container for the image and text
    var row = document.createElement("div");
    // Add image to container
    var img = document.createElement('img');
    img.src = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + colors[i];
    row.appendChild(img);
    // Add text to container
    var row_text = document.createElement('span');  // NOTE: Span allows you to add in line elements!
    row_text.innerHTML = ": " + classArr[i] + '<br>';
    row.appendChild(row_text);
    // Add container to legend
    document.getElementById("legend-content").appendChild(row);
  };
}

function updateMapCenter(fileData) {
  var centerLat = 0;
  var centerLon = 0;
  var centerLatTotal = 0;
  var centerLonTotal = 0;
  for(var i=0; i<fileData.data.length-1; i++) {
    centerLatTotal += fileData.data[i].latitude;
    centerLonTotal += fileData.data[i].longitude;
  }
  centerLat = centerLatTotal / (fileData.data.length-1);
  centerLon = centerLonTotal / (fileData.data.length-1);
  var newCenter = {lat: centerLat, lng: centerLon};
  map.setCenter(newCenter);
  map.setZoom(10);
}

// This method is only called when the initial CSV file is uploaded
function addMarkers(data) {
  markersArr = [];
  for (var i = 0; i<data.data.length-1 ; i++) {
    var lat = data.data[i].latitude;
    var lon = data.data[i].longitude;
    var prov = data.data[i].Provider;
    var _class = data.data[i].class;
    var timeMillis = data.data[i].senseStartTimeMillis;
    if (lat !== undefined & lon !== undefined) {
      var location = new google.maps.LatLng(lat, lon);
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        provider: prov,
        timeStamp: timeMillis,
        class_: _class
      });
      //marker.setIcon(new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + markerColorsArr[0]));
      markersArr.push(marker);
    }
  }
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
