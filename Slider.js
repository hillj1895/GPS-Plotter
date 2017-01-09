function addSlider(fileData) {
	var minDate = new Date(fileData.data[0].local_time);
	var maxDate = new Date(fileData.data[data.data.length - 1].local_time);

	$("#slider").dateRangeSlider({
	  
	  arrows: false,

	  bounds: {
		  min: minDate, 
		  max: maxDate
	  },

	  defaultValues: {
		  min: minDate, 
		  max: maxDate
	  }
	});

	document.getElementById("sliderHeading").innerHTML = "Specify a Date Range:";

	// Will call an updateMarkers() function that adds/removes points depending on their date
	$("#slider").bind("valuesChanged", function(e, data){
	  console.log("Values just changed. min: " + data.values.min + " max: " + data.values.max);
	});
}
