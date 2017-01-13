var data;

function handleFile(evt) {
  var file = evt.target.files[0];
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results;
      console.log(results.data);
      addSlider(data);
      updateMapCenter(data);
      addMarkers(data);
    }
  });
}

// This method is only called when the initial CSV file is uploaded
function addMarkers(data) {
  for (var i = 0; i<data.data.length ; i++) {
    var lat = data.data[i].latitude;
    var lon = data.data[i].longitude;
    var prov = data.data[i].Provider;
    var timeMillis = data.data[i].senseStartTimeMillis;
    if (lat !== undefined & lon !== undefined) {
        addMarker(lat, lon, prov, timeMillis);
    }
  }
}

$(document).ready(function()
{
  $("#csv-file").change(handleFile);
});
