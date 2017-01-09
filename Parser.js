var data;

function handleFile(evt) {

  var file = evt.target.files[0];

  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) 
    {
      data = results;
      console.log(results.data);
      addSlider(data);
      addMarkers(data);
    }
  });
}

function addMarkers(data)
{
  for (var i = 0; i<data.data.length ; i++)
  {
    var lat = data.data[i].latitude;
    var lon = data.data[i].longitude;
    var prov = data.data[i].Provider;
    addMarker(lat, lon, prov);
  }
}

/* Troubleshooting Function 
 function showLatLang(lat, lon)
{
  console.log("Latitude: " + lat + ". Longitude: " + lon);
} */

$(document).ready(function()
{
  $("#csv-file").change(handleFile);
});
