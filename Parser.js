var data;

function handleFile(evt) {
  var file = evt.target.files[0];
  console.log(file);
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      data = results;
      updateMapCenter(data);
      addMarkers(data);
      classify(data);
      addSlider(data);
    }
  });
}

$(document).ready(function() {
  $("#csv-file").change(handleFile);
});
